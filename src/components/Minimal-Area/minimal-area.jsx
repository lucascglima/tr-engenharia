/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/tr/vantagens.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Quem somos</h4>
              <p className="wow txt" data-splitting>
                Somos uma empresa do setor de energia com atuação nacional.
                Nosso trabalho é voltado geração de energia limpa e assim
                reduzir o impacto ambiental do setor.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Missão
                  </h6>
                  <p>
                    Verticalizar soluções para todas as etapas de
                    desenvolvimento de projetos de energia. Assim teremos
                    soluções mais completas e integradas para a gestão e
                    implementação com excelência e sustentabilidade.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Visão
                  </h6>
                  <p>
                    Oferecer uma solução completa dentro do cenário de energia
                    para investidores, fornecedores de equipamentos e empresas
                    do setor energético, desde o projeto até a implementação.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Valores
                  </h6>
                  <p>
                    Responsabilidade e compromisso com o meio ambiente. Mantemos
                    sempre como princípios o profissionalismo e a ética.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
