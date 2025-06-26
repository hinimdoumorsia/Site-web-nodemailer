import Header from "@/components/header"
import Projects from "@/components/projects"

export default function PageProjets() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <Header />
      <main className="px-4 md:px-24 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Mes Projets</h1>
        <p className="text-base max-w-4xl mb-8">
          En pleine formation d'ingénierie en Intelligence Artificielle et Technologies des Données, j'ai eu l'opportunité de réaliser plusieurs projets concrets dans ce domaine. Ces expériences vont de la mise en œuvre d’algorithmes de machine learning pour de petites quantités de données, jusqu’à des projets de deep learning sur des jeux de données massifs. Cela m’a permis de maîtriser le traitement des données, l'entraînement de modèles, le développement de solutions IA from scratch, ainsi que l’identification de problèmes pertinents à résoudre par l’intelligence artificielle. Au-delà des modèles, j’ai également appris à évaluer la qualité de mes travaux et à comprendre les outils informatiques qui sous-tendent les systèmes intelligents. Ainsi, mes réalisations incluent des applications intégrant des modèles IA en temps réel, des sites web dynamiques, et bien d’autres projets que je vous invite à découvrir ci-dessous.
        </p>
        <Projects />
      </main>
    </div>
  )
}
