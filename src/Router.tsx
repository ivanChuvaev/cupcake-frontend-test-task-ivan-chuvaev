import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  }
])

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
