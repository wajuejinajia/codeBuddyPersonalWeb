import Link from "next/link";

export default function About() {
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
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                关于我
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                项目
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                联系我
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
              头像
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">关于我</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">了解更多关于我的背景和经历</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">个人简介</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                我是张三，一名充满热情的全栈开发者，拥有5年的软件开发经验。我专注于创建用户友好的Web应用程序，
                并且热衷于学习新技术和解决复杂的技术挑战。我相信技术应该为人们的生活带来便利和价值。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">技能专长</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">前端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"].map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">后端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "Express", "MongoDB", "PostgreSQL", "Docker"].map((skill) => (
                      <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">教育背景</h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">计算机科学学士学位</h3>
                <p className="text-gray-600 dark:text-gray-300">某某大学 | 2015-2019</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  主修计算机科学与技术，专注于软件工程和数据结构算法。在校期间参与多个团队项目，
                  培养了良好的团队协作能力和项目管理经验。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">工作经历</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">高级前端开发工程师</h3>
                  <p className="text-gray-600 dark:text-gray-300">某某科技公司 | 2021-至今</p>
                  <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside space-y-1">
                    <li>负责公司主要产品的前端架构设计和开发</li>
                    <li>带领团队完成多个大型项目的交付</li>
                    <li>优化应用性能，提升用户体验</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">全栈开发工程师</h3>
                  <p className="text-gray-600 dark:text-gray-300">创业公司 | 2019-2021</p>
                  <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside space-y-1">
                    <li>从零开始构建公司的核心产品</li>
                    <li>负责前后端开发和数据库设计</li>
                    <li>参与产品规划和技术决策</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">兴趣爱好</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                除了编程，我还喜欢阅读技术书籍、写技术博客分享经验。业余时间喜欢摄影、旅行和运动。
                我相信保持工作与生活的平衡对于长期的职业发展非常重要。
              </p>
            </section>
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