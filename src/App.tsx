import { Outlet, /*Link*/ } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'


export default function App() {
  return (
    <div >
      <Outlet />
    </div>
  )
}