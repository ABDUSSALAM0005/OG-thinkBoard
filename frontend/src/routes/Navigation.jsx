import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"

import CreatePage from "../pages/CreatePage"
import HomePage from "../pages/HomePage"
import NoteDetailPage from "../pages/NoteDetailPage"
import Layout from "../components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/note/:id",
        element: <NoteDetailPage />,
      },
    ],
  },
])

export default function Navigation() {
  return <RouterProvider router={router} />
}