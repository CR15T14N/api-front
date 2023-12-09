import { NavLink } from "react-router-dom";
import "../styles/Error.css"
import error from "../assets/error-404.png"

export const Error = () => {
    return (
        <>
        <main className="background">

        <div className="divError">
        <h2>ERROR 404</h2>
        <p>Not found</p>
        <img className="errorImg" src={error} alt="Error 404" />
        <NavLink to={'/'}>
                <button className="error-btn">Volver a Home</button>
        </NavLink>
        
        </div>
        </main>
        </>
    )
}