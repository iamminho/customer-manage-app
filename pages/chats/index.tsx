import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout title="대화" hasTabBar>
      <div className="pb-16 divide-y-[1px]">
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1,
        ].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <div className="flex cursor-pointer py-3 px-4 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="font-medium text-gray-700">오리</p>
                <p className="text-xs font-medium text-gray-500">
                  내일 2시에 사거리에서 봐요
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
