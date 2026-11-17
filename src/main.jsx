import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom';
import { router } from "./router.jsx";


// Ce fichier est fourni : il branche le routeur sur la page.
// Tu n'as rien à y modifier. Ton travail commence dans router.jsx (étape 5).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
