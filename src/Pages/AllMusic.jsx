import  React from "react";
import Music from "../components/Music";
import FormAdd from "../components/FormAdd";
import NavBar from "../components/NavBar";







export const AllMusic = () => {

    return (
        <>
        <NavBar />
        <main className="mainAllMusic">
        <FormAdd />
        <Music />
        </main>
        </>
    ) 
}