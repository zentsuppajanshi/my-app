export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {/* プロフィール画像 */}
      <img
        src="/profile.jpg"
        alt="プロフィール画像"
        className="w-32 h-32 rounded-full mb-4 shadow-md"
      />

      {/* 名前 */}
      <h1 className="text-3xl font-bold mb-2">河埜 誠（Makoto Kouno）</h1>

      {/* キャッチコピー */}
      <p className="text-gray-600 text-sm mb-6">
        SaaS企画・運用 × DX推進 × 生成AI活用
      </p>

      {/* リンクボタン群 */}
      <div className="flex gap-4">
        <a
          href="/works"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Works
        </a>
        <a
          href="/contact"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
