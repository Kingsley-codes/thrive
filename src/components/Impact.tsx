import ImpactStats from "./ImpactStats";

export default function Impact() {
  return (
    <div className="intro px-4 py-10 bg-gray-100 rounded flex flex-col lg:flex-row gap-6 w-full">
      {/* Text content - takes 3/5 on larger screens */}
      <div className="w-full bg-blue-100 pb-9">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-blue-600 pt-8">
          Our Impact
        </h1>

        <ImpactStats />
      </div>
    </div>
  );
}
