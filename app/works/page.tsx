export default function Works() {
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
      </div>
    </main>
  );
}
