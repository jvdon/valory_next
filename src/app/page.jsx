"use client"

import style from "@/pages/App.module.css";
import Header from '@/partials/custom_header';
import Footer from '@/partials/custom_footer';
import Carousel from "@/partials/carousel";

export default function Home() {



  const products = [
    {
      "image_url": "/images/mulher_sorridente_trabalhando_no_escritorio_com_papeis_elaptop_11.jpg",
      "title": "Acompanhamos e assessoramos você do início ao fim."
    },
    {
      "image_url": "/images/medium-shot-latin-friends-hanging-out.jpg",
      "title": "Entendemos sua situação financeira."
    },
    {
      "image_url": "/images/people-drinking-coffee-spacious-cafeteria.jpg",
      "title": "Encontramos o melhor produto financeiro e desenhamos um plano de acordo com suas possibilidades."
    },
  ]




  return (
    <div className={style["App"]}>
      <Header />
      <main className={style.main}>

        <Carousel items={products} />



        <div id="about" className={style.stuff}>
          <div className={style.container}>
            <img src="/images/side_view_cute_couple_outdoors.jpeg" alt="" />
            <section>
              <h2>Mudamos suas finanças juntos</h2>

              <div className={style.cards}>
                <div className={style.content}>
                  <h3>Assessoria gratuita</h3>
                  <h4>Cadastre-se e receba sua primeira assessoria gratuita</h4>
                </div>
                <div className={style.content}>
                  <h3>Parcelas fixas</h3>
                  <h4>Planos com poupanças mensais que cabem no seu bolso</h4>
                </div>
                <div className={style.content}>
                  <h3>Desconto nas suas dívidas</h3>
                  <h4>Quite sua dívida com desconto e de adeus ao nome sujo</h4>
                </div>
                <div className={style.content}>
                  <h3>Acompanhamento até o fim</h3>
                  <h4>Ficamos do seu lado até receber sua carta de quitação</h4>
                </div>
              </div>
            </section>
          </div>

          <div className={`${style.container} ${style.reverse}`}>
            <img src="/images/pessoas-de-coworking-trabalhando-juntas.png" alt="" />
            <section>
              <h2>Por que confiar na Valory?</h2>

              <div className={style.cards}>
                <div className={style.content}>
                  <h3>Três anos de trajetória consolidada</h3>
                  <h4>Com três anos de atuação, somos referência em soluções financeiras de confiança.</h4>
                </div>
                <div className={style.content}>
                  <h3>Transformação de Dívidas em Oportunidades</h3>
                  <h4>Ajudamos a converter dívidas em novas possibilidades financeiras.</h4>
                </div>
                <div className={style.content}>
                  <h3>Compromisso com Transparência</h3>
                  <h4>Negociamos de forma clara e honesta, sempre com total transparência.</h4>
                </div>
                <div className={style.content}>
                  <h3>Parceria para o Sucesso</h3>
                  <h4>Estabelecemos relações sólidas para alcançar resultados duradouros.</h4>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={style.company_table}>
          <img src="/images/logo_serasa.png" alt="Serasa" />
          <img src="/images/logo_caixa.png" alt="Caixa" />
          <img src="/images/logo_bradesco.png" alt="Bradesco" />
          <img src="/images/logo_pic_pay.png" alt="PicPay" />
          <img src="/images/logo_itau.png" alt="Itau" />
          <img src="/images/logo_banco_do_brasil.jpg" alt="Banco Do Brasil" />
          <img src="/images/logo_santander.png" alt="Santander" />
          <img src="/images/logo_procon.png" alt="Procon" />
          <img src="/images/logo_inter.png" alt="Inter" />
          <img src="/images/logo_nubank.png" alt="NuBank" />

        </div>
      </main>
      <Footer />
    </div >
  )
}
