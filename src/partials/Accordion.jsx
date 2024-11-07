import styles from "@/partials/Acordion.module.css";
import { Children } from 'react';


export default function Accordion({ children }) {

    // onclick = () => {
    //     alert("Hello World!")
    // }
    return (
        <div className={styles.accordion}>
            {children}
        </div>
    );
}