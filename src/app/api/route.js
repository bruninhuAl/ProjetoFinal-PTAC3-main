import { NextResponse } from "next/server";
import { Link } from "react-router-dom";

export const modsMinecraft = [
    {
        id: 1,
        titulo: "Dragon Block C",
        autor: "JinRyuu",
        anoPublicacao: 2014,
        genero: "Ação"
        img: ""
    },
    {
        id: 2,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
        img: ""
    },
    {
        id: 3,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
        img: ""
    },
    {
        id: 4,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
        img: ""
    },
    {
        id: 5,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
        img: ""
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}