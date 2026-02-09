interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function Section({ id, title, subtitle, children, className = "", light = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 ${light ? "bg-white" : "bg-cream-50"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
          {subtitle && (
            <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
