import Footer from "@/partials/custom_footer";
import Header from "@/partials/custom_header";
import style from "./contato.module.css";

import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";

export default function Contato() {
    let [id, setId] = useState(1);
    return (
        <div className="main">
            <Header />
            <main className={style.main}>
                <div className={style.top}>
                    <img src="/images/happy-customers-service-agent-with-headset-communicating-with-customer-working-laptop-call-center_637285-127 1.png" ></img>
                </div>

                <div className={style.info}>
                    <div className={style.controls}>
                        <button className={(id == 0 ? style.selected : "")} onClick={() => {
                            setId(0);
                        }} >
                            Sou Cliente
                        </button>

                        <button className={(id == 1 ? style.selected : "")} onClick={() => {
                            setId(1);
                        }}>
                            Primeiro Contato
                        </button>
                    </div>

                    <div className={style.tabs}>
                        <div className={`${style.tab} ${((id == 0 ? style.selected : ""))}`}>
                            <div className={style.row}>
                                <Mail size={32}></Mail>
                                <p>
                                    <a href="mailto://contato@valorybrasil.com">
                                        contato@valorybrasil.com
                                    </a>
                                </p>
                            </div>
                            <div className={style.row}>
                                <Phone size={32}></Phone>
                                <p><a href="tell:+5511911421466">+55 (11) 91142-1466</a></p>
                            </div>
                            <div className={style.row}>
                                <MapPin size={32}></MapPin>
                                <p>Avenida Paulista, 302 - São Paulo, Sp</p>
                            </div>
                        </div>

                        <div className={`${style.tab} ${((id == 1 ? style.selected : ""))}`}>
                            <div className={style.row}>
                                <Mail color="#025096" size={32}></Mail>
                                <p>
                                    <a href="mailto://contato@valorybrasil.com">
                                        comercial@valorybrasil.com
                                    </a>
                                </p>
                            </div>
                            <div className={style.row}>
                                <Phone color="#025096" size={32}></Phone>
                                <p><a href="tell:+551120613453">+55 (11) 2061-3453</a></p>
                            </div>
                            <div className={style.row}>
                                <MapPin color="#025096" size={32}></MapPin>
                                <p>Avenida Paulista, 302 - São Paulo, Sp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}