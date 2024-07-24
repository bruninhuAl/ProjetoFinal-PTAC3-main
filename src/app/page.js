'use client'
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import ErroGetFetch from "./ErroGetFetch";
import styles from "./styles/main.module.css";
import { useState, useEffect } from "react"
import { listAnime } from "./api/route";
import Sprigatito from "./Sprigatito";

export default function Home() {

  const [listAnime, setListAnime] = useState([]);
  const [listCompleta, setListCompleta] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAnimes = async() => {
      try{
        const objeto = await fetch('http://localhost:3000/api');
        const data = await objeto.json();
        setListAnime(data);
        setListCompleta(data);
      }
      catch{
        setIsError(true);
      }
      }
        getAnimes();
  }, []);

  if (isError == true){
    return <ErroGetFetch/>
  }

  if (listCompleta[0] == null){
    return <Sprigatito/>
  }

  return (
    <main className={styles.main}>
      {listAnime.map((anime) => (
        <div className={styles.card} key={anime.id}>
          {<div className={styles.titulo}>{anime.titulo}</div>}
          <Image className={styles.img} width={300} height={400} src={anime.img} />
          {<div className={styles.textopeq}>{anime.categoria}</div>}
          {<div className={styles.textopeq}><strong>Autor:</strong> {anime.autor}</div>}
          {<div className={styles.textopeq}><strong>Ano:</strong> {anime.anoPublicacao}</div>}
          {<div className={styles.textopeq}><strong>Gênero:</strong> {anime.genero}</div>}
          <Link href={'/animes/' + anime.id}>
          <button>Assistir</button>
          </Link>
        </div>
      ))}
    </main>
  );
}
