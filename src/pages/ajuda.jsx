import { ChevronDown } from 'lucide-react';
import Footer from '../partials/custom_footer'
import Header from '../partials/custom_header'
import style from './ajuda.module.css'
import Accordion from '@/partials/Accordion';

export default function Ajuda() {
    const toggleAccordion = (e) => {
        let btn = e.currentTarget;
        let next = btn.parentElement.nextElementSibling; // Get the corresponding <main> tag

        // Toggle the "active" class on the <main> element
        next.classList.toggle(style["active"]);
    };

    const toggleTab = (e, id) => {
        let btn = e.currentTarget;
        let tabs = document.querySelectorAll(`.${style.tab}`)
        let btns = document.querySelectorAll(`.${style.buttons} button`)

        if (tabs.length > 0) {
            for (let tab of tabs) {
                tab.classList.remove(`${style.active}`)
            }
            tabs[id].classList.add(`${style.active}`)
        }

        if (btns.length > 0) {
            for (let bnt of btns) {
                bnt.classList.remove(`${style.active}`)
            }
            btns[id].classList.add(`${style.active}`)
        }
    }

    return <div className={style.app}>
        <Header />
        <main className={style.main}>
            <h2>Respondemos perguntas frequentes</h2>
            <div >
                <header className={style.buttons}>
                    <button className={style.active} onClick={(e) => toggleTab(e, 0)}>
                        <h3>Valory</h3>
                    </button>
                    <button onClick={(e) => toggleTab(e, 1)}>
                        <h3>Finanças</h3>
                    </button>
                </header>
                <main className={style.tabs}>

                    <div className={`${style.tab} ${style.active}`} >
                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>O programa da Valory é confiável? <ChevronDown size={32} /> </h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Com anos de experiência, transparência total, altos padrões de qualidade e suporte dedicado, somos uma empresa confiável e comprometida com a excelência, nosso programa é personalizado para mudar sua vida .
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>O crédito para quitar dívidas é imediato? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Não, isso depende da duração do seu plano de liquidação e do seu comportamento financeiro durante esse período. Quanto mais você cumprir com os pagamentos e manter a regularidade nos depósitos, mais rapidamente conseguiremos proporcionar crédito e ajudar a liquidar suas dívidas.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Quais os requisitos para entrar no programa? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Para entrar no programa da Valory, é necessário ter um total de dívidas superior a 8 mil reais, seja com uma única instituição ou várias, e estar em atraso ou enfrentando dificuldades para manter os pagamentos em dia. Essas dívidas podem incluir empréstimos pessoais, cartões de crédito ou compras em lojas de departamentos.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Quais benefícios oferecemos? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                <p>Com a Valory, você terá acesso a:</p>
                                <ul>
                                    <li>Assessoria financeira personalizada</li>
                                    <li>Pagamento de todas as suas dívidas em parcelas fixas</li>
                                    <li>Parcelas ajustadas ao seu orçamento</li>
                                    <li>Representação da Valory para suas dívidas</li>
                                    <li>Suporte contínuo sempre que precisar;</li>
                                    <li>Descontos de até 70%;</li>
                                    <li>Consultorias com profissionais especializados;</li>
                                    <li>Acesso a plataforma ValoryFinace;</li>
                                    <li>Acesso a produtos e serviços exclusivos do Grupo Valory;</li>
                                    <li>Atendimento personalizado.</li>
                                    <li>Educação Financeira de Qualidade</li>
                                </ul>
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Em quanto tempo posso quitar minha dívida? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                O tempo para quitar dívidas com o plano de Negociação da Valory depende de cada pessoa, pois definimos um plano específico e personalizado para cada caso. Contudo, nossos clientes costumam se livrar de todos os débitos em uma média de tempo de 8 a 60 meses.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>A Valory recebe alguma comissão?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Sim, recebemos comissões pelo serviço que prestamos ao negociar e conseguir descontos nas suas dívidas com os credores. O primeiro pagamento que você realiza é a comissão de entrada no nosso programa. Além disso, incluímos uma comissão de 0,7% nas suas parcelas mensais. Todos esses valores já estão embutidos no plano de liquidação apresentado pelo seu consultor financeiro, então você não terá que pagar nada além do que foi acordado.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Existe um Limite de dívidas para negociar na Valory?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Você pode registrar todas as suas dívidas, e nós juntaremos todas em uma única parcela para facilitar a quitação.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>A Valory vai comprar minha dívida?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Não, a Valory não compra suas dívidas. O que fazemos é unificá-las em uma única parcela ajustada ao seu orçamento. Utilizamos os pagamentos que você faz para quitar suas dívidas à vista, ajudando a limpar seu nome.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>A Valory oferece empréstimo?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Não, proporcionamos um plano personalizado para liquidar suas dívidas. Após iniciar o pagamento das parcelas acordadas em seu plano de liquidação e demonstrar sua responsabilidade como pagador, concederemos crédito diretamente às empresas. Isso agiliza a limpeza do seu nome de forma significativa. Assim você poderá ter acesso ao crédito mais rápido.
                            </main>
                        </Accordion>
                    </div>
                    <div className={style['tab']} >

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Quais tipos de crédito existem?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                O mercado sempre está inovando os produtos de crédito, dentro deles são: Empréstimo pessoal, cartão de crédito, com lojas de departamento, imobiliário, automotivo, consignado, dentre outros. E agora, existe o crédito reparação da Bravo, uma nova forma de quitar as dívidas e ter de volta o acesso a crédito para realizar seus sonhos e ter uma vida mais tranquila.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>O que é crédito pessoal?<ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                É um valor disponibilizado para pessoas que desejam receber algum montante de dinheiro, onde o mesmo tem juros mensais que podem chegar 119,5% ao ano. Então leia bem o contrato de contratação desse valor para que não pague juros abusivos.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>O cartão de crédito tem juros? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Sim! Porém somente se você atrasar os pagamentos, parcelar a fatura ou pagar o mínimo do cartão. Esses juros podem chegar a mais de 300% ao ano, por isso é muito importante você fazer um uso controlado dos seus cartões.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Como fazer melhor uso do cartão de crédito?  <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Use o seu cartão de crédito de forma responsável, não faça dele uma extensão do seu salário ou ganho mensal. Se você se organizar bem, se torna o seu melhor amigo, pois pode obter pontos em diversos programas de milhas, além de conseguir comprar bens materiais ou realizar os sonhos que tanto sonhou.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Consigo ter crédito mesmo negativado? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Quando você está negativado, os bancos sabem disso e para sua própria proteção evitam dar crédito, com a ideia de não piorar sua situação financeira. Porém a Bravo (re)inventou o acesso a crédito, e com isso podemos proporcionar um crédito para que você quite suas dívidas e retome o controle das suas finanças.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>Como aumentar meu score? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                O Score de crédito é composto por diversos fatores, porém o principal deles é a pontualidade no pagamento das suas contas como luz, água e internet. Além das suas faturas de cartão de crédito e financiamentos automotivos e imobiliários que possa ter.
                            </main>
                        </Accordion>

                        <Accordion>
                            <header>
                                <button onClick={(e) => toggleAccordion(e)}>
                                    <h3>O que fazer quando não consigo pagar minhas dívidas? <ChevronDown size={32} /></h3>
                                </button>
                            </header>
                            <main className={style.accordion_body}>
                                Avalie a sua situação atual e organize seus gastos e despesas para saber o quanto sobra. Assim que fizer isso, você saberá o quanto consegue se comprometer para dedicar às suas dívidas mensalmente e estar mais próximo da sua tranquilidade financeira.
                            </main>
                        </Accordion>
                    </div>
                </main>
            </div>
        </main>
        <Footer />
    </div>
}