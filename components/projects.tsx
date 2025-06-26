import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

const projects = [
  {
    title: "Système de surveillance intelligente",
    description:
      "Une application Streamlit combinant trois modèles IA (détection de chute, prédiction de chute et détection de somnolence). Elle permet de surveiller une personne en temps réel, de configurer les seuils d’alerte, et de générer des alertes automatiques selon la configuration choisie.",
    image: "/img.jpg",
    link: "https://github.com/hinimdoumorsia/computer_vision",
    docLink: "https://computer-vision2.readthedocs.io/en/latest/",
  },
  {
    title: "Prédiction du prix du Bitcoin",
    description: `Développement d'un système de prédiction du prix de fermeture du Bitcoin basé sur plusieurs indicateurs financiers tels que le RSI, Fear & Greed Index, volatilité, volume échangé, prix d'ouverture, prix de fermeture, prix le plus haut et prix le plus bas.  
    Plusieurs modèles ont été entraînés, allant des modèles statistiques classiques (AR, MA, ARMA, ARIMA, SARIMA) aux modèles de deep learning (LSTM, GRU, CNN).  
    Une application Streamlit a été construite pour permettre aux utilisateurs de tester les modèles, visualiser les prédictions et suivre la situation du marché en temps réel.`,
    image: "/bitcoin.avif",
    demoLink: "/courbe.html",
    link: "https://github.com/hinimdoumorsia/projet_Series_chronologiques",
  },
  {
    title: "Site de recettes de cuisine",
    description: `Développement d'un site de recettes de cuisine complet utilisant HTML, CSS, JavaScript et PHP, couvrant le front-end et le back-end.  
    Le site intègre la sécurisation complète ainsi que le déploiement.  
    Les utilisateurs peuvent rechercher des recettes, consulter les détails des plats, et découvrir de nouvelles recettes grâce aux conseils proposés.  
    Voici le lien vers le site : https://lnkd.in/eHstDEJX`,
    image: "/recette_cuisine.jpg", // Remplace par une image si tu en as
    link: "https://github.com/hinimdoumorsia/Site_web_recipe",
    siteLink: "https://lnkd.in/eHstDEJX",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 font-bold">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <CardTitle className="hover:underline text-blue-600 font-bold">{project.title}</CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <CardDescription className="font-bold">{project.description}</CardDescription>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Voir le projet
                </Link>
                {project.docLink && (
                  <Link
                    href={project.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                )}
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Voir la démo
                  </Link>
                )}
                {project.siteLink && (
                  <Link
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Voir le site
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
