import './App.css'

import Routes from "./Routes/Routes"

import { RouterProvider } from 'react-router-dom'



function App() {
  const router = Routes();

  return <RouterProvider router={router} />
}

export default App
