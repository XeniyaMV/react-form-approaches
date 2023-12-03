import { NavLink } from 'react-router-dom';
import getFullClassName from '../../shared/helpers/getFullClassName';
import { MenuProps } from './types';

const Menu = ({ additionalClassName, menuItems }: MenuProps): JSX.Element => {
  const fullClassName = getFullClassName('menu', additionalClassName);

  return (
    <nav className={fullClassName}>
      <ul className="list menu__list">
        {menuItems.map((item) => (
          <li key={item.title} className="list__item menu__item">
            <NavLink className="menu__item-title" to={item.link}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
