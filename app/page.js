import ButtonLogin from "@/components/buttonLogin";
import Faq from "@/components/faq";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";

export default function Home() {
  return (
    <main>
      <header className="bg-base-200">
        <ul className="max-w-5xl mx-auto flex items-center justify-between px-8 py-2">
          <li className="font-extrabold">Assoluce</li>
          <li className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#tarifs">
              Tarifs
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <ButtonLogin />
          </li>
        </ul>
      </header>

      <section className="max-w-5xl mx-auto text-center p-8 md:py-32 flex flex-col md:text-left md:flex-row gap-10 max-md:items-center">
        <Image
          src={productDemo}
          alt="Product demo"
          className="w-96 rounded-xl"
        />

        <div className="mb-6">
          <h1 className="text-5xl font-extrabold mb-6">
            Pilote ton asso comme un chef
          </h1>
          <div className="text-gray-700 mb-6">
            Trouve tous les outils au même endroit pour gagner ton temps et
            garder ton énérgie pour les choses qui comptent.
          </div>

          <ButtonLogin registered={true}>Let's go!</ButtonLogin>
        </div>
      </section>

      <section className="bg-base-200 px-8 py-32" id="tarifs">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-2">
            Tarifs
          </p>
          <h2 className="text-4xl text-center mb-4">
            Une offre adaptée à vos besoins
          </h2>

          <div className="bg-base-100 max-w-96 p-8 rounded-3xl space-y-4 mx-auto">
            <p>
              <span className="text-4xl font-black">19&nbsp;€</span>
              <span className="pl-2 uppercase text-sm font-medium opacity-70">
                /mois
              </span>
            </p>

            <ul className="space-y-1">
              {[
                "Accès à l'inventaire",
                "Lecteur de code barre",
                "Estimateur de prix",
              ].map((e) => (
                <li className="flex gap-2 items-center" key={e}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-green-600 size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {e}
                </li>
              ))}
            </ul>

            <ButtonLogin etcls="w-full" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-32" id="faq">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm uppercase font-medium text-primary mb-2">FÀQ</p>
          <h2 className="text-4xl mb-4">Quelques questions fréquentes</h2>
        </div>

        <ul className="max-w-lg mx-auto">
          {[
            {
              q: "Pourquoi votre site est-il si beau ?",
              a: "Parce qu'il a fait l'objet d'un développement méticuleux réalisé par des experts passionnés par leur métier.",
            },
            {
              q: "Que devrais-je faire avant de m'inscrire ?",
              a: "Prenez contact avec nos équipes afin de décider s'il en vaut la peine que vous souscriviez à nos services. En effet toutes les associations n'en ont pas forcément besoin. Nous le voudrions bien mais c'est ainsi :)",
            },
            {
              q: "Voulez vous m'épouser ?",
              a: "Non.",
            },
          ].map((e) => (
            <Faq key={e.q} qa={e} />
          ))}
        </ul>
      </section>
    </main>
  );
}
