import Header from "@/components/header";
import Footer from "@/components/footer"; // N'oublie pas d'importer le footer
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Développement de modèles IA",
    description:
      "Conception de modèles d’intelligence artificielle pour des tâches spécifiques : classification d’images, prédiction énergétique, segmentation de clients selon leur efficacité ou leur rôle dans l’entreprise, etc.",
  },
  {
    title: "Applications IA automatisées",
    description:
      "Construction d'applications Streamlit, Flask ou Spring Boot intégrant vos modèles IA pour automatiser vos tâches à partir de vos données (ventes, production, CA…).",
  },
  {
    title: "Préparation de jeux de données",
    description:
      "Nettoyage de données brutes, construction de jeux de données propres et livrables. Génération de rapports détaillés (LaTeX ou ReadTheDocs) incluant les étapes, courbes, et explications.",
  },
  {
    title: "Intégration IA dans vos applications",
    description:
      "Intégration complète de vos modèles IA dans vos logiciels ou sites existants avec automatisation des prédictions et processus métier.",
  },
  {
    title: "Développement web & e-commerce",
    description:
      "Création de sites web vitrine ou e-commerce sur mesure, avec gestion de contenu, fonctionnalités avancées et design moderne.",
  },
  {
    title: "Déploiement et sécurité web",
    description:
      "Déploiement complet de vos sites avec nom de domaine, sous-domaine, certificat SSL/TLS et configuration sécurisée.",
  },
  {
    title: "Modélisation logicielle",
    description:
      "À partir d’un cahier des charges, modélisation complète de votre logiciel avec rapports, diagrammes UML et planification claire.",
  },
  {
    title: "Collecte de données pour l’IA",
    description:
      "Recherche, extraction et structuration de données pertinentes pour l’entraînement de vos modèles IA selon votre domaine d’activité.",
  },
  {
    title: "Base de données (SQL & MongoDB)",
    description:
      "Conception, gestion et optimisation de bases de données relationnelles (SQL Server, PostgreSQL…) ou NoSQL (MongoDB). Structuration efficace pour vos besoins métier.",
  },
];

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 bg-blue-900 text-white font-bold">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="text-3xl mb-8 text-center">Mes Services</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg bg-white text-black">
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                  <p className="text-black font-normal">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
