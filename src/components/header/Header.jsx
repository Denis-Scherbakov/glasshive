import "../header/header.css";
import { Button } from "../button/Button";
import { DropDown } from "../drop-down-menu/DropDown";
import logo from "../../images/header/logo.png";

export function Header() {
  function showDropDown(e) {
    let dropDown = document.querySelector(".drop-down");
    dropDown.classList.add("drop-down--shown");
  }
  function hideDropDown(e) {
    let dropDown = document.querySelector(".drop-down");
    dropDown.classList.remove("drop-down--shown");
  }
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="nav__ul">
          <li>
            <a href="/">
              <img
                src={logo}
                width="132"
                height="28"
                alt="glasshive logo"
                className="header__logo"
              />
            </a>
          </li>
          <li onMouseOver={showDropDown} onMouseLeave={hideDropDown}>
            <div className="features-wrapper">
              <a className="li__features" href="/">
                Features
              </a>
              <DropDown />
            </div>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
        <section className="nav__section">
          <Button buttonText="Log in" />
          <Button buttonText="Start Free Trial" color="pink" />
        </section>
      </nav>
    </header>
  );
}
