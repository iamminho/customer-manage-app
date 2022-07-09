import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pb-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className=" text-gray-800 text-2xl font-semibold mt-2">
          Let's make potato
        </h3>

        <div className="h-[50vh] mt-0 py-10 pb-16 px-4 space-y-4 overflow-y-scroll">
          <Message message="ooo 얼마에요?" />
          <Message message="12,000₩이요" reversed />
          <Message message="구매하고 싶어요" />
          <Message message="ooo 얼마에요?" />
          <Message message="12,000₩이요" reversed />
          <Message message="구매하고 싶어요" />
          <Message message="ooo 얼마에요?" />
          <Message message="12,000₩이요" reversed />
          <Message message="구매하고 싶어요" />
          <Message message="ooo 얼마에요?" />
          <Message message="12,000₩이요" reversed />
          <Message message="구매하고 싶어요" />
          <Message message="ooo 얼마에요?" />
          <Message message="12,000₩이요" reversed />
          <Message message="구매하고 싶어요" />
        </div>
        <form className="fixed w-full mx-auto bottom-3 inset-x-0 max-w-xl">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 pr-12        
          focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className=" absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white 
            hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Stream;
