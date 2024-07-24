import Link from "next/link"
import styles from "../../styles/main.module.css";
import Image from "next/image";

export default async function Anime({params}) {

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    return(
        <main className={styles.main2}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image className={styles.img} width={500} height={500} src={data.img} />
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>{data.titulo}</h1>
                    <p className={styles.textopeq2}><strong>Autor: </strong>{data.autor}</p>
                    <p className={styles.textopeq2}><strong>Ano: </strong>{data.anoPublicacao}</p>
                    <p className={styles.textopeq2}><strong>Gênero: </strong>{data.genero}</p>
                </div>
            </div>
        </main>
    );
}