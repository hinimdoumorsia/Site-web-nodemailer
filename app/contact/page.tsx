"use client";

import Header from "@/components/header";
import Contact from "@/components/contact";
import { useState } from "react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 bg-blue-900 text-white font-bold rounded-lg">
        {/* Conteneur flex en colonne sur mobile, ligne sur md+ */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Bloc gauche */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-extrabold text-blue-400 flex items-center gap-2">
                Salut <span role="img" aria-label="main">👋</span>
              </h1>
            </div>

            <p className="leading-relaxed mb-6">
              Je vous invite à consulter ci-dessous les différents moyens pour me contacter.  
              Je reste disponible et motivé pour collaborer ou travailler sur vos projets.  
              N’hésitez pas à me joindre pour toute opportunité ou question.
            </p>

            {/* Contacts */}
            <div className="flex flex-col gap-4">
              {/* Téléphone */}
              <a
                href="tel:+212777789055"
                className="flex items-center gap-3 group w-max text-white"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  📞
                </div>
                <span>+212 777789055</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hinimdoumorsia@gmail.com"
                className="flex items-center gap-3 group w-max text-white"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                  ✉️
                </div>
                <span>hinimdoumorsia@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/morsia-guitdam-hinimdou-266bb0269/"
                target="_blank"
                className="flex items-center gap-3 group w-max text-white"
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                  in
                </div>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hinimdoumorsia"
                target="_blank"
                className="flex items-center gap-3 group w-max text-white"
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  GH
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Bloc formulaire */}
          <div className="flex-1 pt-1">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
