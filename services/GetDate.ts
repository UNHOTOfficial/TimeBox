export function getDate() {
  let date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  return date;
}
export function getTime() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + 3600000 * 3.5);
  return localTime.getHours()+1;
}
