import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      company: "科技创新公司",
      position: "前端开发实习生",
      duration: "2024.06 - 2024.12",
      description: "负责公司官网和内部管理系统的前端开发，使用React和TypeScript构建响应式用户界面。",
      achievements: [
        "优化网站性能，页面加载速度提升40%",
        "开发了可复用的组件库，提高开发效率",
        "参与用户界面设计，提升用户体验"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      company: "互联网金融公司",
      position: "全栈开发实习生",
      duration: "2024.01 - 2024.05",
      description: "参与金融数据分析平台的开发，负责前后端功能实现和数据库设计。",
      achievements: [
        "设计并实现了用户权限管理系统",
        "开发了数据可视化图表组件",
        "协助完成API接口设计和文档编写"
      ],
      tech: ["Vue.js", "Node.js", "MySQL", "Express.js"]
    },
    {
      company: "初创公司",
      position: "产品助理实习生",
      duration: "2023.07 - 2023.12",
      description: "协助产品经理进行产品需求分析和用户研究，参与产品原型设计。",
      achievements: [
        "完成了3个产品功能的需求分析",
        "设计了用户调研问卷，收集了500+用户反馈",
        "制作了产品原型，获得团队一致好评"
      ],
      tech: ["Figma", "Axure", "用户研究", "产品设计"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-semibold hover:text-blue-400 transition-colors">
              返回首页
            </Link>
            <div className="flex space-x-6">
              <Link href="/experience" className="text-blue-400">实习经历</Link>
              <Link href="/movies" className="hover:text-blue-400 transition-colors">喜欢的电影</Link>
              <Link href="/sports" className="hover:text-blue-400 transition-colors">运动爱好</Link>
              <Link href="/books" className="hover:text-blue-400 transition-colors">推荐书籍</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-thin mb-8 fade-in-up">
            实习<span className="gradient-text">经历</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-up">
            在不同的公司和岗位中成长，积累宝贵的实践经验
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="scroll-section">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold">{exp.company}</h3>
                        <span className="text-sm text-blue-400 font-medium">{exp.duration}</span>
                      </div>
                      <h4 className="text-lg text-blue-300 mb-4">{exp.position}</h4>
                      <p className="text-gray-300 mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-lg font-medium mb-3">主要成就</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-medium mb-3">技术栈</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} text-center`}>
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl parallax-float">
                      {index === 0 ? '💻' : index === 1 ? '🏢' : '🚀'}
                    </div>
                    <h3 className="text-3xl font-light text-gray-300">
                      {index === 0 ? '前端专精' : index === 1 ? '全栈发展' : '产品思维'}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-8">想了解更多？</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium"
            >
              联系我
            </Link>
            <Link 
              href="/projects"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium"
            >
              查看项目
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}