import { Route, Routes } from 'react-router-dom'
import { AppView } from 'Frontend/views/AppView'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<AppView />} />
      </Routes>
   )
}
