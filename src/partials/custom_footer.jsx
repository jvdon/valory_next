import style from './custom_footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>

            <div className={style.valory}>
                <div className={style.logo}>
                    <img src="/images/logoValoryGray.png" alt="" />
                    <div className={style.info}>
                        <p>&copy; Grupo Valory 53.524.768/0001-20</p>
                        <p>Avenida Paulista, 302 - São Paulo/SP</p>
                    </div>
                </div>
                <div className={style.redes}>
                    <a href="https://www.instagram.com/grupovalory/">
                        <img src="/images/instagram.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/facebook.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/grupo-valory-ltda/">
                        <img src="/images/linkedin.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/tiktok.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/youtube.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/images/logo_reclame_aqui.png" alt="" />
                    </a>
                </div>
            </div>
            <p className={style.legal}>A Valory é uma plataforma digital de Soluções Financeiras tendo como principal produto a Negociação
                de Dívidas. Valory tem como objetivo central devolver o acesso ao crédito para as famílias
                brasileiras e diminuir o nível de inadimplência no mercado.</p>
        </footer>
    );
}