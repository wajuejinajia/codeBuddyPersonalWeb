"use client";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Navigation */}
      <nav className="border-b border-amber-200 bg-amber-50/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="text-lg font-medium tracking-wide">
              Liam Cai
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-sm hover:text-amber-700 transition-colors">Home</Link>
              <Link href="/about" className="text-sm hover:text-amber-700 transition-colors">About</Link>
              <Link href="/projects" className="text-sm hover:text-amber-700 transition-colors">Projects</Link>
              <Link href="/contact" className="text-sm hover:text-amber-700 transition-colors">Contact</Link>
              <div className="border-l border-amber-300 pl-8 ml-8">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
            Hello, I&apos;m <em className="not-italic text-amber-700">Liam</em>
          </h1>
          
          <p className="text-lg md:text-xl text-amber-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            A passionate frontend developer creating beautiful and functional web experiences with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="px-8 py-3 text-sm font-medium text-amber-50 bg-amber-800 hover:bg-amber-900 transition-colors"
            >
              Learn More
            </Link>
            <Link 
              href="/projects"
              className="px-8 py-3 text-sm font-medium border border-amber-300 hover:bg-amber-100 transition-colors"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-16 text-center">
            My Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Frontend Development",
                description: "Building responsive and interactive user interfaces with HTML, CSS, and JavaScript"
              },
              {
                title: "React & Next.js",
                description: "Creating modern web applications with React ecosystem and server-side rendering"
              },
              {
                title: "UI/UX Design",
                description: "Designing beautiful and user-friendly interfaces with attention to detail"
              }
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium mb-4">{skill.title}</h3>
                <p className="text-sm text-amber-700 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Modules Section */}
      <section className="py-24 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-16 text-center">
            Personal Interests
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Experience",
                description: "My professional journey and career highlights",
                href: "/experience"
              },
              {
                title: "Movies",
                description: "Film reviews and cinematic experiences I love",
                href: "/movies"
              },
              {
                title: "Sports",
                description: "Athletic activities and sports I&apos;m passionate about",
                href: "/sports"
              },
              {
                title: "Books",
                description: "Reading list and literary recommendations",
                href: "/books"
              }
            ].map((module, index) => (
              <Link key={index} href={module.href} className="block group border border-amber-200 p-6 hover:border-amber-300 transition-colors">
                <h3 className="text-lg font-medium mb-2 group-hover:text-amber-700">{module.title}</h3>
                <p className="text-sm text-amber-700">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-xl md:text-2xl font-light italic mb-8 text-amber-800">
            &ldquo;Code is poetry written in logic&rdquo;
          </blockquote>
          <p className="text-sm text-amber-700">
            Crafting elegant solutions through clean, maintainable code
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-amber-700 mb-12 max-w-xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-3 text-sm font-medium text-amber-50 bg-amber-800 hover:bg-amber-900 transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              href="/projects"
              className="px-8 py-3 text-sm font-medium border border-amber-300 hover:bg-amber-100 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-amber-600">
          <p>&copy; 2024 Liam Cai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}