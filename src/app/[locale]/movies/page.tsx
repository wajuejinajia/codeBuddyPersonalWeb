import Link from "next/link";

export default function Movies() {
  const movies = [
    {
      title: "星际穿越",
      englishTitle: "Interstellar",
      year: "2014",
      director: "克里斯托弗·诺兰",
      genre: "科幻/剧情",
      rating: "9.3",
      description: "一部关于时间、空间和人类情感的史诗级科幻电影。诺兰用科学的严谨性和情感的深度，讲述了一个关于父爱和拯救人类的故事。",
      reason: "这部电影让我思考时间的意义和人类的渺小与伟大。每次观看都能发现新的细节和深层含义。",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "盗梦空间",
      englishTitle: "Inception",
      year: "2010",
      director: "克里斯托弗·诺兰",
      genre: "科幻/动作",
      rating: "9.3",
      description: "一个关于梦境中的梦境的复杂故事，探讨了现实与虚幻的界限。",
      reason: "多层次的叙事结构和精彩的视觉效果，每一次重看都能理解更多的细节。这部电影改变了我对电影叙事的认知。",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "肖申克的救赎",
      englishTitle: "The Shawshank Redemption",
      year: "1994",
      director: "弗兰克·德拉邦特",
      genre: "剧情",
      rating: "9.7",
      description: "一个关于希望、友谊和救赎的经典故事。在绝望中寻找希望，在黑暗中寻找光明。",
      reason: "这部电影教会了我什么是真正的自由和希望。无论环境多么恶劣，人的精神永远可以保持自由。",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "千与千寻",
      englishTitle: "Spirited Away",
      year: "2001",
      director: "宫崎骏",
      genre: "动画/奇幻",
      rating: "9.4",
      description: "宫崎骏的经典动画作品，讲述了一个小女孩在神秘世界中的成长故事。",
      reason: "这部动画不仅画面精美，更重要的是它传达的环保理念和成长主题。每个角色都有其深层含义。",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "阿甘正传",
      englishTitle: "Forrest Gump",
      year: "1994",
      director: "罗伯特·泽米吉斯",
      genre: "剧情/喜剧",
      rating: "9.5",
      description: "一个智商不高但心地善良的男人，用他的方式影响了美国历史的多个重要时刻。",
      reason: "Life is like a box of chocolates. 这部电影让我明白，有时候简单和善良比聪明更重要。",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "楚门的世界",
      englishTitle: "The Truman Show",
      year: "1998",
      director: "彼得·威尔",
      genre: "剧情/科幻",
      rating: "9.3",
      description: "一个男人发现自己的整个人生都是一场电视秀，开始质疑现实的本质。",
      reason: "在社交媒体时代，这部电影显得更加深刻。它让我思考什么是真实的生活，什么是表演。",
      color: "from-blue-500 to-purple-500"
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
              <Link href="/experience" className="hover:text-blue-400 transition-colors">实习经历</Link>
              <Link href="/movies" className="text-blue-400">喜欢的电影</Link>
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
            我的<span className="gradient-text">电影</span>世界
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-up">
            这些电影不仅仅是娱乐，更是人生的启发和思考的源泉
          </p>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, index) => (
              <div key={index} className="scroll-section group">
                <div className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 h-full">
                  <div className={`w-full h-48 bg-gradient-to-r ${movie.color} rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300`}>
                    🎬
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{movie.title}</h3>
                      <p className="text-gray-400 text-sm">{movie.englishTitle} ({movie.year})</p>
                      <p className="text-blue-400 text-sm">导演: {movie.director}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {movie.genre}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="text-yellow-400 font-semibold">{movie.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {movie.description}
                    </p>

                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-medium text-blue-400 mb-2">为什么喜欢：</h4>
                      <p className="text-gray-400 text-sm leading-relaxed italic">
                        &ldquo;{movie.reason}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl font-light mb-8 gradient-text">
              &ldquo;电影是梦境的语言&rdquo;
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              每一部好电影都是一扇窗，让我们看到不同的世界，体验不同的人生。
              它们不仅娱乐我们，更重要的是启发我们思考，帮助我们成长。
            </p>
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
              与我交流
            </Link>
            <Link 
              href="/books"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium"
            >
              查看书籍推荐
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}