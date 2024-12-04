export function Header(): HTMLElement {
  const header = document.createElement("header");
  header.className = "header";

  const title = document.createElement("h1");
  title.className = "header-title";
  title.textContent = "Welcome to My App";

  const nav = document.createElement("nav");
  nav.className = "header-nav";
  nav.innerHTML = `
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  `;

  header.appendChild(title);
  header.appendChild(nav);

  return header;
}