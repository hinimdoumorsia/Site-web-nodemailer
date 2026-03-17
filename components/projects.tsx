"use client"

import PasswordProtect from "@/components/PasswordProtect"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Système de surveillance intelligente",
    description: `Mise en place d'une application web Streamlit permettant de visualiser et tester en temps réel la démonstration de notre système de surveillance intelligent. Ce projet intègre plusieurs modèles d'intelligence artificielle :

    • Modèle YOLO pour la détection de chute dans une vidéo
    • Modèle CNN+LSTM pour la prédiction de chute (anticiper avant qu'elle ne survienne)
    • Modèle SVM pour la détection de somnolence

    Ce projet s'inscrit dans le domaine de la silver économie, un secteur aujourd'hui en pleine expansion qui évolue rapidement. L'objectif est de trouver des solutions innovantes pour aider les personnes âgées à mieux vivre dans les maisons de retraite, qu'elles soient en présence ou non d'autres individus.

    L'application permet de surveiller une personne en temps réel, de configurer les seuils d'alerte, et de générer des alertes automatiques selon la configuration choisie.`,
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
    image: "/recette_cuisine.jpg",
    link: "https://github.com/hinimdoumorsia/Site_web_recipe",
    siteLink: "https://lnkd.in/eHstDEJX",
  },
  {
    title: "SmartHub - Plateforme Éducative Centralisée",
    description: `Développement d'une application SmartHub permettant de centraliser les ressources d'une plateforme éducative en intégrant des nouvelles technologies d'intelligence artificielle. 
    
    Caractéristiques principales :
    • Chatbot intégré avec plusieurs LLM pour répondre aux différentes difficultés liées à la recherche et aux questions des utilisateurs
    • Système multi-agent pour la supervision
    • Technologies utilisées : Spring Boot, Maven, JPA, TypeScript, React, OpenAI, Botpress
    • Agents IA pour la supervision
    • Déploiement sur Railway, Render et Vercel
    
    L'application combine plusieurs technologies modernes pour offrir une expérience éducative enrichie par l'IA.`,
    image: "/app_interface.png",
    link: "https://github.com/hinimdoumorsia/smart-education-platform",
    docLink: "https://smart-education-platform.readthedocs.io/en/latest/",
    demoLink: "https://smart-education-platform-3qsejixj2.vercel.app/login",
    siteLink: "https://www.linkedin.com/feed/update/urn:li:activity:7423897690977042432/",
    videoLink: "https://www.youtube.com/watch?v=y0RjRl1l7fE",
  },
  {
    title: "Prédiction du Statut des Startups - Pipeline ML",
    description: `Avec l'arrivée d'Internet et l'explosion massive des données, la concurrence sur le marché est devenue rude et brutale. Beaucoup d'entreprises ne parviennent plus à se positionner correctement et peinent à survivre dans cet environnement.

    Dans ce projet, mon équipe et moi, dans le cadre d'un stage en Data Science, avons mis en place un pipeline complet de machine learning permettant de prédire le statut d'une startup : sera-t-elle acquise par une autre entreprise, entrera-t-elle en bourse, se fermera-t-elle, ou restera-t-elle active ?

    Ce pipeline couvre toutes les étapes essentielles : prétraitement et amélioration des données, feature engineering, développement et entraînement du modèle, jusqu'au déploiement.

    Nous vous invitons à découvrir ci-joint le projet et à explorer ses résultats et insights stratégiques.`,
    image: "/status_prediction_startup.png",
    link: "https://github.com/hinimdoumorsia/startup-outcome-prediction-ml-pipeline",
    demoLink: "https://github.com/akhtarfarhan/startup-predictor",
  },
  {
    title: "OrientBot - Chatbot Intelligent d'Orientation Scolaire",
    description: `Développement d'un chatbot intelligent spécialisé dans l'orientation scolaire des nouveaux bacheliers, utilisant un système RAG (Retrieval-Augmented Generation) pour fournir des réponses précises et contextuelles.

    Technologies et fonctionnalités :
    • **LangChain & LCEL** : Orchestration des chaînes RAG et gestion des flux conversationnels
    • **RAG (Retrieval-Augmented Generation)** : Système de recherche contextuelle dans une base documentaire sur les formations
    • **Vector Store (Chroma)** : Stockage et recherche des embeddings pour une récupération pertinente
    • **Groq API** : Accès aux LLM (Llama 3.1) avec des performances optimisées
    • **Python & Flask** : Création d'APIs REST pour interroger les modèles
    • **React** : Interface utilisateur intuitive et responsive
    • **Render** : Déploiement cloud de l'application complète

    Le chatbot aide les étudiants et leurs parents à :
    • Explorer les filières universitaires adaptées à leur profil
    • Comprendre les débouchés professionnels
    • Obtenir des informations précises sur les formations
    • Prendre des décisions éclairées pour leur orientation

    Le système maintient un historique de conversation pour un accompagnement personnalisé et cohérent.`,
    image: "/chatbot.PNG",
    link: "https://github.com/hinimdoumorsia/chatbot-orientation",
    demoLink: "https://chatbot-orientation-1.onrender.com",
    siteLink: "https://www.linkedin.com/feed/update/urn:li:activity:7439370656158367744/",
    docLink: "https://github.com/hinimdoumorsia/chatbot-orientation#readme",
  },
]

export default function ProjectsPage() {
  return (
    <PasswordProtect>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
          Mes Projets
        </h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              padding: "1rem",
              backgroundColor: "white"
            }}>
              <Link href={project.link} target="_blank">
                <h2 style={{
                  color: "#16a34a",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  marginBottom: "1rem"
                }}>
                  {project.title}
                </h2>
              </Link>
              
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                style={{
                  borderRadius: "0.5rem",
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "1rem"
                }}
              />
              
              <p style={{
                fontWeight: "bold",
                color: "black",
                whiteSpace: "pre-line",
                marginBottom: "1rem",
                fontSize: "0.95rem",
                lineHeight: "1.5"
              }}>
                {project.description}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link
                  href={project.link}
                  target="_blank"
                  style={{
                    backgroundColor: "#16a34a",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    textDecoration: "none"
                  }}
                >
                  Code source
                </Link>
                
                {project.docLink && (
                  <Link
                    href={project.docLink}
                    target="_blank"
                    style={{
                      backgroundColor: "#16a34a",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      textDecoration: "none"
                    }}
                  >
                    Documentation
                  </Link>
                )}
                
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    style={{
                      backgroundColor: "#16a34a",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      textDecoration: "none"
                    }}
                  >
                    {project.title === "SmartHub - Plateforme Éducative Centralisée" ? "Tester l'application" : 
                     project.title === "Prédiction du Statut des Startups - Pipeline ML" ? "Tester en production" :
                     project.title === "OrientBot - Chatbot Intelligent d'Orientation Scolaire" ? "Tester le chatbot" :
                     "Voir la démo"}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PasswordProtect>
  )
}