"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-section").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold">
              Liam Cai
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-blue-400">{t('nav.home')}</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">{t('nav.projects')}</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-gray-900 dark:via-black dark:to-blue-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl parallax-float">
            👨‍💻
          </div>
          
          <h1 className="text-6xl md:text-8xl font-thin mb-6 fade-in-up">
            {t('hero.greeting')} <span className="gradient-text">{t('hero.name')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto fade-in-up">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up">
            <Link 
              href="/about"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              {t('hero.learnMore')}
            </Link>
            <Link 
              href="/projects"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              {t('hero.viewWork')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-thin text-center mb-20 scroll-section">
            {t('skills.title').split(' ')[0]}<span className="gradient-text">{t('skills.title').split(' ')[1]}</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: t('skills.frontend.title'),
                description: t('skills.frontend.description'),
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "⚛️",
                title: t('skills.react.title'),
                description: t('skills.react.description'),
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "🎨",
                title: t('skills.css.title'),
                description: t('skills.css.description'),
                color: "from-purple-500 to-pink-500"
              }
            ].map((skill, index) => (
              <div key={index} className="scroll-section">
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-3xl mb-6 parallax-float`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Modules Section */}
      <section className="py-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-thin text-center mb-20 scroll-section">
            {t('modules.title').split(' ')[0]}<span className="gradient-text">{t('modules.title').split(' ')[1]}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('modules.experience.title'),
                description: t('modules.experience.description'),
                icon: "💼",
                href: "/experience",
                color: "from-blue-600 to-blue-800"
              },
              {
                title: t('modules.movies.title'),
                description: t('modules.movies.description'),
                icon: "🎬",
                href: "/movies",
                color: "from-purple-600 to-purple-800"
              },
              {
                title: t('modules.sports.title'),
                description: t('modules.sports.description'),
                icon: "🏀",
                href: "/sports",
                color: "from-orange-600 to-red-600"
              },
              {
                title: t('modules.books.title'),
                description: t('modules.books.description'),
                icon: "📚",
                href: "/books",
                color: "from-green-600 to-teal-600"
              }
            ].map((module, index) => (
              <Link key={index} href={module.href} className="scroll-section block group">
                <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`w-full h-32 bg-gradient-to-r ${module.color} rounded-2xl mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{module.description}</p>
                  <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300">
                    {t('modules.explore')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center scroll-section">
          <div className="glass rounded-3xl p-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 gradient-text">
              &ldquo;{t('quote.text')}&rdquo;
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('quote.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 scroll-section">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            {t('cta.title').split(' ')[0]}<span className="gradient-text">{t('cta.title').split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              {t('cta.contact')}
            </Link>
            <Link 
              href="/projects"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              {t('cta.viewProjects')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-300 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
