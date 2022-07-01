import React from "react";

const LayoutHeader = () => {
  return (
    <header class="text-gray-600 body-font w-full">
      <div class="  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">gup97</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Posts</a>
          <a class="mr-5 hover:text-gray-900">TIL</a>
          <a class="mr-5 hover:text-gray-900">About</a>
          <a class="mr-5 hover:text-gray-900">GitHub</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;
