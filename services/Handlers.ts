export const handleClick = (e: any) => {
  if (e.target.disabled) {
    e.target.classList.toggle("border-blue-500");
  }
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

export const handleReset = () => {
  localStorage.clear();
  location.reload();
};
