"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CertificatPage() {
  const certificats = Array.from({ length: 21 }, (_, i) => `c${i + 1}.pdf`);

  const certificatsProfessionnels = [
    {
      title: "IA Engineering for Data Science",
      file: "/certificatprofessionnel/AEDS0019189471706 (1).pdf"
    },
    {
      title: "Associate Data Engineering",
      file: "/certificatprofessionnel/DEA0018031488484.pdf"
    },
    {
      title: "Associate Data Scientist",
      file: "/certificatprofessionnel/DSA0017831919098.pdf"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-green-900 flex flex-col">
        <div className="max-w-6xl mx-auto px-6 py-12 flex-grow">
          {/* Carte d’intro */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 mb-10">
            <h1 className="text-4xl font-bold mb-4 text-blue-700 text-center">
              🎓 Bienvenue sur ma page de certificats
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
              Découvrez ci-dessous une liste non exhaustive de mes certificats.
            </p>
          </div>

          {/* Section Certificats Professionnels */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
               Certificats Professionnels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificatsProfessionnels.map((cert, index) => (
                <div
                  key={index}
                  className="border border-gray-200 shadow-sm rounded-lg p-4 bg-green-50 text-center hover:shadow-md transition"
                >
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded w-full">
                      {cert.title}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Section Certificats d'Accomplissement */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
               Certificats d'Accomplissement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {certificats.map((file, index) => (
                <div
                  key={file}
                  className="border border-gray-200 shadow-sm rounded-lg p-4 bg-white text-center hover:shadow-md transition"
                >
                  <a
                    href={`/certificat/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                      Certificat {index + 1}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}