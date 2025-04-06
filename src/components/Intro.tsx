"use client";

import { CldImage } from "next-cloudinary";

export default function Intro() {
  return (
    <div className="intro bg-gray-100 px-4 py-10  rounded flex flex-col lg:flex-row gap-6">
      {/* Text content - takes 3/5 on larger screens */}
      <div className="lg:w-4/7">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left text-blue-600">
          Help a Child Africa – Nourishing Minds, Changing Futures
        </h1>
        <p className="mb-4">
          Millions of children in Africa struggle with hunger and lack access to
          quality education. These basic needs are not luxuries—they are
          essential for a child's growth, development, and future. At Help a
          Child Africa, we are committed to providing nutritious food and
          educational opportunities to children in underprivileged communities.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
          How We Make a Difference
        </h2>
        <p className="mb-4">
          We believe that real change starts with action. Our initiatives focus
          on two core areas:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 [&>li]:marker:text-blue-600">
          <li>
            Feeding Programs – A hungry child cannot focus in school. We work
            with local farmers, food suppliers, and community organizations to
            provide daily meals in schools and villages. Nutritious food fuels
            both the body and the mind, giving children the strength to learn
            and thrive.
          </li>
          <li>
            Education for All – A good education opens doors to opportunities.
            We partner with schools, teachers, and volunteers to provide books,
            learning materials, and scholarships. We also invest in building and
            renovating classrooms, ensuring children have a safe space to learn.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
          Sustainable Impact
        </h2>
        <p className="mb-4">
          Our approach goes beyond short-term aid. We empower communities by
          training local educators, supporting school meal programs, and
          promoting self-sustaining agricultural projects. By working
          hand-in-hand with local leaders, we ensure long-lasting solutions that
          uplift entire communities.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600">
          How You Can Help
        </h2>
        <p className="mb-4">
          Every donation, volunteer effort, and shared story brings us closer to
          transforming a child's future. Whether it's funding a school meal,
          sponsoring a child's education, or spreading awareness, your support
          makes a real impact.
        </p>
        <p>
          Together, we can break the cycle of poverty and give children the
          tools they need to build a better future. Join us today and be part of
          the change.
        </p>
      </div>

      {/* Image container - takes 2/5 on larger screens */}
      <div className="lg:w-3/7 flex ">
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[auto]">
          <CldImage
            src="v2nkvj9sxuye65w3ulml"
            alt="African Children laughing"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
