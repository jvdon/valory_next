import style from './custom_footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.row}>
                <section>
                    <header>
                        <h2>Nossos Produtos</h2>
                    </header>
                    <main>
                        <a href="/assessoria"><p>Assessoria Garantida</p></a>
                    </main>
                </section>
                <section>
                    <header>
                        <h2>Valory</h2>
                    </header>
                    <main>
                        <p>Integridade ética</p>
                        <p>Sobre nós</p>
                        <p>Carreiras</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h2>Fale com a Valory</h2>
                    </header>
                    <main>
                        <p>Contato</p>
                    </main>
                </section>
                <section>
                    <header>
                        <h2>Políticas</h2>
                    </header>
                    <main>
                        <p>Termos e condições</p>
                        <p>Política de privacidade</p>
                    </main>
                </section>
            </div>
            <div className={style.valory}>
                <div className={style.logo}>
                    <img src="/images/logo_valory_small.png" alt="" />
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
                    <p>Valory © LTDA Endereço: Avenida Paulista, 302 - São Paulo/SP </p>
                    <p>CNPJ sob o nº 53.524.768/0001-20</p>
                    <p>A Valory é uma plataforma digital de Soluções Financeiras tendo como principal produto a Negociação
                        de Dívidas. Valory tem como objetivo central devolver o acesso ao crédito para as famílias
                        brasileiras e diminuir o nível de inadimplência no mercado.</p>

                </div>
            </div>
        </footer>
    );
}