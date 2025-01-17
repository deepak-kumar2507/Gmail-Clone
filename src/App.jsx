import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Inbox from './components/Inbox';
import Body from './components/Body';
import Mail from './components/Mail'; // Corrected import for default export

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail /> // Corrected reference to the Mail component
      }
    ]
  }
]);

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
