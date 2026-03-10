
import Link from "next/link";
import Image from "next/image";
import { portfolioData, Experience, Activity, Project, SkillCategory, Certification } from "@/data/portfolio";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

// ── Icon Components ──────────────────────────────────────────────
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);
const CalendarIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cream-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl tracking-tight font-extrabold text-maroon-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block">Hi, I&apos;m {portfolioData.personalInfo.name}</span>
                <span className="block text-maroon-600 text-2xl sm:text-3xl md:text-4xl mt-3 font-bold">{portfolioData.personalInfo.title}</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                {portfolioData.personalInfo.tagline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/#projects" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maroon-700 hover:bg-maroon-800 md:py-4 md:text-lg transition-colors shadow-sm">
                  View Projects
                </Link>
                <a href={portfolioData.personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-maroon-800 bg-maroon-100 hover:bg-maroon-200 md:py-4 md:text-lg transition-colors shadow-sm">
                  <span className="mr-2"><DownloadIcon /></span> Resume
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-maroon-100 shadow-2xl ring-1 ring-maroon-900/10">
                <Image src="/profile.png" alt="Nur Amiera" fill className="object-cover" priority />
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
            {(portfolioData.experience as Experience[]).map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                <div className="absolute top-0 left-[-9px] bg-maroon-700 w-4 h-4 rounded-full border-4 border-cream-50 shadow-sm" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-maroon-900">{exp.role}</h3>
                  <span className="inline-flex items-center text-sm font-medium text-maroon-700 bg-maroon-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    <span className="mr-1"><CalendarIcon size={14} /></span> {exp.period}
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2 text-gray-400"><BriefcaseIcon /></span>
                  {exp.company}
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement: string) => (
                    <li key={achievement} className="flex items-start text-gray-600 text-sm">
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
          {(portfolioData.activities as Activity[]).map((activity) => (
            <div key={activity.id} className="bg-white p-6 rounded-xl border border-maroon-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-maroon-900 mb-2">{activity.name}</h3>
              <div className="flex items-center text-sm text-maroon-600 font-medium mb-3">
                <span className="bg-maroon-50 px-2 py-1 rounded">{activity.role}</span>
              </div>
              <p className="text-gray-600 text-sm">{activity.description}</p>
              <div className="mt-3 text-xs text-gray-400 font-medium flex items-center">
                <span className="mr-1"><CalendarIcon size={12} /></span> {activity.period}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(portfolioData.projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Skills & Certifications Section */}
      <Section id="skills" title="Skills & Certifications" light>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <span className="mr-2 text-maroon-600"><CheckCircleIcon /></span> Technical & Soft Skills
            </h3>
            <div className="space-y-8">
              {(portfolioData.skills as SkillCategory[]).map((category) => (
                <div key={category.category}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string) => (
                      <span key={skill} className="bg-white border border-maroon-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm hover:border-maroon-300 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <span className="mr-2 text-maroon-600"><AwardIcon /></span> Certifications
            </h3>
            <div className="space-y-4">
              {(portfolioData.certifications as Certification[]).map((cert) => (
                <div key={cert.id} className="bg-cream-50 border border-maroon-100 p-4 rounded-xl flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-maroon-900">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-white px-2 py-1 rounded shadow-sm">{cert.date}</span>
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
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="bg-white text-maroon-900 font-bold py-3 px-8 rounded-lg hover:bg-cream-100 transition-colors">
              Send Email
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bg-maroon-900 border border-maroon-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-maroon-950 transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <p className="text-sm text-maroon-300 italic">* References available upon request.</p>
        </div>
      </Section>
    </>
  );
}