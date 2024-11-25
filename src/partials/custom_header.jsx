import { LucideAudioLines, Menu } from 'lucide-react';
import style from './custom_header.module.css';
import { useState } from 'react';

export default function Header() {

    let [shown, setShown] = useState(false);

    return (
        <header className={style.header}>
            <a className={style.logo} href="/">
                <img src='/images/logo_valory.png' alt='Valory Logo' />

                <button className={style.menu_button} onClick={(e) => {
                    e.preventDefault()
                    setShown(!shown)
                }
                }>
                    <Menu />
                </button>
            </a>
            <div className={style.menu + " " + (shown ? style.active : "")}>
                <a href="/#about"><h2>Sobre Nós</h2></a>
                <a href="/ajuda"><h2>Ajuda</h2></a>
                <a href="/contato"><h2>Contato</h2></a>
                <a href="/joinus"><h2>Trabalhe Conosco</h2></a>
                <a className={style.assessoria_button} href="/assessoria"><h2>Assessoria gratuita</h2></a>
            </div>
        </header>
    );
}