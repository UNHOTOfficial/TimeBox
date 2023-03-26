import React from "react";
import TextInputs from "./TextInputs";

export default function Hours() {
  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];
  return (
    <div className="border-2 border-slate-900 rounded-md">
      {hours.map((hour) => (
        <TextInputs key={hour} type="hours" count={hour} />
      ))}
    </div>
  );
}
