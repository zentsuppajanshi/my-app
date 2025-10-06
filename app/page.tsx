export default function Home() {
  return (
<<<<<<< HEAD
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {/* プロフィール画像 */}
      <img
        src="/profile.jpg"
        alt="プロフィール画像"
        className="w-32 h-32 rounded-full shadow-md mb-6"
      />

      {/* 名前・肩書き */}
      <h1 className="text-3xl font-bold mb-2">河埜 誠 (Makoto Kouno)</h1>
      <p className="text-lg text-gray-600 mb-6">
        React / Next.js Developer | TypeScript | TailwindCSS
      </p>

      {/* 自己紹介文 */}
      <p className="max-w-xl text-center leading-relaxed mb-8">
        株式会社うぇるねすにて、マンション管理のDXを推進する
        SaaSアプリ「Dマネ」の企画運用を担当。<br />
        趣味は ZUMBA、麻雀、仏像巡り、沖縄三線。<br />
        副業では Web制作やReact/Next.jsを使った開発を行っています。
      </p>

      {/* リンクボタン */}
      <div className="flex space-x-4">
        <a
          href="/works"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          作品一覧
        </a>
        <a
          href="/contact"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md transition"
        >
          お問い合わせ
        </a>
      </div>

      {/* フッター */}
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Makoto Kouno Portfolio
      </footer>
=======
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
        {/* プロフィール画像 */}
        <img
          src="/profile.jpg"
          alt="プロフィール画像"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />

        {/* 名前 */}
        <h1 className="mt-4 text-2xl font-bold">河埜 誠</h1>
        <p className="text-gray-600">DX推進 / SaaS企画運用</p>

        {/* 自己紹介テキスト */}
        <p className="mt-4 text-lg text-gray-700">
          株式会社うぇるねすでマンション管理現場のDX化を推進しています。
          趣味は麻雀とZUMBA。新しい技術を学ぶのが大好きです。
        </p>

        {/* SNSリンク */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
>>>>>>> cba6bfd (initial commit)
    </main>
  );
}
