import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "电商平台",
      description: "使用Next.js和Node.js构建的全栈电商平台，包含用户管理、商品展示、购物车和支付功能。",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "任务管理应用",
      description: "基于React的任务管理工具，支持团队协作、项目管理和进度跟踪。",
      technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
      image: "📋",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "博客系统",
      description: "个人博客平台，支持Markdown编辑、标签分类和评论系统。",
      technologies: ["Vue.js", "Python", "Django", "MySQL"],
      image: "📝",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "数据可视化仪表板",
      description: "企业数据分析仪表板，提供实时数据展示和交互式图表。",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "📊",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "移动端App",
      description: "跨平台移动应用，提供社交功能和实时聊天。",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: "📱",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "AI聊天机器人",
      description: "集成OpenAI API的智能聊天机器人，支持多轮对话和上下文理解。",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      image: "🤖",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              我的个人网站
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                首页
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                关于我
              </Link>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium">
                项目
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                联系我
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">我的项目</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            这里展示了我参与开发的一些项目，涵盖了前端、后端和全栈开发
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    演示
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">想要合作？</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              如果您对我的项目感兴趣，或者有合作意向，欢迎联系我
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              联系我
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 张三的个人网站. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}