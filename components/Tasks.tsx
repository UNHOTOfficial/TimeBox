import { getTime } from "@/services/GetDate";
import { useState } from "react";

export default function Tasks({
  name,
  handleInputChange,
  formData,
  handleClick,
  setIsDisabled,
  isDisabled,
  type,
}: {
  name: any;
  handleInputChange: any;
  formData: any;
  handleClick: any;
  setIsDisabled: any;
  isDisabled: any;
  type: any;
}) {
  const [click, setClick] = useState(0);

  return isDisabled ? (
    click % 2 === 0 ? (
      <input
        type="text"
        id={name}
        name={name}
        onChange={handleInputChange}
        defaultValue={formData[name]}
        onClick={(e) =>
          handleClick(e, setIsDisabled, click, setClick(click + 1))
        }
        className={
          type === "now"
            ? "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-800 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
            : "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
        }
      />
    ) : (
      <input
        type="text"
        id={name}
        name={name}
        onChange={handleInputChange}
        defaultValue={formData[name]}
        onClick={(e) =>
          handleClick(e, setIsDisabled, click, setClick(click + 1))
        }
        className={
          type === "now"
            ? "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-800 border border-blue-900 dark:text-slate-100 dark:border-blue-300"
            : "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700 border border-blue-900 dark:text-slate-100 dark:border-blue-300"
        }
      />
    )
  ) : (
    <input
      type="text"
      id={name}
      name={name}
      onChange={handleInputChange}
      defaultValue={formData[name]}
      onClick={(e) => handleClick(e, setIsDisabled, click, setClick(click + 1))}
      className={
        type === "now"
          ? "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-800 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
          : "w-full text-gray-900 text-sm block p-2.5  dark:bg-slate-700 border border-slate-900 dark:text-slate-100 dark:border-slate-300"
      }
    />
  );
}
