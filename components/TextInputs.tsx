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
  return (
    <ul className="flex">
      <li>
        <span className="w-8 border-y-2 border-slate-800 text-gray-900 text-sm rounded-x-sm block p-2.5 first:border-t-0">
          {hour}
        </span>
      </li>

      <li>
        <input
          type="text"
          id="top2"
          name={name}
          onChange={handleInputChange}
          defaultValue={formData[name]}
          className="w-full border-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>

      <li>
        <input
          type="text"
          id="top1"
          name={name + 0.5}
          onChange={handleInputChange}
          defaultValue={formData[name + 0.5]}
          className="w-full border-y-2 border-slate-800 text-gray-900 text-sm block py-2.5 first:border-t-0"
        />
      </li>
    </ul>
  );
}
