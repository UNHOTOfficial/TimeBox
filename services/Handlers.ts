import React from "react";

export const handleClick = (e: any): void => {
  if (e.target.disabled) {
    e.target.classList.toggle("border-blue-500");
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
};

export const handleReset = () => {
  localStorage.clear();
  location.reload();
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
