"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("送信中...");

    emailjs
      .send(
        "service_08v7hfd", // Service ID
        "template_xq5ukvd", // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DpAWRnc9Ih0eyayz0" // Public Key
      )
      .then(() => {
        setStatus("送信が完了しました！ありがとうございます。");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("送信エラー:", error);
        setStatus("送信に失敗しました。もう一度お試しください。");
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          お名前
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
          メールアドレス
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
          お問い合わせ内容
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </label>

        <button
          type="submit"
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          送信
        </button>

        <p className="mt-4 text-center text-gray-700">{status}</p>
      </form>
    </main>
  );
}
