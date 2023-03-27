import { getTime } from "@/services/GetDate";
import React from "react";

export default function TextInputs({
  type,
  count,
  hour,
  now,
  name,
  handleInputChange,
  formData,
}: any) {
  const currentHour = getTime();

  return currentHour === hour ? (
    <ul className="flex">
      <li>
        <span
          className="bg-blue-100 w-8 border-y-2 border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0"
          id="hourInput"
        >
          {hour}
        </span>
      </li>

      <li>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          className="bg-blue-100 w-full border-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>

      <li>
        <input
          type="text"
          id={name+0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          className="bg-blue-100 w-full border-y-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>
    </ul>
  ) : (
    <ul className="flex">
      <li>
        <span className="w-8 border-y-2 border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0">
          {hour}
        </span>
      </li>

      <li>
        <input
          type="text"
          id={name}
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          className="w-full border-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>

      <li>
        <input
          type="text"
          id={name+0.5}
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          className="w-full border-y-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>
    </ul>
  );
}
