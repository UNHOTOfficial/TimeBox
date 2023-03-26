export function getDate() {
  let date = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  return date;
}
export function getTime() {
  const date = new Date();
  const minute = 1000 * 60;
  const hour = minute * 60;
 
  return hour;
}
