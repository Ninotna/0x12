// Aside left barnav

import { NavLink } from 'react-router-dom'
import Zen from '../../assets/icon/zen.svg'
import Swim from '../../assets/icon/swim.svg'
import Bicycle from '../../assets/icon/bicycle.svg'
import Dumbell from '../../assets/icon/dumbell.svg'

function Aside() {
  return (
    <aside className="aside">
      <ul className="aside__links">
        <li>
          <NavLink
            to="/meditation"
            className={(nav) =>
              nav.isActive ? 'aside__link--active' : 'aside__link'
            }
          >
            <div>
              <img src={Zen} alt="Activité : relaxation" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/swimming"
            className={(nav) =>
              nav.isActive ? 'aside__link--active' : 'aside__link'
            }
          >
            <div>
              <img src={Swim} alt="Activité : natation" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cycling"
            className={(nav) =>
              nav.isActive ? 'aside__link--active' : 'aside__link'
            }
          >
            <div>
              <img src={Bicycle} alt="Activité : cyclisme" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bodybuilding"
            className={(nav) =>
              nav.isActive ? 'aside__link--active' : 'aside__link'
            }
          >
            <div>
              <img src={Dumbell} alt="Activité : musculation" />
            </div>
          </NavLink>
        </li>
      </ul>
      <p className="aside__ref">Copyright, SportSee 2020</p>
    </aside>
  )
}

export default Aside
