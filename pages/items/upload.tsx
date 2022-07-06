import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label
          className="w-full flex items-center justify-center rounded-md
        hover:border-orange-500 border-2 border-dashed border-gray-300 h-48 
        text-gray-600 hover:text-orange-500 mb-3"
        >
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-600 mb-1"
          htmlFor="name"
        >
          이름
        </label>
        <div className="rounded-md shadow-sm flex items-center mb-3">
          <input
            id="name"
            type="text"
            placeholder="상품이름"
            className="appearance-none w-full px-3 py-4 pl-7
                border-gray-300  rounded-md shadow-sm placeholder-gray-400           
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <label
          className="block text-sm font-medium text-gray-600 mb-1"
          htmlFor="price"
        >
          가격
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm pointer-events-none">₩</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="10,000"
            className="appearance-none w-full px-3 py-4 pl-7
                border-gray-300  rounded-md shadow-sm placeholder-gray-400           
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute pointer-events-none right-0 pr-3 flex items-center text-gray-500">
            <span>원</span>
          </div>
        </div>
      </div>
      <div className="block my-3">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          제품 설명
        </label>
        <textarea
          className="mt-1 shadow-sm w-full rounded-md
         focus:ring-orange-500 focus:border-orange-500
        border-gray-300"
          rows={4}
        />
      </div>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4
          border border-transparent rounded-md shadow-sm text-sm font-medium
          focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none
          mt-3 w-full"
      >
        상품 올리기
      </button>
    </div>
  );
};

export default Upload;
