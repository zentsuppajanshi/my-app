"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");

    emailjs
      .send(
        "service_08v7hfd", // ✅ あなたのService ID
        "template_xq5ukvd", // ✅ 管理者宛テンプレート
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DpAWRnc9Ih0eyayz0" // ✅ Public Key
      )
      .then(
        () => {
          setStatus("送信が完了しました！ありがとうございます。");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("送信に失敗しました。もう一度お試しください。");
        }
      );
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        お問い合わせフォーム
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">お名前</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            お問い合わせ内容
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          送信
        </button>

        {status && <p className="text-center text-sm mt-3">{status}</p>}
      </form>
    </main>
  );
}
