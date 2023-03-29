export default function handleDarkMode() {
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  const html = document.getElementsByTagName("html")[0];

  if (moon?.classList.contains("hidden")) {
    moon?.classList.remove("hidden");
    sun?.classList.add("hidden");
    html.classList.add("dark");
  } else {
    moon?.classList.add("hidden");
    sun?.classList.remove("hidden");
    html.classList.remove("dark");
  }
}
