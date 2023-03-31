import React from "react";

export default function UnDoneTaskInput({
  name,
  handleInputChange,
  formData,
  handleClick,
  setIsDisabled,
  click,
  setClick,
}: {
  name: any;
  handleInputChange: any;
  formData: any;
  handleClick: any;
  setIsDisabled: any;
  click: any;
  setClick: any;
}) {
  return (
    <input
      type="text"
      id={name}
      name={name}
      onChange={handleInputChange}
      defaultValue={formData[name]}
      onClick={(e) => handleClick(e, setIsDisabled, click, setClick)}
      className="w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
    />
  );
}
