"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("送信中...");

    emailjs
      .send(
        "service_08v7hfd",   // ← あなたの Service ID
        "template_xq5ukvd",  // ← あなたの Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DpAWRnc9Ih0eyayz0"  // ← あなたの Public Key
      )
      .then(() => {
        setStatus("送信が完了しました！ありがとうございます。");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("送信エラー:", error);
        setStatus("送信に失敗しました。再度お試しください。");
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">お問い合わせ</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">お名前</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">メールアドレス</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">お問い合わせ内容</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          送信
        </button>
      </form>

      {status && <p className="mt-4 text-gray-700 text-sm">{status}</p>}
    </main>
  );
}
