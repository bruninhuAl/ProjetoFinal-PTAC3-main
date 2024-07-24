import { NextResponse } from "next/server";
import { Link } from "react-router-dom";

export const animes = [
    {
        id: 1,
        titulo: "Dragon Ball Super",
        autor: "Akira Toriyama",
        anoPublicacao: 2015,
        genero: "Ação"
        img: "https://m.media-amazon.com/images/I/71xqIymETyS.jpg"
    },
    {
        id: 2,
        titulo: "One Piece",
        autor: "Eiichiro Oda",
        anoPublicacao: 1999,
        genero: "Aventura"
        img: "https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg"
    },
    {
        id: 3,
        titulo: "Pokémon",
        autor: "Satoshi Tajiri",
        anoPublicacao: 1995,
        genero: "Fantasia"
        img: "https://m.media-amazon.com/images/I/612F8bfniwL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 4,
        titulo: "My Hero Academia",
        autor: "Kōhei Horikoshi",
        anoPublicacao: 2014,
        genero: "Super-heróis"
        img: "https://m.media-amazon.com/images/I/81bIkyVXM1S._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 5,
        titulo: "Jujutsu Kaisen",
        autor: "Gege Akutami",
        anoPublicacao: 2018,
        genero: "Ação"
        img: "https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg"
    },
    {
        id: 6,
        titulo: "Naruto",
        autor: "Masashi Kishimoto",
        anoPublicacao: 2007,
        genero: "Aventura"
        img: "https://images-cdn.ubuy.co.in/63527edf3492081cbd062a28-hislooks-naruto-poster-anime-wall-art.jpg"
    },
    {
        id: 7,
        titulo: "Nanatsu no Taizai",
        autor: "Nakaba Suzuki",
        anoPublicacao: 2014,
        genero: "Ação"
        img: "https://img.elo7.com.br/product/zoom/1EC80D2/big-poster-do-anime-nanatsu-no-taizai-tamanho-90x-0-cm-lo002-nerd.jpg"
    },
    {
        id: 8,
        titulo: "One Punch-Man",
        autor: "Yusuke Murata",
        anoPublicacao: 2012,
        genero: "Comédia"
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