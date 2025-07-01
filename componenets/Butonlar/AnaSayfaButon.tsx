"use client";
import Link from "next/link";

export default function AnaSayfaButon() {
  return (
    <Link
      href="/"
      className="fixed bottom-6 left-6 bg-orange-300 hover:bg-rose-700 text-white px-5 py-3 rounded-full shadow-lg text-sm md:text-base z-50"
    >
      🏠 Ana Sayfa
    </Link>
  );
}
