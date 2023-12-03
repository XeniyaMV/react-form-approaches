import { NavLink } from 'react-router-dom';
import RoutePaths from '../../../shared/constants/routePaths';

const StartScreen = (): JSX.Element => {
  return (
    <section className="start-screen">
      <div className="container start-screen__wrapper">
        <h1 className="start-screen__title">
          Welcome to <span className="highlight-text">Form Hub</span>.
        </h1>
        <p className="start-screen__description">Choose your path below to begin.</p>

        <div className="start-screen__navigation">
          <NavLink className="button start-screen__button" to={`${RoutePaths.UNCONTROLLED_FORM}`}>
            Uncontrolled Form
          </NavLink>
          <NavLink className="button start-screen__button" to={`${RoutePaths.REACT_HOOK_FORM}`}>
            React Hook Form
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
