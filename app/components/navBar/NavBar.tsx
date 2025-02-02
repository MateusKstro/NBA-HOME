"use client";

import MenuLink from "../menuLink/MenuLink";


export default function NavBar(){
    return(
        <>
        <nav className="h-8 flex justify-end items-center px-2">  
            <div className="bg-blue-600 shadow-md px-3 py-1 rounded">
            <ul className="flex space-x-2 text-xs">
            <MenuLink texto="Home" href="/" />
            <MenuLink texto="Temporada" href="/temporada" />
            <MenuLink texto="Placar" href="/placar" />
            <MenuLink texto="Top10" href="/top10" />
            </ul>
            </div>
        </nav>
        </>
    )
}