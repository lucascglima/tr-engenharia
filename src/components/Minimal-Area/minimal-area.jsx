/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Element } from "react-scroll";
const MinimalArea = () => {
  return (
    <Element name="whoWeAre " className="whoWeAre">
      <section className="min-area white-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img
                  src="/img/tr/usinas/usina-vitoria-2.webp"
                  className=""
                  alt="TR Energia Time"
                />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div className="content pt-0">
                <h6 className="fw-100 text-u ls2 mb-10 ">Quem somos</h6>
                <h4 className="fw-900 text-u ls1 mb-30 color-font">
                  TR Energia Solar
                </h4>
                <p
                  className="wow fadeInUp ls1 text-justify"
                  data-wow-delay=".5s"
                >
                  Nós, da TR Energia Solar, temos como propósito fornecer
                  soluções em energia solar para ajudar nossos clientes a
                  reduzirem seus gastos de forma simples e acessível. Somos
                  responsáveis por todo o ciclo de vida dos projetos, desde a
                  construção até a operação, manutenção e gestão. Já construímos
                  mais de 20 megawatts de potência em projetos solares e
                  instalamos mais de 30 mil painéis solares. Estamos
                  comprometidos em proporcionar um futuro mais sustentável para
                  as próximas gerações, transformando o agora.
                </p>
                {/* <ul className="feat pl-0">
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    <h5 className="fw-900 mb-10">Missão</h5>
                    <p className="wow fadeInUp ls1 pl-0">
                      Nosso propósito é ajudar nossos clientes a reduzirem seus
                      gastos através da energia solar, de forma simples,
                      acessível, segura e sustentável.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <h5 className="fw-900 mb-10">Visão</h5>
                    <p className="wow fadeInUp ls1 pl-0">
                      Ser referência na Ramo de Energia solar, oferecendo
                      economia e eficiência energética para todos os clientes e
                      consumidores.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".6s">
                    <h5 className="fw-900 mb-10">Valores</h5>
                    <p className="wow fadeInUp ls1 pl-0">
                      Lideranças motivadoras, entregar valor para nossos cliente
                      com excelência, Confiabilidade, Trabalho em equipe ,
                      Comprometimento com o meio ambiente
                    </p>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default MinimalArea;
