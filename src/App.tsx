import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { MachinesPage } from './pages/MachinesPage'
import { ProductsPage } from './pages/ProductsPage'
import { ServiceAreaPage } from './pages/ServiceAreaPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="machines" element={<MachinesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="service-area" element={<ServiceAreaPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
