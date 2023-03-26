"use client";

import { getTime } from "@/services/GetDate";
import React, { useState } from "react";
import TextInputs from "./TextInputs";

export default function Hours() {
  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  return (
    <div className="border-2 border-slate-900 rounded-sm">
      {hours.map((hour) => (
        <TextInputs key={hour} type="hours" count={hour} hour={hour} />
      ))}
    </div>
  );
}
