/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Element } from "react-scroll";
const MinimalArea = () => {
  return (
    <Element name="whoWeAre " className="whoWeAre">
      <section className="min-area white-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img">
                <img
                  className="thumparallax-down"
                  src="/img/tr/quem-somos-min.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div className="content pt-0">
                <h4 className="fw-900 text-u ls1 mb-30 color-font">
                  Quem somos
                </h4>
                <p className="wow fadeInUp ls1" data-wow-delay=".2s">
                  Uma empresa que pensa no futuro. Com economia e
                  responsabilidade, para atender melhor você e sua empresa.
                  Estamos comprometidos em estabelecer novos padrões industriais
                  e em fornecer energia limpa, de modo responsável.
                </p>
                <ul className="feat pl-0">
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    <h5 className="fw-900 mb-10">Missão</h5>
                    <p className="pl-0">
                      Verticalizar soluções para todas as etapas de
                      desenvolvimento de projetos de energia. Assim teremos
                      soluções mais completas e integradas para a gestão e
                      implementação com excelência e sustentabilidade.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <h5 className="fw-900 mb-10">Visão</h5>
                    <p className="pl-0">
                      Fornecemos uma solução completa dentro do cenário de
                      energia para investidores, fornecedores de equipamentos e
                      empresas do setor energético, desde o projeto até a
                      implementação.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".6s">
                    <h5 className="fw-900 mb-10">Valores</h5>
                    <p className="pl-0">
                      Promovemos os melhores recursos para compor soluções
                      tecnológicas com responsabilidade e compromisso com o meio
                      ambiente. Mantemos sempre como princípios o
                      profissionalismo e a ética.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default MinimalArea;
