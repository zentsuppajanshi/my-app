export default function Works() {
<<<<<<< HEAD
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-8">作品一覧</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* ToDoアプリ */}
        <a
          href="https://your-todo.vercel.app"
          target="_blank"
          className="p-6 border rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">ToDoアプリ</h2>
          <p className="text-sm text-gray-600">
            React/Next.jsで作成した基本的なCRUDアプリ
          </p>
        </a>

        {/* ブログサイト */}
        <a
          href="https://your-blog.vercel.app"
          target="_blank"
          className="p-6 border rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">ブログサイト</h2>
          <p className="text-sm text-gray-600">
            Markdownで記事を投稿できるNext.js製ブログ
          </p>
        </a>

        {/* 企業サイト */}
        <a
          href="https://your-company.vercel.app"
          target="_blank"
          className="p-6 border rounded-lg shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">企業サイト（模写）</h2>
          <p className="text-sm text-gray-600">
            TailwindCSSを使ったレスポンシブデザインのコーポレートサイト
          </p>
        </a>
=======
  const projects = [
    {
      title: "勤怠管理システム Dマネ",
      description:
        "マンション管理員の勤怠をクラウドで一元管理できるSaaS。代務手配やRPA連携にも対応。",
      link: "https://example.com/dmane",
    },
    {
      title: "ビジネスナレッジ管理システム",
      description:
        "Google Driveを活用したナレッジ共有プラットフォーム。メタ情報付きで検索性を強化。",
      link: "https://example.com/knowledge",
    },
    {
      title: "AI音声チャットボット",
      description:
        "コールセンター業務を効率化するためのAIチャットボット。ChatGPT APIを活用。",
      link: "https://example.com/voicebot",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
          作品紹介
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
>>>>>>> cba6bfd (initial commit)
      </div>
    </main>
  );
}
