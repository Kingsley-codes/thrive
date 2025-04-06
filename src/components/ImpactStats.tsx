"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 50));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return <h2 className="text-4xl font-bold pb-2">{count.toLocaleString()}+</h2>;
};

const ImpactStats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
      <Card className="text-center px-4 py-9 shadow-lg border border-gray-200 w-80 h-56">
        <CardContent>
          <Counter target={6700} />
          <p className="text-2xl text-gray-700">Meals Provided</p>
        </CardContent>
      </Card>

      <Card className="text-center px-4 py-9 shadow-lg border border-gray-200 w-80 h-56">
        <CardContent>
          <Counter target={900} />
          <p className="text-2xl text-gray-700">Children Sponsored</p>
        </CardContent>
      </Card>

      <Card className="text-center px-4 py-9 shadow-lg border border-gray-200 w-80 h-56">
        <CardContent>
          <Counter target={300} />
          <p className="text-2xl text-gray-700">Schools Supported</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactStats;
