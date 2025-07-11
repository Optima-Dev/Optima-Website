
// importing react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing components
import RootLayout from './components/Layout';

// importing pages
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CommunityPage from "./pages/Community";
import BeAVolunteer from "./pages/BeAVolunteer";
import ArticlePage from "./pages/Article";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ 
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "article/:category", element: <ArticlePage /> },
      { path: "be-a-volunteer", element: <BeAVolunteer /> },
    ],
  }
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
