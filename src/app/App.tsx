import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import MainPage from '../pages/main/components/MainPage';
import UncontrolledRegistration from '../pages/uncontrolledRegistration/components/UncontrolledRegistration';
import ReactHookRegistration from '../pages/reactHookRegistration/components/ReactHookRegistration';
import Page404 from '../pages/page404/components/Page404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="uncontrolledForm" element={<UncontrolledRegistration />} />
      <Route path="reactHookForm" element={<ReactHookRegistration />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
