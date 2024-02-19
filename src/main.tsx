import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}