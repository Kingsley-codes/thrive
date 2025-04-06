"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "donor",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data } = await axios.post("/api/auth/register", formData);

      setFormData({ name: "", email: "", password: "", type: "donor" });
      setMessage("Registration successful! Redirecting to onboarding...");

      setTimeout(() => {
        router.push("/onboarding");
      }, 2000);
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message || "Something went wrong.");
      } else {
        setMessage("Network error, please try again later.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border-none">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get Involved
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Join us in making a difference.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="donor">Donor</option>
              <option value="volunteer">Volunteer</option>
            </select>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>

          <p className="text-gray-600 text-right text-sm mt-4">
            registered already?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
          {message && (
            <p className="text-center text-green-600 mt-4">{message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
