import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{portfolioData.personalInfo.name}</h3>
            <p className="text-maroon-100 text-sm max-w-md">
              {portfolioData.personalInfo.tagline}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-maroon-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon-200 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-maroon-800 text-center text-sm text-maroon-300">
          <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
