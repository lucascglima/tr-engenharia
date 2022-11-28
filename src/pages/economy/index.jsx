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
  const number = Number(useStorage().getItem("accountValue")).toFixed(2);
  const economyPerYear = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(Number(useStorage().getItem("accountValue") * 0.2 * 12));

  const co2 = new Intl.NumberFormat("pt-BR").format(
    Number(useStorage().getItem("accountValue") * 0.8)
  );
  const trees = new Intl.NumberFormat("pt-BR").format(
    Number(useStorage().getItem("accountValue") * 0.2).toFixed(0)
  );
  const car = Number(co2 * 0.49).toFixed(0);
  const beef = Number(co2 * 27).toFixed(0);

  return (
    <LightTheme>
      <div className="progress-bar-economy"></div>
      <section className="reduction contact section-padding-economy  ">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-lg-6">
              <div className="logo-economy mb-50">
                <img src={data.logo} alt="logo" />
              </div>

              <h5 className="fw-900 text-u  mb-40  text-white ">
                Ao receber energia solar, você economiza:{" "}
              </h5>
              <h2 className="fw-900 text-u  mb-20  text-gold">
                R$ {economyPerYear}
              </h2>
              <span className="text-white mb-40">em média por ano</span>
              <h5 className="fw-900 text-u  mb-40  text-white ">
                e protege o meio ambiente ao deixar de emitir:
              </h5>
              <h2 className="fw-900 text-u  mb-20  text-gold">
                {co2} kg de CO²
              </h2>
              <span className="text-white mb-40">
                essa quantidade equivale a:
              </span>
              <div className="economy-result ">
                <div>
                  <img src={data.trees} alt="trees" />
                  <span className="text-white mt-40">
                    Plantar <span>{trees}</span> árvores
                  </span>
                </div>
                <div>
                  <img src={data.car} alt="car" />
                  <span className="text-white mt-40">
                    Não rodar <span>{car}</span>km em um carro
                  </span>
                </div>
                <div>
                  <img src={data.cow} alt="cow" />
                  <span className="text-white mt-40">
                    Não comer <span>{beef} </span>kg de carne
                  </span>
                </div>
              </div>
              <Link href="/contact">
                <button type="submit" className="btn-reduction-white mt-40">
                  <span>Quero economizar</span>
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
