// Navbar component

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo/logo.svg'

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
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Réglages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
