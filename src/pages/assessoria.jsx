import Footer from '../partials/custom_footer';
import Header from '../partials/custom_header';
import style from './assessoria.module.css';

import termos from '../termos.json';
import bancos from '../instuicoes.json';

import { useState } from 'react';

import { CurrencyInput } from 'react-currency-mask';
import { InputMask } from 'primereact/inputmask';
import { Dialog } from "primereact/dialog"

export default function Assessoria() {
    const [termosModalShow, setTermosModalShow] = useState(false);
    const [privacidadeModalShow, setPrivacidadeModalShow] = useState(false);

    const [formData, setFormData] = useState({
        "nome": "",
        "sobrenome": "",
        "telefone": "",
        "email": "",
        "instituicao": "",
        "valor": "",
        "horario": "",
        "termos": false,
        "contato": false
    })

    // return <TrabalheConosco/>;

    return (
        <div className={style.App}>
            <Header />
            <main className={style.main}>
                <h1>De o primeiro passo</h1>
                <h2>Muda sua historia com os créditos</h2>
                <div className={style.form}>
                    <h3>Preencha suas informações e de suas dívidas para consultarmos sua situação</h3>
                    <div className={`${style.page}`}>
                        <label>
                            Nome:<input type="text" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["nome"] = e.target.value;
                                setFormData(updatedJson)
                            }} />
                        </label>
                        <label>
                            Sobrenome:<input type="text" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["sobrenome"] = e.target.value;
                                setFormData(updatedJson)
                            }} /></label>
                    </div>
                    <div className={`${style.page}`}>
                        <label>
                            Numero de Telefone:<InputMask mask='(99) 99999-9999' type="text" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["telefone"] = e.target.value;
                                setFormData(updatedJson)
                            }} />
                        </label>
                        <label>
                            E-Mail:<input type="text" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["email"] = e.target.value;
                                setFormData(updatedJson)
                            }} />
                        </label>
                    </div>
                    {/* Institução */}
                    <div className={`${style.page}`}>
                        <label>
                            A qual instituição você deve:<br />
                            <select defaultValue={"0"} onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["instituicao"] = e.target.value;
                                setFormData(updatedJson)
                            }}>
                                {bancos.intituicoes.map(banco => <option key={banco} value={banco} >{banco}</option>)}
                            </select>
                        </label>
                        <label>
                            Qual valor total das dividas:
                            <CurrencyInput onChangeValue={(e, value, maskedValue) => {
                                let updatedJson = formData;
                                updatedJson["valor"] = value;
                                setFormData(updatedJson)
                            }} />
                        </label>
                    </div>
                    <div className={`${style.page}`}>
                        <label>
                            Melhor horário para contato: <input type="time" name="" />
                        </label>
                    </div>
                    <div className={`${style.checks}`}>
                        <label>
                            <input type="checkbox" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["termos"] = e.target.checked;
                                setFormData(updatedJson)
                            }} /> Aceito o <button onClick={() => setPrivacidadeModalShow(true)}> Aviso de Privacidade</button> e os <button onClick={() => setTermosModalShow(true)} >Termos e Condições</button> além da Política de Cookies.
                        </label>
                        <label>
                            <input type="checkbox" onChange={(e) => {
                                let updatedJson = formData;
                                updatedJson["contato"] = e.target.checked;
                                setFormData(updatedJson)
                            }} /> Aceito ser contatado por meio de uma conta institucional e verificada da valory.
                        </label>
                    </div>
                    <div className={`${style.page}`}>
                        <label>
                            <input type="submit" name="ENVIAR" onClick={(e) => {
                                console.log(formData)
                            }} />
                        </label>
                    </div>
                </div>
                <div className={style.grid}>
                    <div className={style.field}>
                        <h2>Registre-se</h2>
                        <h3>
                            Conte-nos sobre sua situação atual para que possamos criar um plano e te ajudar a mudar de vida.
                        </h3>
                    </div>
                    <div className={style.field}>
                        <h2>Obtenha conselhos e comece seu plano</h2>
                        <h3>
                            Um consultor entrará em contato com você e o ajudará a definir seus pagamentos mensais e o prazo que melhor lhe convier.                        </h3>
                    </div>
                    <div className={style.field}>
                        <h2>Obter um empréstimo de reembolso</h2>
                        <h3>
                            Mantendo um bom comportamento no seu plano de pagamento, ajudaremos você a se qualificar para um crédito que permitirá quitar suas dívidas mais rapidamente.                        </h3>
                    </div>
                    <div className={style.field}>
                        <h2>Consultorias e Educação Financeira de Qualidade</h2>
                        <h3>
                            Com a Valory você terá acesso aos melhores cosultores do mercado , onde podera ter consultorias de educação financeira de qualidade.                        </h3>
                    </div>
                </div>
            </main>
            {/* Termos Modal */}
            <Dialog
                visible={termosModalShow}
                header="Termos e condições"
                style={{ width: '50vw', height: '400px', backgroundColor: 'rgba(255, 255, 255)' }}

                onHide={() => { if (!termosModalShow) return; setTermosModalShow(false); }}
                centered
            >
                <h5>
                    {termos.condicoes.split("<esp>").map((part, index) => <p key={index}>{part}<br /></p>)}
                </h5>
                <button onClick={() => setTermosModalShow(false)}>Close</button>

            </Dialog>

            <Dialog
                visible={privacidadeModalShow}
                header="Termo de Privacidade"
                style={{ width: '50vw', height: '400px', backgroundColor: 'rgba(255, 255, 255)' }}
                onHide={() => { if (!privacidadeModalShow) return; setPrivacidadeModalShow(false); }}
                centered
            >
                <h5>
                    {termos.privacidade.split("<esp>").map((part, index) => <p key={index}>{part}<br /></p>)}
                </h5>
                <button onClick={() => setPrivacidadeModalShow(false)}>Close</button>
            </Dialog>

            <Footer />
        </div>
    );
}
