import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'Frontend/routes'

export default function App() {
   return (
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
   )
}
