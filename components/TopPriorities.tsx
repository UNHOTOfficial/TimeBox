"use client";

import React, { useEffect, useState } from "react";
import TextInputs from "./TextInputs";

export default function TopPriorities() {
  return (
    <div className="mt-8 w-full">
      <span className="font-semibold">Top Priorities</span>
      <div className="mt-2">
        <ul>
          <li>
            <input
              type="text"
              id="top1"
              name="top1"
              className="border-x-2 border-t-2 border-slate-800 text-gray-900 text-sm rounded-t-sm block w-full p-2.5"
            />
          </li>
          <li>
            <input
              type="text"
              id="top2"
              name="top2"
              className="border-2 border-slate-800 text-gray-900 text-sm block w-full p-2.5"
            />
          </li>
          <li>
            <input
              type="text"
              id="top3"
              name="top3"
              className="border-x-2 border-b-2 border-slate-800 text-gray-900 text-sm rounded-b-sm block w-full p-2.5"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
