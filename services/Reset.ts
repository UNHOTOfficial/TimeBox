import { getDate, getTime } from "./GetDate";

export default function resetForm() {
  let date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  const currentDay = getDate();
  if (!currentDay.match(date)) {
    localStorage.clear();
    location.reload();
  }
}
