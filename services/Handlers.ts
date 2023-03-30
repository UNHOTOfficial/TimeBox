import React from "react";

export const handleClick = (
  e: any,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (e.target.disabled) {
    setIsDisabled(true);
    e.target.classList.toggle("border-red-800");
    e.target.classList.toggle("dark:border-red-800");
  } else {
    setIsDisabled(false);
  }
};

export const handleSave = () => {
  const inputs = document.querySelectorAll("input");
  const textAreas = document.querySelectorAll("textarea");
  inputs.forEach((input) => {
    input.disabled = true;
  });
  textAreas.forEach((textArea) => {
    textArea.disabled = true;
  });
  localStorage.setItem("action", "save");
};

export const handleEdit = () => {
  const inputs = document.querySelectorAll("input");
  const textAreas = document.querySelectorAll("textarea");
  inputs.forEach((input) => {
    input.disabled = false;
  });
  textAreas.forEach((textArea) => {
    textArea.disabled = false;
  });
  localStorage.setItem("action", "edit");
};

export const handleReset = () => {
  localStorage.removeItem("BrainDump");
  localStorage.removeItem("Hours");
  localStorage.removeItem("TopPriorities");
  localStorage.removeItem("action");

  location.reload();
  localStorage.setItem("action", "reset");
};

// export function handleInputChange(
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   setFormData:any,
//   prevFormData:any,
//   formData:any
// ): void {
//   const { name, value } = event.target;
//   setFormData((prevFormData:any) => ({
//     ...prevFormData,
//     [name]: value,
//   }));
//   const data = JSON.stringify(formData);
//   localStorage.setItem("BrainDump", data);
// }
