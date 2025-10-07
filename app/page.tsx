export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">河埜 誠（Makoto Kouno）</h1>
      <p className="text-lg text-center max-w-xl leading-relaxed mb-6">
        株式会社うぇるねすでSaaSアプリ「Dマネ」を企画・運営しています。
        DX推進や業務改善、AI活用に関心があります。
      </p>
      <div className="flex gap-4">
        <a
          href="/works"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          作品を見る
        </a>
        <a
          href="/contact"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          お問い合わせ
        </a>
      </div>
    </main>
  );
}
