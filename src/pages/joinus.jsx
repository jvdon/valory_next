import Footer from "@/partials/custom_footer";
import Header from "@/partials/custom_header";
import style from "./joinus.module.css";

export default function JoinUs() {
    return (
        <div className={style.App}>
            <Header />
            <main className={style.main}>
                <section>
                    <h1>Vem fazer parte da Valory</h1>
                    <header>
                        <h2>Revolucione o ecossistema financeiro com a gente</h2>
                    </header>
                    <main>

                        <h3>
                            Nosso compromisso é oferecer uma plataforma de soluções financeiras, dedicada a auxiliar indivíduos na conquista da liberdade financeira e na superação de desafios monetários, por meio de uma sólida educação em finanças. Acreditamos firmemente que o equilíbrio financeiro não apenas melhora a qualidade de vida, mas também influencia positivamente todas as outras esferas do nosso bem-estar. Quando as finanças estão em ordem, tudo flui melhor.
                        </h3>
                        <img src="/images/young-people-working-together-startup-company 1.png" alt="" />
                    </main>
                </section>
                <section>
                    <header>
                        <h2>Revolucione o ecossistema financeiro com a gente</h2>
                    </header>
                    <main>
                        <h3>
                            Cada membro da nossa família entende a importância do seu trabalho. Todos nós estamos cientes de que, com trabalho duro, excelência, trabalho em equipe e honestidade, continuaremos mudando a vida de mais pessoas no mundo.
                            Nosso compromisso e motivação são com aqueles que buscam uma segunda oportunidade, que querem recuperar sua tranquilidade.                        </h3>
                        <img src="/images/guy.png" alt="" />
                    </main>
                </section>
                <section>
                    <header>
                        <h1>Evoluímos Juntos</h1>
                    </header>
                    <main>
                        <h3>Somos uma empresa em expansão e em busca de novos talentos!</h3>
                        <img src="/images/labor-union-members-working-together 1.png" alt="" />
                    </main>
                </section>
            </main>
            <section className={style.linkedin}>
                <header>
                    <h3>Veja nossas vagas</h3>
                    <h3>Junte-se a nossa equipe</h3>
                </header>

                <main>
                    <a href="/"><img src="/images/linkedin_145807 1.png" alt="" /></a>
                    <div className={style.row}>
                        <h4>
                            <b>Encontre a vaga dos seus sonhos</b> Se candidate a vaga que seja do seu interesse e nossa área de Talento entrará em contato com você.
                        </h4>
                        <h4>
                            <b>Vamos conhecer mais sobre você</b> Serão realizadas algumas entrevistas de acordo com as necessidades da vaga e você será informado sobre qualquer novidade sobre o processo.
                        </h4>
                        <h4>
                            <b>Você será parte da nossa família</b> Ao concluir o processo seletivo, pediremos que envie alguns documentos para que você oficialmente ingresse na nossa família.
                        </h4>
                    </div>
                </main>

            </section>
            <Footer />
        </div>
    )
}