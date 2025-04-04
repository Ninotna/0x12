// Navbar component

import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo SportSee" />
        </NavLink>
      </div>
      <ul className="header__links">
        <li>
          <NavLink
            // to={`/user/${userId}`}
            to="/user/id"
            className={({ isActive }) =>
              `header__link${isActive ? " header__link--active" : ""}`
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `header__link${isActive ? " header__link--active" : ""}`
            }
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `header__link${isActive ? " header__link--active" : ""}`
            }
          >
            Réglages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `header__link${isActive ? " header__link--active" : ""}`
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
