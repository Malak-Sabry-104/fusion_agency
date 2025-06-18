import './style.css'

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleLightingMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
}

document.querySelector('.lighting-mode').addEventListener("click", (e) => {
    toggleLightingMode();
})