import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//BLOCO DAS ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Login from './routes/Login.jsx';
import Erro404 from './routes/Erro404.jsx';
//BLOCO DAS ROTAS

const router = createBrowserRouter([
  {
    path: "/", element: <App/>, errorElement: <Erro404 />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/login", element: <Login/> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)