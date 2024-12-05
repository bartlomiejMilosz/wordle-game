import { h } from "../../utils/dom";
import "./Header.css";

export function Header() {

  return (
    <header className="header">
      <h1 className="header-title">Welcome to My App</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
