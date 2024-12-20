import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/to-do-list">To Do List</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default Layout