import Image from "next/image"
import profilPic from "/public/imk1.png" // Remplace par le bon chemin

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-900 px-4">
      <div className="flex max-w-5xl items-center gap-12 flex-wrap justify-center">

        {/* Texte */}
        <div className="text-left max-w-xl pl-4">
          <p className="text-base font-semibold text-white mb-2">
            Élève ingénieur en Intelligence Artificielle et Data Technologie
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 md:text-6xl">
            Salut 👋 Je suis
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6 md:text-5xl">
            HINIMDOU MORSIA GUITAM
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed indent-6">
            Étudiant en troisième année en Intelligence Artificielle et Technologie des Données, passionné par ces technologies innovantes.
            Je maîtrise plusieurs langages de programmation me permettant d'intégrer des solutions d’IA pour résoudre des problèmes concrets.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed indent-6 mt-4">
            Grâce à un parcours riche, combinant compréhension approfondie et rigueur méthodologique, je suis capable de résoudre des problèmes complexes,
            de répondre aux besoins des clients et de fournir des produits de qualité.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed indent-6 mt-4">
            Apte et prêt à m'intégrer rapidement à toute nouvelle technologie, je garde une approche simple et efficace :
            <strong> identifier les problèmes de l’entreprise, chercher une approximation optimale, modéliser puis résoudre selon les exigences.</strong>
          </p>
        </div>

        {/* Image sur le même fond que le reste de la page */}
        <div className="w-80 h-80 relative">
          <Image
            src={profilPic}
            alt="Photo de profil"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  )
}
