import { NextResponse } from "next/server";
import { Link } from "react-router-dom";

export const animes = [
    {
        id: 1,
        titulo: "Dragon Ball Z",
        autor: "Akira Toriyama",
        anoPublicacao: 1989,
        genero: "Ação"
        img: ""
    },
    {
        id: 2,
        titulo: "One Piece",
        autor: "Eiichiro Oda",
        anoPublicacao: 1999,
        genero: "Aventura"
        img: ""
    },
    {
        id: 3,
        titulo: "Pokémon",
        autor: "Satoshi Tajiri",
        anoPublicacao: 1995,
        genero: "Fantasia"
        img: ""
    },
    {
        id: 4,
        titulo: "My Hero Academia",
        autor: "Kōhei Horikoshi",
        anoPublicacao: 2014,
        genero: "Super-heróis"
    },
    {
        id: 5,
        titulo: "Jujutsu Kaisen",
        autor: "Gege Akutami",
        anoPublicacao: 2018,
        genero: "Ação"
    },
    {
        id: 6,
        titulo: "Naruto",
        autor: "Masashi Kishimoto",
        anoPublicacao: 2007,
        genero: "Aventura"
    },
    {
        id: 7,
        titulo: "Nanatsu no Taizai",
        autor: "Nakaba Suzuki",
        anoPublicacao: 2014,
        genero: "Ação"
    },
    {
        id: 8,
        titulo: "One Punch-Man",
        autor: "Yusuke Murata",
        anoPublicacao: 2012,
        genero: "Comédia"
    }
];

export async function GET() {
    try {
        return NextResponse.json(listAnime)
    } catch (error) {
        return NextResponse.error('Erro interno do server', { status: 500 });
    }
};