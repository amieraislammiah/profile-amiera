type Experience = {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Calendar, Briefcase, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cream-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl tracking-tight font-extrabold text-maroon-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block">Hi, I&apos;m {portfolioData.personalInfo.name}</span>
                <span className="block text-maroon-600 text-2xl sm:text-3xl md:text-4xl mt-3 font-bold">{portfolioData.personalInfo.title}</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                {portfolioData.personalInfo.tagline}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/#projects"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maroon-700 hover:bg-maroon-800 md:py-4 md:text-lg transition-colors shadow-sm"
                >
                  View Projects
                </Link>
                <a
                  href={portfolioData.personalInfo.resumeUrl}
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-maroon-800 bg-maroon-100 hover:bg-maroon-200 md:py-4 md:text-lg transition-colors shadow-sm"
                >
                  <Download size={20} className="mr-2" /> Resume
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
               <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-maroon-100 shadow-2xl ring-1 ring-maroon-900/10">
                 <Image 
                   src="/profile.png" 
                   alt="Nur Amiera" 
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center">
          <p>{portfolioData.personalInfo.summary}</p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" light>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-maroon-200 ml-3 md:ml-6 space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute top-0 left-[-9px] bg-maroon-700 w-4 h-4 rounded-full border-4 border-cream-50 shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-maroon-900">{exp.role}</h3>
                  <span className="inline-flex items-center text-sm font-medium text-maroon-700 bg-maroon-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    <Calendar size={14} className="mr-1" /> {exp.period}
                  </span>
                </div>
                
                <div className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <Briefcase size={18} className="mr-2 text-gray-400" />
                  {exp.company}
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-maroon-400 rounded-full flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Activities Section */}
      <Section id="activities" title="Activities & Engagement">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.activities.map((activity) => (
            <div key={activity.id} className="bg-white p-6 rounded-xl border border-maroon-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-maroon-900 mb-2">{activity.name}</h3>
              <div className="flex items-center text-sm text-maroon-600 font-medium mb-3">
                <span className="bg-maroon-50 px-2 py-1 rounded">{activity.role}</span>
              </div>
              <p className="text-gray-600 text-sm">{activity.description}</p>
              <div className="mt-3 text-xs text-gray-400 font-medium flex items-center">
                <Calendar size={12} className="mr-1" /> {activity.period}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Skills & Certifications Section */}
      <Section id="skills" title="Skills & Certifications" light>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <CheckCircle className="mr-2 text-maroon-600" /> Technical & Soft Skills
            </h3>
            <div className="space-y-8">
              {portfolioData.skills.map((category) => (
                <div key={category.category}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-white border border-maroon-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm hover:border-maroon-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <Award className="mr-2 text-maroon-600" /> Certifications
            </h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="bg-cream-50 border border-maroon-100 p-4 rounded-xl flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-maroon-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-white px-2 py-1 rounded shadow-sm">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="bg-maroon-800 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-maroon-100 mb-8 max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities as a System Analyst or Business Analyst. 
            Feel free to reach out if you have any questions or just want to say hi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="bg-white text-maroon-900 font-bold py-3 px-8 rounded-lg hover:bg-cream-100 transition-colors"
            >
              Send Email
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-maroon-900 border border-maroon-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-maroon-950 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <p className="text-sm text-maroon-300 italic">
            * References available upon request.
          </p>
        </div>
      </Section>
    </>
  );
}
