import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TransactionDetails from './components/TransactionDetails/TransactionDetails';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />
    },
    {
      path: '/:id',
      element: <TransactionDetails />
    },
  ])
  return (
    <RouterProvider router={route} />
  );
}

export default App;
