import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-lime-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-teal-600 dark:text-red-400">
        Kitaplar Sayfası
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Burada kitaplarla ilgili içerikler olacak...
      </p>
    </main>
  );
};

export default page;
