const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('imran-theme');
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  if (toggle) toggle.textContent = theme === 'dark' ? 'Light' : 'Night';
};

applyTheme(storedTheme || (preferredDark ? 'dark' : 'light'));

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('imran-theme', nextTheme);
  });
}
