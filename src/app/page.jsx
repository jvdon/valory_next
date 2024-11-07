"use client"

import style from "@/pages/App.module.css";
import Header from '@/partials/custom_header';
import Footer from '@/partials/custom_footer';

import { ChevronLeft, ChevronRight, Headset, Speech, Users } from 'lucide-react';
import { useState } from "react";

export default function Home() {

  let [currId, setCurrId] = useState(0);

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

  let prevSlide = (e) => {
    if (currId > 0) {
      currId -= 1;
      console.log("HGoo")
    } else {
      currId = 2;
    }

    setCurrId(currId);
  }

  let nextSlide = (e) => {
    if (currId < products.length - 1) {
      currId += 1;
      console.log("HGoo")
    } else {
      currId = 0;
    }
    setCurrId(currId);
  }

  return (
    <div className={style["App"]}>
      <Header />
      <main className={style.main}>

        <div className={style.carousel}>
          <button className={`${style.carousel_button} ${style.left}`} onClick={(e) => prevSlide(e)} >
            <ChevronLeft size={32} />
          </button>
          {
            products.map((product, index) => {
              return (
                <div key={product.title} className={`${style.carousel_item} ${(index == currId ? style.active : "")}`}>
                  <img src={product.image_url} />
                  <h3 className={style["carousel-caption"]}>{product.title}</h3>
                </div>
              )
            })
          }
          <button className={`${style.carousel_button} ${style.right}`} onClick={(e) => nextSlide(e)} >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className={style.financa_container} id='about'>
          <section>
            <header>
              <Users color='#59c5f4' size={48} />
            </header>
            <main>
              <img src="/images/side_view_cute_couple_outdoors.jpeg" alt="" />
            </main>
          </section>
          <section>
            <header>
              <h2>Mudamos suas finanças juntos</h2>
            </header>
            <main>
              <div className={style.financa_content}>
                <h3>Assessoria gratuita</h3>
                <h4>Cadastre-se e receba sua primeira assessoria gratuita</h4>
              </div>
              <div className={style.financa_content}>
                <h3>Parcelas fixas</h3>
                <h4>Planos com poupanças mensais que cabem no seu bolso</h4>
              </div>
              <div className={style.financa_content}>
                <h3>Desconto nas suas dívidas</h3>
                <h4>Quite sua dívida com desconto e de adeus ao nome sujo</h4>
              </div>
              <div className={style.financa_content}>
                <h3>Acompanhamento até o fim</h3>
                <h4>Ficamos do seu lado até receber sua carta de quitação</h4>
              </div>
            </main>
          </section>
        </div>

        <div className={style.consultoria_container}>
          <section>
            <header>
              <h2>Consultoria</h2>
              <Headset color='#59c5f4' size={72} />
            </header>
            <main>
              <h3>Fornecemos serviços inteligentes de consultoria  para solucionar suas dívidas.</h3>
            </main>
          </section>
          <section>
            <header>
              <h2>Negociação</h2>
              <Speech color='#59c5f4' size={72} />
            </header>
            <main>
              <h3>Planos personalizados que cabem no seu bolso!</h3>
            </main>
          </section>
        </div>

        <div className={style.trust_container}>
          <img src="/images/pessoas-de-coworking-trabalhando-juntas.png" alt="" />
          <section>
            <h3>Por que confiar na Valory?</h3>
            <h4>
              Com três anos de trajetória consolidada, somos referência em soluções financeiras. Nossos especialistas estão preparados para transformar suas dívidas em oportunidades. Iniciamos nossa operação no Brasil com o compromisso de oferecer negociações transparentes e confiáveis. Conte conosco para uma parceria sólida e bem-sucedida.
            </h4>
          </section>
        </div>

        <div className={style.company_table}>
          <img src="/images/logo_serasa.png" alt="" />
          <img src="/images/logo_caixa.png" alt="" />
          <img src="/images/logo_bradesco.png" alt="" />
          <img src="/images/logo_pic_pay.png" alt="" />
          <img src="/images/logo_itau.png" alt="" />
          <img src="/images/logo_banco_do_brasil.png" alt="" />
          <img src="/images/logo_santander.png" alt="" />
          <img src="/images/logo_procon.png" alt="" />
          <img src="/images/logo_inter.png" alt="" />
          <img src="/images/logo_nubank.png" alt="" />

        </div>
      </main>
      <Footer />
    </div >
  )
}
