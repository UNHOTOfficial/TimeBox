export function getDate() {
  let date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  return date;
}
export function getTime() {
  const date = new Date();
  date.toLocaleString("en-US", {
    hour: "2-digit",
    hour12: true,
    timeZone: "Asia/Tehran",
  });
  const hour = date.getHours() + 1;

  return hour;
}
