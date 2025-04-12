"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { customList } from "country-codes-list";

interface FormData {
  name: string;
  email: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  country: string;
  dial_code: string;
  phone: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  stripeEmail: string;
  stripeCard: string;
}

const countries = Object.values(
  customList("countryCode", "{countryNameEn},{countryCallingCode}")
).map((entry) => {
  const [name, dial_code] = entry.split(",");
  return { name, dial_code };
});

export default function DonatePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    amount: 0,
    currency: "USD",
    paymentMethod: "paypal",
    country: "",
    dial_code: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    stripeEmail: "",
    stripeCard: "",
  });

  const [message, setMessage] = useState<string>("");

  const presetAmounts: number[] = [5, 10, 20, 50, 100];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        if (res.data) {
          setFormData((prev) => ({
            ...prev,
            name: res.data.name,
            email: res.data.email,
          }));
        }
      } catch {
        console.log("User not logged in");
      }
    };
    fetchUser();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "country") {
      const selected = countries.find((c) => c.name === value);
      setFormData((prev) => ({
        ...prev,
        country: value,
        dial_code: selected ? selected.dial_code : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePresetAmount = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("/api/donate", formData);
      if (res.status === 200) {
        setMessage("Thank you for your donation!");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setMessage("Error submitting donation. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-lg border-none">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Make a Donation
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Your support changes lives.
          </p>

          <div className="grid grid-cols-5 gap-2 mb-4">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => handlePresetAmount(amt)}
                className={`p-3 border rounded-lg text-center ${
                  formData.amount === amt
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {formData.currency} {amt}
              </button>
            ))}
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 border rounded-lg"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border rounded-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="country"
              className="w-full p-3 border rounded-lg"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <input
                type="text"
                name="dial_code"
                value={formData.dial_code}
                readOnly
                className="w-1/3 p-3 border rounded-lg bg-gray-100"
              />
              <input
                className="w-2/3 p-3 border rounded-lg"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="paypal">PayPal</option>
              <option value="card">Credit/Debit Card</option>
            </select>

            {formData.paymentMethod === "card" && (
              <div className="space-y-3">
                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder Name"
                  className="w-full p-3 border rounded-lg"
                  value={formData.cardName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="w-full p-3 border rounded-lg"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    className="w-1/2 p-3 border rounded-lg"
                    value={formData.expiry}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    className="w-1/2 p-3 border rounded-lg"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Donate Now
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-green-600 font-medium">
              {message}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
