"use client";

import Link from "next/link";

export default function EkleButon() {
  return (
    <Link
      href="/ekle"
      className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-lg text-sm md:text-base z-50"
    >
      + İçerik Ekle
    </Link>
  );
}
