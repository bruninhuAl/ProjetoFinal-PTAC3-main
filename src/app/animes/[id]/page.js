import Link from "next/link"
import styles from "../../styles/main.module.css";
import Image from "next/image";

export default async function Anime({params}) {

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    return(
        <main className={styles.listAnime}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image className={styles.img} width={500} height={500} src={data.img} />
                </div>
                <div className={styles.detalhesProduto}>
                <h1 className={styles.title}>{data.titulo}</h1>
                    <p className={styles.textopeq2}>{data.autor}</p>
                    <p className={styles.textopeq2}>{data.anoPublicacao}</p>
                    <p className={styles.textopeq2}>{data.genero}</p>
                </div>
            </div>
        </main>
    );
}