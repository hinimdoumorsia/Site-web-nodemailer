import { Github, Linkedin, MessageCircle, Brain, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col items-center justify-center gap-4 py-10">
        {/* Icônes sociales centrées */}
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/hinimdoumorsia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <Github size={20} />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/morsia-guitdam-hinimdou-266bb0269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              <Linkedin size={20} />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/212777789055"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <div className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              <MessageCircle size={20} />
            </div>
          </a>

          {/* Kaggle */}
          <a
            href="https://www.kaggle.com/morsiahinimdou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
          >
            <div className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
              <Brain size={20} />
            </div>
          </a>

          {/* Télécharger CV */}
          <a
            href="/CV-PRO-2025.pdf"
            download="CV_Hinimdou_Morsia.pdf"
            className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition flex items-center justify-center"
            aria-label="Télécharger CV"
          >
            <Download size={20} />
          </a>
        </div>

        {/* Texte centré en bas */}
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Hinimdou Morsia. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
