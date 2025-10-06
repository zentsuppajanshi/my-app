"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("送信中...");

    emailjs
      .send(
        "service_08v7hfd",    // ✅ あなたの Service ID
        "template_xq5ukvd",   // ✅ 管理者宛 Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DpAWRnc9Ih0eyayz0"   // ✅ あなたの Public Key
      )
      .then(
        () => {
          setStatus("送信が完了しました！ありがとうございます。");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("送信に失敗しました。しばらくして再度お試しください。");
        }
      );
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          お問い合わせフォーム
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            送信する
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
      </div>
    </main>
  );
}
