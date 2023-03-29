"use client";

import { getTime } from "@/services/GetDate";
import setFormDataUseEffect from "@/services/UseEffect";
import SetFormDataUseEffect from "@/services/UseEffect";
import UseEffect from "@/services/UseEffect";
import React, { useEffect, useState } from "react";
import TextInputs from "./TextInputs";

export default function Hours() {
  interface FormData {
    5: string;
    5.5: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    23: string;
    24: string;
    25: string;
    26: string;
    27: string;
    28: string;
    29: string;
    30: string;
    31: string;
    32: string;
    33: string;
    34: string;
    35: string;
    36: string;
  }
  const [formData, setFormData] = useState<FormData>({
    5: "",
    5.5: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: "",
    27: "",
    28: "",
    29: "",
    30: "",
    31: "",
    32: "",
    33: "",
    34: "",
    35: "",
    36: "",
  });

  SetFormDataUseEffect(setFormData, "Hours");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    const data = JSON.stringify(formData);
    localStorage.setItem("Hours", data);
  }

  const hours = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  return (
    <div className="border border-slate-900 rounded-sm">
      {hours.map((hour) => (
        <TextInputs
          key={hour}
          name={hour}
          handleInputChange={handleInputChange}
          formData={formData}
          type="hours"
          count={hour}
          hour={hour}
        />
      ))}
    </div>
  );
}
