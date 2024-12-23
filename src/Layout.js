import { Outlet, Link } from 'react-router-dom'
import Header from './components/Header'

function Layout() {
  return (
    <>
      <div className="flex items-start">
        <nav className="bg-gray-700 w-[300px] h-dvh">
          <ul className="flex flex-col pt-14">
            <li className="border-b border-gray-600"><Link className="text-white block px-4 py-3" to="/">Home</Link></li>
            <li className="border-b border-gray-600"><Link className="text-white block px-4 py-3" to="/to-do-list">To Do List</Link></li>
            <li className="border-b border-gray-600"><Link className="text-white block px-4 py-3" to="/dictionary">Dictionary</Link></li>
            <li className="border-b border-gray-600"><Link className="text-white block px-4 py-3" to="/text-manipulate">Text Manipulate</Link></li>
          </ul>
        </nav>
        <div className="grow">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout