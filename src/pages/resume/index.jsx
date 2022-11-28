import React from "react";
import LightTheme from "../../layouts/Light";
import data from "../../data/sections/economy.json";
import useStorage from "../../common/usageStore";
import Link from "next/link";

import { useRouter } from "next/router";
const PageCTA = () => {
  const router = useRouter();
  // const economyPerYear = parseFloat(
  //   window.sessionStorage.getItem("accontValue")
  // ).toFixed(2);
  const date = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const name = useStorage().getItem("name");
  const phoneNumber = useStorage().getItem("phoneNumber");
  const company = useStorage().getItem("company");
  const email = useStorage().getItem("email");

  return (
    <LightTheme>
      <div className="progress-bar-resume"></div>
      <section className="reduction contact section-padding-economy  ">
        <div className="container">
          <div className="row justify-center ">
            <div className="col-lg-6 text-white">
              <div className="text-right text-gold">4/4</div>
              <div className="logo-reduction mb-50">
                <img src={data.logo} alt="logo" />
              </div>
              <h5 className="fw-600 mb-25  text-white">
                Pedido de energia limpa feita com sucesso!
              </h5>
              <div className="fw-500 mb-25  text-white">
                Estamos analisando seus dados e a resposta do seu pedido chega
                por WhatsApp e e-mail.
              </div>
              <div className="text-white fw-600 mb-10">
                Confira as suas informações:
              </div>
              <div className="mb-25">
                <div className="fw-600">Data do pedido: </div>
                <span> {date}</span>
              </div>
              <div className="mb-25">
                <div className="fw-600">Nome completo: </div>
                <span> {name.toString()}</span>
              </div>
              <div className="mb-25">
                <div className="fw-600">Telefone: </div>
                <span> {phoneNumber}</span>
              </div>
              <div className="mb-25">
                <div className="fw-600">Nome da empresa: </div>
                <span> {company}</span>
              </div>
              <div className="mb-25">
                <div className="fw-600">E-mail: </div>
                <span> {email}</span>
              </div>
              <Link href="/">
                <button type="submit" className="btn-reduction-white mt-40">
                  <span>Voltar pro site</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LightTheme>
  );
};

export default PageCTA;
