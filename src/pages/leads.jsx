import { Check, X } from "lucide-react";
import React from "react";

export default class LeadView extends React.Component {
    state = {
        leads: []
    }

    async componentDidMount() {
        let leads = await fetch("/api/leads", {
            method: "GET"
        }).then((res) => res.json())

        this.setState({
            leads: leads.data
        })
    }

    download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    render() {
        return <main>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h3>Nome</h3>
                        </td>
                        <td>
                            <h3>Sobrenome</h3>
                        </td>
                        <td>
                            <h3>Telefone</h3>
                        </td>
                        <td>
                            <h3>E-Mail</h3>
                        </td>
                        <td>
                            <h3>Valor</h3>
                        </td>

                        <td>
                            <h3>Instituição</h3>
                        </td>
                        <td>
                            <h3>Horario</h3>
                        </td>
                        <td>
                            <h3>Temos</h3>
                        </td>
                        <td>
                            <h3>Contato</h3>
                        </td>
                        <td>
                            <button onClick={(e) => {
                                const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
                                const header = Object.keys(this.state.leads[0])
                                const csv = [
                                    header.join(','), // header row first
                                    ...this.state.leads.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
                                ].join('\r\n')

                                this.download("report.csv", csv)
                            }}>
                                Download
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.leads.map((lead) => {
                        return <tr>
                            <td>
                                <h4>{lead.nome}</h4>
                            </td>
                            <td>
                                <h4>{lead.sobrenome}</h4>
                            </td>
                            <td>
                                <h4>{lead.telefone}</h4>
                            </td>
                            <td>
                                <h4>{lead.email}</h4>
                            </td>
                            <td>
                                <h4>R$ {lead.valor}</h4>
                            </td>
                            <td>
                                <h4>{lead.instituicao}</h4>
                            </td>
                            <td>
                                <h4>{lead.horario}</h4>
                            </td>
                            <td>
                                <h4>{lead.termos == true ? <Check /> : <X />}</h4>
                            </td>
                            <td>
                                <h4>{lead.contato == true ? <Check /> : <X />}</h4>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </main>
    }
}