import { PureComponent } from "react";
import logo from '../../img/logo-site-1.png'
import "./style.css"

export class VisitacaoImpressao extends PureComponent {
  render() {
      //eslint-disable-next-line
    const visitacoes = [ ...this.props.visitacoes ];
    const visitado = {...this.props.visitado};
    return (
        <div className="container" id="visitacaoImpressao">
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
                    <span className="me-2">Nome:</span><span>{visitado.nome}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-5">
                    <span className="me-2">CRM/CRN:</span><span>{visitado.crm ? visitado.crm : visitado.crn}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-7">

                    <span className="me-2">Especialidade:</span><span>{visitado.especialidade}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span className="me-2">Telefones:</span><span>{visitado.telefone}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span className="me-2">Locais de atendimento:</span><span>{visitado.locais_de_atendimento}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span className="me-2">Email:</span><span>{visitado.email}</span>
                    <div className="borda-texto"></div>
                </div>
                <div className="col-12">

                    <span className="me-2">Secretarias:</span><span>{visitado.secretarias}</span>
                    <div className="borda-texto" ></div>
                </div>
                <div className="col-12">

                    <span className="me-2">Observacoes:</span><span>{visitado.observacoes}</span>
                    <div className="borda-texto" ></div>
                </div>
            </div>
            <div className="row mb-2">
                {
                    visitacoes.map((e)=>(
                        <div key={e.id} className="mb-1 p-3 visitacoes">
                            <div className="col-3">
                                <span className="me-2">Data:</span><span>{e.data}</span>
                                <div className="borda-texto" ></div>
                            </div>
                            <div className="col-12">
                                <span className="me-2">Comentarios:</span><span>{e.comentarios}</span>
                                <div className="borda-texto" ></div>
                            </div>
                            <div className="col-12">
                                <span className="me-2">Amostras:</span><span>{e.amostras}</span>
                                <div className="borda-texto" ></div>
                            </div>
                            <div className="col-12">
                                <span className="me-2">Trabalhos:</span><span>{e.trabalhos}</span>
                                <div className="borda-texto" ></div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
  }
}
