import { Outlet } from 'react-router-dom'
import '../App.jsx'
import { NavLink } from "react-router-dom";

function DokterMenu() {

  return (
    <div>
        <NavLink
        className={(state) => {
          return state.isActive ? "text-blue-400" : "text-black" + " px-2 py-1";
        }}
        to="/login"
      ><button>Log Out</button></NavLink>
      <Outlet></Outlet>
    </div>
  )
}

export default DokterMenu