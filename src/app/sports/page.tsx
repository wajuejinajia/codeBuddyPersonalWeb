import Link from "next/link";

export default function Sports() {
  const sports = [
    {
      name: "篮球",
      icon: "🏀",
      level: "业余爱好者",
      experience: "8年",
      description: "从初中开始接触篮球，热爱这项运动的团队合作精神和竞技魅力。",
      favoriteTeams: ["洛杉矶湖人队", "金州勇士队"],
      favoritePlayers: ["科比·布莱恩特", "勒布朗·詹姆斯", "斯蒂芬·库里"],
      achievements: ["校内篮球赛亚军", "社区篮球联赛最佳团队合作奖"],
      color: "from-orange-500 to-red-600"
    },
    {
      name: "足球",
      icon: "⚽",
      level: "观赏爱好者",
      experience: "10年",
      description: "虽然不常踢球，但是足球忠实观众，熟悉各大联赛和球员。",
      favoriteTeams: ["巴塞罗那", "曼城", "中国国家队"],
      favoritePlayers: ["梅西", "德布劳内", "哈兰德"],
      achievements: ["预测世界杯比赛准确率85%", "足球知识竞赛冠军"],
      color: "from-green-500 to-blue-600"
    },
    {
      name: "游泳",
      icon: "🏊‍♂️",
      level: "中级水平",
      experience: "5年",
      description: "游泳是我最喜欢的有氧运动，既能锻炼全身肌肉，又能放松心情。",
      favoriteTeams: ["中国游泳队"],
      favoritePlayers: ["孙杨", "张雨霏", "汪顺"],
      achievements: ["自由泳1500米个人最好成绩", "参加过3次游泳马拉松"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "跑步",
      icon: "🏃‍♂️",
      level: "长跑爱好者",
      experience: "6年",
      description: "跑步让我保持身心健康，也是我思考和放松的最佳时间。",
      favoriteTeams: ["肯尼亚长跑队", "埃塞俄比亚长跑队"],
      favoritePlayers: ["埃利乌德·基普乔格", "贝克勒"],
      achievements: ["半程马拉松完赛3次", "10公里最好成绩42分钟"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const favoriteTeams = [
    {
      name: "洛杉矶湖人队",
      sport: "NBA篮球",
      logo: "💜💛",
      reason: "科比的紫金王朝和湖人的冠军文化深深吸引着我。Mamba精神激励我在生活中也要追求卓越。",
      achievements: "17次NBA总冠军",
      favoriteMemory: "2020年夺冠，为科比而战的那个赛季"
    },
    {
      name: "巴塞罗那俱乐部",
      sport: "西甲足球",
      logo: "🔴🔵",
      reason: "梅西时代的巴萨踢出了最美丽的足球。tiki-taka战术和拉玛西亚青训营的理念让人着迷。",
      achievements: "26次西甲冠军，5次欧冠冠军",
      favoriteMemory: "2009年六冠王赛季，足球史上最完美的一年"
    },
    {
      name: "金州勇士队",
      sport: "NBA篮球",
      logo: "💙💛",
      reason: "库里改变了篮球的打法，勇士的小球战术和团队篮球理念很有启发性。",
      achievements: "7次NBA总冠军",
      favoriteMemory: "2016年常规赛73胜，虽然总决赛失利但创造了历史"
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
              <Link href="/movies" className="hover:text-blue-400 transition-colors">喜欢的电影</Link>
              <Link href="/sports" className="text-blue-400">运动爱好</Link>
              <Link href="/books" className="hover:text-blue-400 transition-colors">推荐书籍</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-thin mb-8 fade-in-up">
            运动<span className="gradient-text">人生</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto fade-in-up">
            运动不仅强健体魄，更塑造品格。每一滴汗水都是对自己的超越
          </p>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">我的运动项目</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sports.map((sport, index) => (
              <div key={index} className="scroll-section">
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-r ${sport.color} rounded-full flex items-center justify-center text-4xl mb-6 parallax-float`}>
                    {sport.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">{sport.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span>水平: {sport.level}</span>
                        <span>•</span>
                        <span>经验: {sport.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {sport.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-medium text-blue-400 mb-2">喜欢的球队/选手</h4>
                      <div className="space-y-1">
                        <div>
                          <span className="text-sm text-gray-400">球队: </span>
                          <span className="text-gray-300">{sport.favoriteTeams.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">选手: </span>
                          <span className="text-gray-300">{sport.favoritePlayers.join(", ")}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-green-400 mb-2">个人成就</h4>
                      <ul className="space-y-1">
                        {sport.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-green-400 mr-2">•</span>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Teams Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">我的主队</h2>
          <div className="space-y-12">
            {favoriteTeams.map((team, index) => (
              <div key={index} className="scroll-section">
                <div className="glass rounded-3xl p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{team.logo}</div>
                      <h3 className="text-2xl font-semibold mb-2">{team.name}</h3>
                      <p className="text-blue-400">{team.sport}</p>
                      <p className="text-sm text-gray-400 mt-2">{team.achievements}</p>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-green-400 mb-2">为什么支持</h4>
                        <p className="text-gray-300 leading-relaxed">{team.reason}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-purple-400 mb-2">难忘时刻</h4>
                        <p className="text-gray-300 leading-relaxed italic">"{team.favoriteMemory}"</p>
                      </div>
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
              "运动教会我的不仅仅是技能"
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              团队合作、坚持不懈、面对失败、追求卓越——
              这些运动中学到的品质，在生活和工作中同样珍贵。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-8">一起运动，一起成长</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="apple-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium"
            >
              约个球？
            </Link>
            <Link 
              href="/experience"
              className="apple-button border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium"
            >
              了解我的经历
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}