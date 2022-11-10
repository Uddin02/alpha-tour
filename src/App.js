import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position="top-right"/>
    </div>
  );
}

export default App;
