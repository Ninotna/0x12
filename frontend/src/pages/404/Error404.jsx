// Set 404 page for unknown routes

import { NavLink } from 'react-router-dom'
import Aside from '../../components/Aside/Aside'

export default function Error404() {
  return (
    <div className="errorPage">
      <Aside />
      <section className="errorPage__content">
        <div className="errorPage__type">404</div>
        <div className="errorPage__title">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink to="/" className="errorPage__link">
          Retourner à la page de connexion
        </NavLink>
      </section>
    </div>
  )
}
