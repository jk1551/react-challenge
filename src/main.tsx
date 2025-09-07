import { createRoot } from 'react-dom/client'
import { ApiProvider } from './hooks/useApi.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>,
)
