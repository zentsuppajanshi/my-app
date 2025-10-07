export default function Works() {
  const projects = [
    {
      title: "勤怠管理システム Dマネ",
      description:
        "マンション管理員の勤怠をクラウドで一元管理できるSaaS。代務手配やRPA連携にも対応。",
      link: "https://example.com/dmane",
    },
    {
      title: "業務ナレッジ管理システム",
      description:
        "Google Driveと連携し、社内ナレッジを自動で整理・検索可能にするGASベースの管理ツール。",
      link: "https://example.com/knowledge",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-3xl font-bold mb-8">作品一覧</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
