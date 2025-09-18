import Link from "next/link";

export default function Books() {
  const books = [
    {
      title: "人类简史",
      author: "尤瓦尔·赫拉利",
      category: "历史/人文",
      rating: "9.1",
      description: "从石器时代到21世纪，作者用全新的视角解读人类发展史，探讨了认知革命、农业革命和科学革命对人类社会的深远影响。",
      reason: "这本书彻底改变了我对人类历史的认知。它不仅仅是历史书，更是对人类未来的深度思考。",
      keyInsight: "人类之所以能够合作，是因为我们相信共同的虚构故事。",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "思考，快与慢",
      author: "丹尼尔·卡尼曼",
      category: "心理学/认知科学",
      rating: "8.8",
      description: "诺贝尔经济学奖得主揭示了人类思维的两套系统：快思考和慢思考，以及它们如何影响我们的判断和决策。",
      reason: "作为一个理性思考的爱好者，这本书让我意识到人类思维中的偏见和局限性，帮助我做出更好的决策。",
      keyInsight: "我们以为自己是理性的，但实际上大部分时候都在依赖直觉和偏见。",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "代码整洁之道",
      author: "罗伯特·C·马丁",
      category: "编程/技术",
      rating: "9.3",
      description: "软件开发领域的经典著作，教导程序员如何写出可读、可维护、优雅的代码。",
      reason: "这本书不仅提升了我的编程技能，更重要的是改变了我对代码质量的认知。好的代码就像好的文学作品。",
      keyInsight: "代码是写给人看的，机器只是恰好能执行它。",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "原则",
      author: "瑞·达利欧",
      category: "自我管理/商业",
      rating: "8.9",
      description: "桥水基金创始人分享了他的生活和工作原则，以及如何运用这些原则获得成功。",
      reason: "这本书帮助我建立了自己的原则体系。达利欧的透明度文化和原则化思维对我影响很大。",
      keyInsight: "痛苦+反思=进步。面对现实，接受现实，处理现实。",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "三体",
      author: "刘慈欣",
      category: "科幻小说",
      rating: "9.0",
      description: "中国科幻文学的里程碑作品，讲述了地球文明与三体文明的第一次接触，探讨了文明、科技和人性。",
      reason: "大刘的想象力让我震撼。这不仅是科幻小说，更是对人类文明和宇宙的深度思考。",
      keyInsight: "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "乔布斯传",
      author: "沃尔特·艾萨克森",
      category: "传记",
      rating: "8.7",
      description: "苹果公司创始人史蒂夫·乔布斯的官方传记，展现了一个完整的乔布斯：天才与暴君、创新者与独裁者。",
      reason: "乔布斯的完美主义和创新精神深深影响了我。他证明了技术和艺术可以完美结合。",
      keyInsight: "Stay hungry, stay foolish. 简约是复杂的终极形式。",
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "穷查理宝典",
      author: "查理·芒格",
      category: "投资/哲学",
      rating: "9.2",
      description: "巴菲特的合伙人查理·芒格的智慧结晶，涵盖投资、商业、生活哲学等多个领域。",
      reason: "芒格的多元思维模型让我学会从不同角度思考问题。他的人生智慧远超投资本身。",
      keyInsight: "获得智慧是一个道德责任，仅仅为了变得更加有用而学习。",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "未来简史",
      author: "尤瓦尔·赫拉利",
      category: "未来学/科技",
      rating: "8.6",
      description: "《人类简史》的续篇，探讨人工智能、生物技术等新技术将如何重塑人类的未来。",
      reason: "作为一个技术从业者，这本书让我思考技术发展对人类社会的深远影响，以及我们应该如何应对。",
      keyInsight: "21世纪最重要的议题是：当算法比你更了解你自己时，会发生什么？",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const readingStats = {
    booksPerYear: 24,
    favoriteGenres: ["科技", "历史", "心理学", "科幻"],
    readingTime: "每天1-2小时",
    currentlyReading: "《复杂》- 梅拉妮·米歇尔"
  };

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
              <Link href="/experience" className="hover:text-blue-400 transition-colors">实习经历</Link>
              <Link href="/movies" className="hover:text-blue-400 transition-colors">喜欢的电影</Link>
              <Link href="/sports" className="hover:text-blue-400 transition-colors">运动爱好</Link>
              <Link href="/books" className="text-blue-400">推荐书籍</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-thin mb-8 fade-in-up">
            阅读<span className="gradient-text">世界</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-up">
            书籍是人类进步的阶梯，每一页都是通向智慧的门径
          </p>
        </div>
      </section>

      {/* Reading Stats */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-light text-center mb-8">我的阅读数据</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{readingStats.booksPerYear}</div>
                <div className="text-gray-400">年阅读量</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">{readingStats.readingTime}</div>
                <div className="text-gray-400">日阅读时间</div>
              </div>
              <div>
                <div className="text-lg text-purple-400 mb-2">{readingStats.favoriteGenres.join(" / ")}</div>
                <div className="text-gray-400">偏好类型</div>
              </div>
              <div>
                <div className="text-sm text-orange-400 mb-2">{readingStats.currentlyReading}</div>
                <div className="text-gray-400">正在阅读</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">强烈推荐的书籍</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div key={index} className="scroll-section">
                <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`w-full h-32 bg-gradient-to-r ${book.color} rounded-2xl mb-6 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300`}>
                    📚
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
                      <p className="text-blue-400 mb-1">作者: {book.author}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                          {book.category}
                        </span>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span className="text-yellow-400 font-semibold">{book.rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {book.description}
                    </p>

                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-medium text-green-400 mb-2">推荐理由：</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {book.reason}
                      </p>
                      <div className="bg-gray-900/50 rounded-lg p-3">
                        <h5 className="text-xs font-medium text-purple-400 mb-1">核心观点：</h5>
                        <p className="text-gray-300 text-sm italic">
                          "{book.keyInsight}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Philosophy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-light mb-8 gradient-text">
              我的阅读哲学
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                "读书不是为了雄辩和驳斥，也不是为了轻信和盲从，而是为了思考和权衡。"
              </p>
              <p className="text-gray-400">
                我相信好书能够拓展思维边界，挑战既有观念，启发新的思考。
                每一本书都是与智者的对话，每一页都可能改变我们看世界的方式。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">阅读分类</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "技术成长", icon: "💻", count: "15+", color: "from-green-500 to-teal-500" },
              { name: "人文历史", icon: "📜", count: "12+", color: "from-amber-500 to-orange-500" },
              { name: "科学思维", icon: "🧠", count: "18+", color: "from-blue-500 to-purple-500" },
              { name: "商业管理", icon: "📈", count: "10+", color: "from-gray-500 to-gray-700" }
            ].map((category, index) => (
              <div key={index} className="scroll-section text-center">
                <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-blue-400">{category.count}</p>
                  <p className="text-gray-400 text-sm">本书籍</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-8">想要更多推荐？</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium"
            >
              交流读书心得
            </Link>
            <Link 
              href="/about"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium"
            >
              了解更多关于我
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}