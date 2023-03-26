"use client";

import { getDate } from "@/services/GetDate";
import React, { useState } from "react";

export default function Date() {
  return (
    <div className="flex justify-evenly mt-4 mb-5">
      <span className="font-semibold">Date:</span>
      <span className="underline underline-offset-4">{getDate()}</span>
    </div>
  );
}
