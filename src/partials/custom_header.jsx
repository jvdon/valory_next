import style from './custom_header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <a href="/">
                <img src='/images/logo_valory.png' alt='Valory Logo' />
            </a>
            <div className={style.menu}>
                <a href="/#about"><h2>Sobre Nós</h2></a>
                <a href="/ajuda"><h2>Ajuda</h2></a>
                <a href="/contato"><h2>Contato</h2></a>
                <a href="/joinus"><h2>Trabalhe Conosco</h2></a>
            </div>
            <a className={style.assessoria_button} href="/assessoria"><h2>Assessoria gratuita</h2></a>
        </header>
    );
}