import Link from "next/link";

export const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gray-100">
        <h2 className="text-center text-4xl font-bold text-blue-600">
          Ready To Make A Difference?
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 py-10 sm:px-6 lg:px-8 bg-gray-100">
        <div>
          <h3 className="mb-4 text-2xl text-blue-600">Make a Donation</h3>
          <p>
            Your contributions can help us provide meals, educational materials,
            and scholarships to children in need. Every dollar counts and makes
            a significant impact.
          </p>
          <Link href="/donate">
            <button className="bg-blue-600 text-white py-3 px-4 mt-4 shadow-xl rounded-3xl cursor-pointer">
              Donate
            </button>
          </Link>
        </div>
        <div>
          <h3 className="mb-4 text-2xl text-blue-600">Sponsor a Child</h3>
          <p>
            By sponsoring a child, you can provide them with the resources they
            need to succeed in school and life. Your support can change their
            future.
          </p>
          <Link href="/sponsor">
            <button className="bg-blue-600 text-white py-3 px-4 mt-4 shadow-xl rounded-3xl cursor-pointer">
              Support
            </button>
          </Link>
        </div>
        <div>
          <h3 className="mb-4 text-2xl text-blue-600">Volunteer </h3>
          <p>
            Join our team of dedicated volunteers and help us in our mission to
            feed and educate children. Your time and skills can make a real
            difference in their lives.
          </p>
          <button className="bg-blue-600 text-white py-3 px-4 mt-4 shadow-xl rounded-3xl cursor-pointer">
            <Link href="/register">Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
