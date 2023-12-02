import getFullClassName from '../../../shared/helpers/getFullClassName';
import { Props } from '../../../shared/types';
import gitHubLogo from '../../../assets/github-mark.svg';
import schoolLogo from '../../../assets/rs_school_js.svg';
import Logo from '../../../shared/UI/logo/Logo';

const Footer = ({ additionalClassName }: Props): JSX.Element => {
  const fullClassName = getFullClassName('footer', additionalClassName);

  return (
    <footer className={fullClassName}>
      <div className="container footer__wrapper">
        <ul className="list footer__list">
          <li className="list__item">
            <Logo
              additionalClassName="footer__logo footer__logo_school"
              link="https://rs.school/"
              linkTarget="_blank"
              iconUrl={schoolLogo}
            />
          </li>
          <li className="list__item">
            <Logo
              additionalClassName="footer__logo footer__logo_github"
              link="https://github.com/XeniyaMV"
              linkTarget="_blank"
              iconUrl={gitHubLogo}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
