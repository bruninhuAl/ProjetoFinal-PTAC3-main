import { NextResponse } from "next/server";
import { Link } from "react-router-dom";

export const modsMinecraft = [
    {
        id: 1,
        titulo: "Dragon Block C",
        autor: "JinRyuu",
        anoPublicacao: 2014,
        genero: "Ação"
    },
    {
        id: 2,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
    },
    {
        id: 3,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
    },
    {
        id: 4,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
    },
    {
        id: 5,
        titulo: "Mine Mine no Mi",
        autor: "WyndFTWz",
        anoPublicacao: 2014,
        genero: "Aventura"
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}