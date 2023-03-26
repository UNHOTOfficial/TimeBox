import React from "react";
import TextInputs from "./TextInputs";

export default function TopPriorities() {
  const tops = [1, 2, 3];
  return (
    <div className="mt-8">
      <span className="font-semibold">Top Priorities</span>
      <div className="mt-2">
        <TextInputs type="pro" count={3} />
      </div>
    </div>
  );
}
