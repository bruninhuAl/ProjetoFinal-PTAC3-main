import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import ErroGetFetch from "./ErroGetFetch";
import styles from "./styles/main.module.css";
import { useState, useEffect } from "react"
import { listAnime } from "./api/route";

export default function Home() {

  const [listAnime, setListAnime] = useState([]);
  const [listCompleta, setListCompleta] = useState([]);
  const [isError, setIsError] = useState(False);

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

  return (
    <main>
     
    </main>
  );
}
