import  React from "react";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";
import "../styles/Home.css"
import Slider from "../components/Slider"



export const Home = () => {

    const images = [
        'https://i.scdn.co/image/2556e9b6665dd8104b454a67088c8265706497b3',
        'https://i.scdn.co/image/bc4e2b6a9abcef513b17c3bc7576a42e4f4947a3',
        'https://i.scdn.co/image/ab6761670000ecd45848df373cc4d50104ee4e83',
        'https://i.scdn.co/image/ab6761670000ecd406ff8bf92e05142ac1daeb0d',
        'https://i.scdn.co/image/d5f8ed259ea6945681a42335d7ccb20ffa81a2e5'
      ];

    return (
        <>
            <NavBar />

        <main className="mainHome">
        <div className="container">
            <h3 className="text-center section-subheading">- SongPlay -</h3>
            <h1 className="text-center section-heading">Top 10 mejores Artistas </h1>
    <div className="sliderHome">
      <Slider images={images} />
    </div>

    <NavLink to={'/vistaprevia'} >
    <button className="btn-mas">Ver más</button>
    </NavLink>

        </div>
        </main>
        </>
    )
}