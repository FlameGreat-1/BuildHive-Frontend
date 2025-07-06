import { Outlet, /*Link*/ } from 'react-router-dom'

export default function App() {
  return (
    <div className='w-screen overflow-x-none h-[100dvh] bg-light-white text-purple-bg'>
      <Outlet />
    </div>
  )
}