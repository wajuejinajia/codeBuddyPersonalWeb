"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold">
              个人网站
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-blue-400">首页</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">关于我</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">项目</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">联系我</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl parallax-float">
            👨‍💻
          </div>
          
          <h1 className="text-6xl md:text-8xl font-thin mb-6 fade-in-up">
            你好，我是 <span className="gradient-text">开发者</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto fade-in-up">
            一名充满激情的全栈开发者，致力于创造优雅、实用的数字体验
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up">
            <Link 
              href="/about"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              了解更多
            </Link>
            <Link 
              href="/projects"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              查看作品
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
            我的<span className="gradient-text">技能</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "前端开发",
                description: "精通 React、Vue、Next.js 等现代前端框架，创建响应式和交互式用户界面",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "⚙️",
                title: "后端开发", 
                description: "熟悉 Node.js、Python、数据库设计和 API 开发，构建稳定可靠的后端服务",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "🎨",
                title: "UI/UX 设计",
                description: "注重用户体验设计，使用 Figma 等工具创建直观美观的界面设计",
                color: "from-purple-500 to-pink-500"
              }
            ].map((skill, index) => (
              <div key={index} className="scroll-section">
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-3xl mb-6 parallax-float`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Modules Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-thin text-center mb-20 scroll-section">
            探索我的<span className="gradient-text">世界</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "实习经历",
                description: "我的职业成长轨迹",
                icon: "💼",
                href: "/experience",
                color: "from-blue-600 to-blue-800"
              },
              {
                title: "电影世界",
                description: "我最喜欢的电影推荐",
                icon: "🎬",
                href: "/movies",
                color: "from-purple-600 to-purple-800"
              },
              {
                title: "运动人生",
                description: "我的运动爱好和支持的球队",
                icon: "🏀",
                href: "/sports",
                color: "from-orange-600 to-red-600"
              },
              {
                title: "书籍推荐",
                description: "改变我思维的好书",
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
                  <p className="text-gray-400 text-sm">{module.description}</p>
                  <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300">
                    探索 →
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
              "Stay hungry, stay foolish"
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              保持饥饿，保持愚蠢。永远对新知识保持渴望，
              永远对未知领域保持好奇心。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 scroll-section">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            让我们一起创造<span className="gradient-text">未来</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            如果你有有趣的项目想法，或者想要交流技术心得，随时联系我
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              联系我
            </Link>
            <Link 
              href="/projects"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-medium text-lg"
            >
              查看项目
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 个人网站. 用心创造，用爱分享.</p>
        </div>
      </footer>
    </div>
  );
}
