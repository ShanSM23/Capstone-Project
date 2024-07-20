import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import SE03Lite from './components/SE03_lite'
import SE03 from './components/SE03'
import SE03Max from './components/SE03_Max'
import CompareAll from './components/compareAll'
import PreBook from './components/PreBook'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Rentals from './components/Rentals'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/SE03Lite",
      element: <><Navbar/><SE03Lite/><Footer/></>
    },
    {
      path: "/SE03",
      element: <><Navbar/><SE03/><Footer/></>
    },
    {
      path: "/SE03Max",
      element: <><Navbar/><SE03Max/><Footer/></>
    },
    {
      path: "/CompareAll",
      element: <><Navbar/><CompareAll/><Footer/></>
    },
    {
      path: "/PreBook",
      element: <><Navbar/><PreBook/><Footer/></>
    },
    {
      path: "/AboutUs",
      element: <><Navbar/><AboutUs/><Footer/></>
    },
    {
      path: "/ContactUs",
      element: <><Navbar/><ContactUs/><Footer/></>
    },
    {
      path: "/Rentals",
      element: <><Navbar/><Rentals/><Footer/></>
    },
    {
      path: "*",
      element: <><Error/></>
    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
