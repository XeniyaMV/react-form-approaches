import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import MainPage from '../pages/main/components/MainPage';
import UncontrolledRegistration from '../pages/uncontrolledRegistration/components/UncontrolledRegistration';
import ReactHookRegistration from '../pages/reactHookRegistration/components/ReactHookRegistration';
import Page404 from '../pages/page404/components/Page404';
import RoutePaths from '../shared/constants/routePaths';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path={RoutePaths.UNCONTROLLED_FORM} element={<UncontrolledRegistration />} />
      <Route path={RoutePaths.REACT_HOOK_FORM} element={<ReactHookRegistration />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
