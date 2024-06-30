import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Book1 from './pages/Book1.jsx'

/*
const router = createBrowserRouter([
  {//APP
    path:"/",
    element: <App/>,
    errorElement: <NotFound/>,
  },
  {//HOME
    path: "/home",
    element: <Home/>,
  },
]);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
