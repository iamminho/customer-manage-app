import type { NextPage } from "next";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Input from "../../components/input";
import TextArea from "../../components/textarea";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 pb-16 pt-4">
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
          <Input label="이름" name="name" type="text" placeholder="상품이름" />
          <Input
            label="가격"
            name="price"
            kind="price"
            placeholder="10,000"
            type="text"
            required
          />
        </div>
        <div className="block my-3">
          <TextArea label="제품설명" name="description" />
        </div>
        <Button text="상품 올리기" />
      </div>
    </Layout>
  );
};

export default Upload;
