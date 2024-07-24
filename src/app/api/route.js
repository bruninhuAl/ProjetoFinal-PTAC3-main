import { NextResponse } from "next/server";


export const listAnime = [
    {
        id: 1,
        titulo: "Dragon Ball Super",
        autor: "Akira Toriyama",
        anoPublicacao: 2015,
        genero: "Ação",
        img: "https://m.media-amazon.com/images/I/71xqIymETyS.jpg"
    },
    {
        id: 2,
        titulo: "One Piece",
        autor: "Eiichiro Oda",
        anoPublicacao: 1999,
        genero: "Aventura",
        img: "https://m.media-amazon.com/images/I/712qgGfT3PS._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 3,
        titulo: "Pokémon",
        autor: "Satoshi Tajiri",
        anoPublicacao: 1995,
        genero: "Fantasia",
        img: "https://m.media-amazon.com/images/I/612F8bfniwL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 4,
        titulo: "My Hero Academia",
        autor: "Kōhei Horikoshi",
        anoPublicacao: 2014,
        genero: "Super-heróis",
        img: "https://m.media-amazon.com/images/I/81bIkyVXM1S._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 5,
        titulo: "Jujutsu Kaisen",
        autor: "Gege Akutami",
        anoPublicacao: 2018,
        genero: "Ação",
        img: "https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg"
    },
    {
        id: 6,
        titulo: "Naruto",
        autor: "Masashi Kishimoto",
        anoPublicacao: 2007,
        genero: "Aventura",
        img: "https://m.media-amazon.com/images/I/81Zj-BWityL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 7,
        titulo: "Nanatsu no Taizai",
        autor: "Nakaba Suzuki",
        anoPublicacao: 2014,
        genero: "Ação",
        img: "https://m.media-amazon.com/images/I/816MQ8ruKZL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 8,
        titulo: "One Punch-Man",
        autor: "Yusuke Murata",
        anoPublicacao: 2012,
        genero: "Comédia",
        img: "https://m.media-amazon.com/images/I/71oeGc311SL._AC_SL1500_.jpg"
    }
];

export async function GET() {
    try {
        return NextResponse.json(listAnime)
    } catch (error) {
        return NextResponse.error('Erro interno do server', { status: 500 });
    }
};