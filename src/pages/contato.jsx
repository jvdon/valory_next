import Footer from "@/partials/custom_footer";
import Header from "@/partials/custom_header";
import style from "./contato.module.css";

import { Mail, MapPin, Phone } from "lucide-react"

export default function Contato() {
    return (
        <div className="main">
            <Header />
            <main className={style.main}>
                <div className={style.top}>
                    <img src="/images/happy-customers-service-agent-with-headset-communicating-with-customer-working-laptop-call-center_637285-127 1.png" ></img>
                    <h3>Fale com a <b>Valory</b></h3>
                </div>
                <div className={style["content"]}>
                <div className={style.side}>
                        <h1>Sou Cliente</h1>
                        <div className={style.info}>
                            <Mail></Mail>
                            <div>
                                <h2>E-Mail</h2>
                                <p>
                                    <a href="mailto://contato@valorybrasil.com">
                                        contato@valorybrasil.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <Phone></Phone>
                            <div>
                                <h2>Telefones</h2>
                                <p><a href="tell:+5511911421466">+55 (11) 91142-1466</a></p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <MapPin></MapPin>
                            <div>
                                <h2>Endereço</h2>
                                <p>Avenida Paulista, 302 - São Paulo, Sp</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.side}>
                        <h1>Não sou Cliente</h1>
                        <div className={style.info}>
                            <Mail></Mail>
                            <div>
                                <h2>E-Mail</h2>
                                <p>
                                    <a href="mailto://contato@valorybrasil.com">
                                        comercial@valorybrasil.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <Phone></Phone>
                            <div>
                                <h2>Telefones</h2>
                                <p><a href="tell:+551120613453">+55 (11) 2061-3453</a></p>
                            </div>
                        </div>
                        <div className={style.info}>
                            <MapPin></MapPin>
                            <div>
                                <h2>Endereço</h2>
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