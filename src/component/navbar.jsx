import { Outlet, Link, navigate, useNavigate } from 'react-router-dom'


export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='body'>
        <header>

          <Link to='/todo'>Todo list</Link>
          <Link to='/done'>Done</Link>
          <Link to='/del'>Delete</Link>

        </header>
        <main>
          <Outlet />
        </main>
        <div className='footer'>
          <button onClick={() => navigate('/todo')}>Todo List</button>
          <button onClick={() => navigate('/done')}>Done</button>
          <button onClick={() => navigate('/del')}>Delete</button>
        </div>
      </div>

    </>
  )
}