import Image from "next/image";
import styles from "./spinner.module.css";

export default function Spinner() {
    return (
        <div className={styles.centralizar}>
            <Image width={100} height={100} alt="" src={"/wind-toy.svg"}/>
        </div>
    )
};