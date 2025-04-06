import Link from "next/link";

export default function About() {
  return (
    <div className="about-page bg-gray-100 min-h-screen px-6 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Learn more about Help a Child Africa, our mission, and the impact we
          are making in children's lives across Africa.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="mb-12 flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is to provide access to nutritious food and quality
            education for children in underprivileged communities across Africa.
            We work to eliminate hunger and provide educational opportunities to
            help children break the cycle of poverty.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            We envision a world where every child has access to the resources
            they need to thrive—where education, nourishment, and opportunity
            are within reach for all children, regardless of their background or
            circumstances.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="value-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Compassion
            </h3>
            <p className="text-lg text-gray-700">
              We approach every challenge with empathy and understanding,
              working to make a meaningful impact on the lives of children and
              communities.
            </p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Collaboration
            </h3>
            <p className="text-lg text-gray-700">
              We believe in the power of collaboration with local communities,
              partners, and volunteers to create sustainable solutions.
            </p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Integrity
            </h3>
            <p className="text-lg text-gray-700">
              We uphold the highest standards of transparency and accountability
              in everything we do, ensuring that every contribution counts.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your support can change the lives of children in need. Learn more
          about how you can contribute to our mission.
        </p>
        <Link href="/donate">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-3xl shadow-lg hover:bg-blue-500 transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}
