import { useEffect } from "react";

export default function SetFormDataUseEffect(setFormData: any, item: string) {
  useEffect(() => {
    const savedData = localStorage.getItem(item);
    if (savedData) {
      try {
        const parsedData: FormData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [item, setFormData]);
}

export function SetTheme() {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (
        theme === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        try {
          moon?.classList.add("hidden");
          sun?.classList.remove("hidden");
          document.getElementsByTagName("html")[0].classList.add("dark");
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          moon?.classList.remove("hidden");
          sun?.classList.add("hidden");
          document.getElementsByTagName("html")[0].classList.remove("dark");
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [moon, sun]);
}
