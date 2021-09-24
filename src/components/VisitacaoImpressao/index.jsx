import { PureComponent } from "react";
import logo from '../../img/logo-site-1.png'
import "./style.css"

export class VisitacaoImpressao extends PureComponent {
  render() {
      //eslint-disable-next-line
    const visitacoes = { ...this.props.visitacoes };
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-8 text-center">
                    <span className="fs-2 ps-3" >FICHA DE CADASTRO DO MÉDICO E DO NUTRICIONISTA</span>
                </div>
                <div className="col-4">
                    <img src={logo} alt="logo-essencial"/>
                </div>
            </div>
            <div className="row mb-2 borda p-3">
                <div className="col-12">
                    <span>Nome:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-5">
                    <span>CRM/CRN:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-7">

                    <span>Especialidade:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span>Telefones:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-6">

                    <span>Celular:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span>Locais de atendimento:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span>Email:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span>Secretarias:</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span>Observacoes:</span>
                    <div className="borda-texto" ></div>
                </div>
            </div>
        </div>
    );
  }
}
