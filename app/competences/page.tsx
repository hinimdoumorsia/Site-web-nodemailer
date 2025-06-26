"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion";


const sections = [
  {
    id: "experience",
    label: "Expérience",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Expérience professionnelle</h3>
        <p>
          Au cours de ma formation en ingénierie en intelligence artificielle et technologies de données,
          j'ai eu l'opportunité de travailler sur plusieurs projets concrets :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Développement complet de sites web "from scratch" avec des technologies modernes</li>
          <li>Création d'applications intelligentes intégrant des modèles d'IA pour des cas d’usage réels</li>
          <li>Conception, entraînement et déploiement de modèles de machine learning et deep learning</li>
          <li>Développement d'applications Java orientées objet, robustes et modulaires</li>
          <li>Expérimentation et analyse d’algorithmes d’apprentissage automatique avec Weka</li>
          <li>Modélisation UML avancée pour la conception et la documentation logicielle</li>
          <li>Conception de modèles conceptuels (MCD) et logiques (MLD) pour la gestion efficace de bases de données</li>
          <li>Gestion, administration et optimisation de bases de données relationnelles</li>
          <li>Prétraitement, nettoyage et visualisation des données avec Pandas, NumPy et Seaborn</li>
          <li>Utilisation des frameworks PyTorch, TensorFlow et Scikit-learn pour le développement IA</li>
          <li>Optimisation des modèles avec des techniques telles que Grid Search et validation croisée</li>
          <li>Développement web frontend avec HTML, CSS, JavaScript, React et Next.js</li>
          <li>Connaissances en algorithmes d’optimisation, modélisation mathématique et résolution de problèmes</li>
        </ul>
      </div>
    )
  },
  {
    id: "formation",
    label: "Formation",
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4">Parcours académique</h3>
        <p>
          Ayant obtenu un baccalauréat scientifique (série D) et passionné par les sciences et leurs applications,
          je me suis d’abord inscrit à l’université de Maroua au Cameroun en Mathématiques Appliquées, où j’ai brillamment terminé ma première année.
          À la fin de cette année, j’ai reçu une bourse d’étude et j’ai quitté les mathématiques pour poursuivre les sciences de l’ingénieur
          à l’École Nationale Supérieure d’Arts et Métiers de Meknès (ENSAM) au Maroc. <br />
          Actuellement, je poursuis mes études d’ingénierie au Maroc grâce à une bourse d’excellence dans le cadre d’une coopération entre le Tchad et le Maroc.
          <br />Ainsi, voici mes diplômes et formations :
        </p>

        {/* Diplômes sous forme de cartes améliorées */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border border-blue-200 rounded-xl bg-blue-50 shadow-sm">
            <h4 className="font-semibold text-blue-700">Baccalauréat scientifique – Série D</h4>
            <p className="text-sm text-gray-800 mt-1">
              Octobre 2020 – Juillet 2021<br />
              Lycée Franco-Anglais du Millénaire, Bongor, Tchad
            </p>
          </div>

          <div className="p-4 border border-green-200 rounded-xl bg-green-50 shadow-sm">
            <h4 className="font-semibold text-green-700">Licence 1 – Mathématiques Appliquées</h4>
            <p className="text-sm text-gray-800 mt-1">
              Octobre 2021 – Juillet 2022<br />
              Université de Maroua, Cameroun
            </p>
          </div>

          <div className="p-4 border border-yellow-200 rounded-xl bg-yellow-50 shadow-sm">
            <h4 className="font-semibold text-yellow-700">Classe Préparatoire</h4>
            <p className="text-sm text-gray-800 mt-1">
              2022 – 2024<br />
              ENSAM Meknès, Maroc
            </p>
          </div>

          <div className="p-4 border border-red-200 rounded-xl bg-red-50 shadow-sm">
            <h4 className="font-semibold text-red-700">Cycle Ingénieur – Intelligence Artificielle & Technologie de Données</h4>
            <p className="text-sm text-gray-800 mt-1">
              2024 – Présent<br />
              ENSAM Meknès, Maroc
            </p>
          </div>
        </div>

        {/* Lien vers les certificats */}
        <div className="mt-8">
         <p className="mb-2 text-gray-100">
            Vous pouvez également consulter mes certificats de formation obtenus au fil de mon parcours :
          </p>

          <a
            href="/certificat"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Voir mes certificats
          </a>
        </div>
      </div>
    )
  },
  {
    id: "competences",
    label: "Compétences",
    content: (
      <div className="space-y-6 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Mes compétences techniques</h3>

        {/* Paragraphe complet en haut */}
        <p className="mb-8">
          Je suis doté d’une compétence polyvalente, riche et solidement ancrée dans les technologies modernes, me permettant de faire face à des problématiques complexes et actuelles.

          Ma maîtrise couvre à la fois le développement de modèles d’intelligence artificielle, leur intégration dans des applications réelles et la résolution de problèmes concrets que rencontrent les entreprises.

          En IA, je développe des modèles de Machine Learning et de Deep Learning avec des frameworks tels que PyTorch, TensorFlow et Scikit-learn, que j’optimise à l’aide des frameworks comme Optuna, Grid Search, ou Cross-Validation.

          J’ai également une solide expérience dans le prétraitement, la visualisation et l’analyse de données avec des outils comme Pandas, Seaborn, Matplotlib, et dans l'utilisation d’environnements spécialisés comme WEKA pour les expérimentations rapides.

          En parallèle, j’ai eu l’opportunité de travailler sur des projets concrets : développement d’applications Java, création de sites web dynamiques depuis zéro (HTML, CSS, JavaScript, React, Next.js), et construction de solutions intelligentes en temps réel répondant à des besoins précis.

          Je m’intéresse également aux problèmes logistiques et décisionnels, tels que les algorithmes d’optimisation, la modélisation mathématique, le simplexe ou encore le flot maximal, qui trouvent de nombreuses applications dans l'industrie et la gestion.
        </p>

        {/* Bloc liste et icônes côte à côte */}
        <div className="flex gap-12">
          {/* Liste non ordonnée */}
          <ul className="list-disc pl-5 space-y-2 flex-1 max-w-md">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Pandas & NumPy</li>
            <li>Matplotlib & Seaborn</li>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Scikit-learn</li>
            <li>Optimisation</li>
            <li>Weka</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Résolution de problèmes</li>
          </ul>

          {/* Icônes dans un carré, plus grandes */}
          <div
            className="grid grid-cols-4 gap-8 p-6 bg-gray-100 rounded-lg shadow-lg"
            style={{ width: 360, minHeight: 360 }}
          >
            {[
              { src: "/icons/uml.svg", name: "UML" },
              { src: "/icons/tensorflow.svg", name: "TensorFlow" },
              { src: "/icons/scikitlearn.svg", name: "Scikit-learn" },
              { src: "/icons/pytorch.svg", name: "PyTorch" },
              { src: "/icons/python.svg", name: "Python" },
              { src: "/icons/pandas.svg", name: "Pandas" },
              { src: "/icons/numpy.svg", name: "NumPy" },
              { src: "/icons/mysql.svg", name: "MySQL" },
              { src: "/icons/html5.svg", name: "HTML5" },
              { src: "/icons/github.svg", name: "GitHub" },
              { src: "/icons/css.svg", name: "CSS" },
              { src: "/icons/cplusplus.svg", name: "C++" },
              { src: "/icons/nodedotjs.svg", name: "Node.js" },
              { src: "/icons/weka.png", name: "Weka" },
              { src: "/icons/java.png", name: "Java" },
              { src: "/icons/javascript.svg", name: "JavaScript" },
            ].map(({ src, name }) => {
              const hue = Math.floor(Math.random() * 360);
              return (
                <div
                  key={name}
                  className="relative group w-20 h-20 flex items-center justify-center bg-white rounded-md shadow cursor-pointer"
                  style={{
                    filter: `hue-rotate(${hue}deg) saturate(1.5) brightness(1.1)`,
                    transition: "filter 0.5s ease",
                  }}
                >
                  <img
                    src={src}
                    alt={name}
                    className="max-w-14 max-h-14 object-contain"
                  />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "apropos",
    label: "À propos",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Profil</h3>
          <p className="text-white leading-relaxed font-bold">
            Étudiant en 3<sup>e</sup> année du cycle Ingénieur d'État en Intelligence Artificielle et Data Technologie,
            avec une solide formation en sciences de l’ingénieur. Je suis passionné par l’intégration de l’IA dans
            l’industrie et d'autres secteurs connexes, où je conçois des solutions intelligentes pour optimiser les processus et automatiser les décisions.
            <br /><br />
            J’interviens notamment dans la résolution de problèmes logistiques à travers des techniques de recherche opérationnelle (comme le flot maximum)
            et la modélisation mathématique de systèmes complexes. Grâce à mes compétences avancées en mathématiques appliquées, je maîtrise les méthodes numériques 
            permettant de résoudre des problèmes nécessitant une approximation ou une optimisation poussée.
            <br /><br />
            Par ailleurs, tout bon étudiant de l’ENSAM est aussi un ingénieur industriel complet : je possède des connaissances approfondies en mécanique,
            électronique, fabrication additive, et bien d’autres disciplines de l’ingénierie que l’on ne saurait toutes citer ici.
            Je m’implique également dans le développement informatique, notamment web, afin de proposer des solutions techniques robustes et polyvalentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white font-bold">
        <div className="space-y-2">
          <p><strong>Nom :</strong> Hinimdou</p>
          <p><strong>Prénom :</strong> Morsia Guitdam</p>
          <p><strong>Email :</strong> hinimdoumorsia@gmail.com</p>
          <p><strong>Langues :</strong> Français (C1), Anglais (B1), Arabe (A1)</p>
        </div>

        <div className="space-y-2">
          <p><strong>Pays d’origine :</strong> Tchad</p>
          <p><strong>Pays de résidence :</strong> Maroc</p>
          <p><strong>Adresse :</strong> Maroc / Meknès / Cité Universitaire</p>
          <p><strong>Collaboration / Stage / Travail en ligne :</strong> Disponible</p>
        </div>
      </div>

      </div>
    )
  }
]

export default function PageCompetences() {
  const [activeSection, setActiveSection] = useState("experience")

  return (
    <div className="min-h-screen bg-blue-900 text-white font-bold">
      <Header />
      <main className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        <nav className="w-full md:w-48">
          <ul className="flex md:flex-col overflow-x-auto pb-2 md:pb-0 gap-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => setActiveSection(id)}
                  className={`w-full text-left px-4 py-3 rounded-md font-medium transition whitespace-nowrap
                    ${
                      activeSection === id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }
                  `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

       <AnimatePresence mode="wait">
  <motion.section
    key={activeSection}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex-1 bg-green-900 rounded-xl p-6 shadow-lg border border-green-700 text-white font-normal"
  >
    {sections.find((s) => s.id === activeSection)?.content}
  </motion.section>
</AnimatePresence>


      </main>
      <Footer />
    </div>
  )
}
