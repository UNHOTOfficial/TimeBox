import React from "react";
import HoursInput from "./HoursInput";

export default function Hours() {
  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];
  return (
    <div>
      {hours.map((hour) => (
        <HoursInput key={hour} hour={hour} />
      ))}
    </div>
  );
}
