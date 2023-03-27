import { useEffect } from "react";

export default function UseEffect(setFormData: any, item: string) {
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
