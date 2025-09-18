import Link from "next/link";

export default function Home() {
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
            头像
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            你好，我是 <span className="text-blue-600 dark:text-blue-400">张三</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            一名热爱技术的全栈开发者，专注于创建优雅且实用的数字体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              了解更多
            </Link>
            <Link 
              href="/projects"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              查看项目
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">前端开发</h3>
            <p className="text-gray-600 dark:text-gray-300">
              精通 React、Vue、Next.js 等现代前端框架，创建响应式和交互式用户界面
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">后端开发</h3>
            <p className="text-gray-600 dark:text-gray-300">
              熟悉 Node.js、Python、数据库设计和 API 开发，构建稳定可靠的后端服务
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">UI/UX 设计</h3>
            <p className="text-gray-600 dark:text-gray-300">
              注重用户体验设计，使用 Figma 等工具创建直观美观的界面设计
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 张三的个人网站. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
