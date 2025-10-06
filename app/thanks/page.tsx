export default function Thanks() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          送信が完了しました！
        </h1>
        <p className="text-gray-700 mb-6">
          お問い合わせありがとうございます。<br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          トップページに戻る
        </a>
      </div>
    </main>
  );
}
