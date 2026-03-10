import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/Section";

// ── Icon Components ──────────────────────────────────────────────
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <article className="min-h-screen bg-cream-50">
      {/* Header / Hero */}
      <div className="bg-maroon-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-maroon-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeftIcon /> <span className="ml-2">Back to Projects</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-maroon-100 max-w-3xl">{project.description}</p>
          {project.period && (
            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-maroon-800 text-maroon-100 text-sm border border-maroon-700">
              {project.period}
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-8 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-maroon-900 px-4 py-2 rounded-lg font-semibold hover:bg-maroon-50 transition-colors"
              >
                <GithubIcon /> <span className="ml-2">View Code</span>
              </a>
            )}

            {project.confidential && (
              <div className="inline-flex items-center bg-maroon-800/50 text-maroon-100 px-4 py-2 rounded-lg border border-maroon-700">
                <LockIcon /> <span className="ml-2">Confidential Project</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-maroon-800 border border-maroon-700 text-maroon-100 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-maroon-900 mb-4 border-b border-maroon-200 pb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{project.overview}</p>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-maroon-900 mb-6 border-b border-maroon-200 pb-2">Development Process</h2>
              <div className="space-y-6">
                {project.process?.map((step, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-maroon-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-maroon-600 uppercase tracking-wider">Problem</span>
                        <p className="text-gray-700 font-medium">{step.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Solution</span>
                        <p className="text-gray-700 font-medium">{step.solution}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Outcome</span>
                        <p className="text-gray-700 font-medium">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            {project.images && project.images.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-maroon-900 mb-6 border-b border-maroon-200 pb-2">Gallery</h2>
                <div className="grid grid-cols-1 gap-6">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden border border-maroon-100 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Proofs */}
            {project.proofs && project.proofs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-maroon-900 mb-6 border-b border-maroon-200 pb-2">Project Proofs & Evidence</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.proofs.map((img, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden border border-maroon-100 shadow-sm group hover:shadow-md transition-shadow">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Proof ${idx + 1}`}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-2 bg-maroon-50 text-center text-xs text-maroon-800 font-medium border-t border-maroon-100">
                        Evidence {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Role & Contributions */}
            <div className="bg-white p-6 rounded-xl border border-maroon-100 shadow-sm">
              <h3 className="text-lg font-bold text-maroon-900 mb-4">My Role</h3>
              <p className="text-maroon-600 font-semibold mb-4">{project.role}</p>
              <ul className="space-y-3">
                {project.contributions?.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-maroon-500 mr-2 mt-0.5 flex-shrink-0"><CheckCircleIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Objectives */}
            <div className="bg-cream-50 p-6 rounded-xl border border-maroon-100 shadow-sm">
              <h3 className="text-lg font-bold text-maroon-900 mb-4">Key Objectives</h3>
              <ul className="space-y-2">
                {project.objectives?.map((obj, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-maroon-400 rounded-full flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentation Links */}
            <div className="bg-maroon-50 p-6 rounded-xl border border-maroon-100">
              <h3 className="text-lg font-bold text-maroon-900 mb-4">Documentation</h3>
              <div className="space-y-3">
                {Array.isArray(project.documentation) && project.documentation.length > 0 ? (
                  project.documentation.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-white rounded-lg border border-maroon-100 text-maroon-700 hover:shadow-md transition-shadow text-sm font-medium"
                    >
                      <span className="mr-3 text-maroon-500"><FileTextIcon /></span>
                      {doc.label}
                      <span className="ml-auto text-maroon-400"><ExternalLinkIcon /></span>
                    </a>
                  ))
                ) : project.confidential ? (
                  <div className="p-4 bg-white rounded-lg border border-maroon-100 text-gray-600 text-sm">
                    <div className="flex items-center text-maroon-700 font-medium mb-2">
                      <LockIcon /> <span className="ml-2">Restricted Access</span>
                    </div>
                    <p>
                      Documentation for this project is confidential (P&C) due to non-disclosure agreements.
                      Detailed case studies may be available upon request for interview purposes.
                    </p>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}?subject=Inquiry regarding ${project.title}`}
                      className="inline-block mt-3 text-maroon-600 font-semibold hover:text-maroon-800"
                    >
                      Request Information &rarr;
                    </a>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">No documentation available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}