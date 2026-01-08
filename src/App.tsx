import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VirtualTour from './pages/VirtualTour'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="virtual-tour" element={<VirtualTour />} />
      </Route>
    </Routes>
  )
}
