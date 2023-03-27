export function getDate() {
  let date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  return date;
}
export function getTime() {
  const date = new Date();
  const hour = date.getHours() + 1;

  return hour;
}
