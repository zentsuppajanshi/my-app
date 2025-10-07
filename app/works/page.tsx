export default function Works() {
  const projects = [
    {
      title: "勤怠管理システム Dマネ",
      description:
        "マンション管理員の勤怠をクラウドで一元管理できるSaaS。代務手配やRPA連携にも対応。",
      link: "https://example.com/dmane",
    },
    {
      title: "HubSpot連携チャットボット",
      description:
        "問い合わせ対応を自動化するAIチャットボット。顧客対応の効率化を実現。",
      link: "https://example.com/chatbot",
    },
    {
      title: "ビジネスナレッジ管理システム",
      description:
        "Google Driveと連携した社内ナレッジ共有システム。更新履歴とメタデータ管理が可能。",
      link: "https://example.com/knowledge",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-8">作品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
