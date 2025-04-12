import Stripe from 'stripe';
import paypal from '@paypal/paypal-server-sdk'; // Updated PayPal SDK import

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// PayPal environment setup using the new SDK
// const environment = new paypal.core.SandboxEnvironment('your_paypal_client_id', 'your_paypal_client_secret');
// const client = new paypal.core.PayPalHttpClient(environment);

// Function to process Stripe payment
const processStripePayment = async (amount, stripeCardToken, currency) => {
    try {
        const stripeAmount = amount * 100; // Safe for USD, GBP, EUR
        const paymentIntent = await stripe.paymentIntents.create({
            amount: stripeAmount,
            currency: currency.toLowerCase(),
            payment_method: stripeCardToken,
            confirm: true,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error('Error processing Stripe payment: ' + error.message);
    }
};


// Function to process PayPal payment
const processPayPalPayment = async (amount) => {
    try {
        const request = new paypal.orders.OrdersCreateRequest();
        request.headers['prefer'] = 'return=representation';
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: amount.toString(),
                },
            }],
        });

        const order = await client.execute(request);
        return order;
    } catch (error) {
        throw new Error('Error processing PayPal payment: ' + error.message);
    }
};

// Controller function for handling donation
export const donate = async (req, res) => {
    const {
        name, email, amount, currency, paymentMethod, phone, cardName, cardNumber, expiry, cvv, stripeEmail, stripeCard,
    } = req.body;

    try {
        if (!name || !email || !amount || !currency || !paymentMethod) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        let paymentResult;

        if (paymentMethod === 'stripe') {
            if (!stripeCard) {
                return res.status(400).json({ message: 'Stripe card token is missing' });
            }
            // Process Stripe Payment
            paymentResult = await processStripePayment(amount, stripeCard, currency);
        } else if (paymentMethod === 'paypal') {
            // Process PayPal Payment
            paymentResult = await processPayPalPayment(amount);
        } else {
            return res.status(400).json({ message: 'Invalid payment method' });
        }

        // Log donation details for auditing purposes
        console.log('Donation details:', {
            name, email, amount, currency, paymentMethod, phone, cardName, cardNumber, expiry, cvv, stripeEmail, stripeCard,
        });

        // If the payment was successful
        res.status(200).json({
            message: 'Thank you for your donation!',
            paymentDetails: paymentResult,
        });
    } catch (error) {
        console.error('Error processing donation:', error);
        res.status(500).json({ message: 'Error processing donation. Please try again later.' });
    }
};

