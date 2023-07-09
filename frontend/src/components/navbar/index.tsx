import {Link, useNavigate} from "react-router-dom"
import {useState } from "react"
import style from "./styles/navbar.module.css"
import { getCookie, logout, } from "../../utils";
import { useAppDispatch } from "../../redux/store";
import { search } from "../../redux/reducer";
function Navbar() {
    const [name,setName] = useState(getCookie("name"));
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function signOut(){
        logout().then(()=>{
            setName("");
            navigate("/login");
        })
    }
  return (
    <nav className={style.nav}>
        <h2 className={style.logo}>CRM</h2>
        <input onChange={e=>dispatch(search(e.target.value))} className={style.search} type="text" placeholder="search"></input>
        <div className={style.profile}>
            {!name && <Link className={style.logout} to={"/login"}>Login</Link>}
            {
                name && <p onClick={signOut} className={style.logout}>logout</p>
            }
        </div>
    </nav>
  )
}

export default Navbar