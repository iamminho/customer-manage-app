import { spawn } from "child_process";
import React from "react";
import { cls } from "../libs/utils";

interface LayputProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayputProps) {
  return (
    <div>
      <div
        className="fixed bg-white w-full text-lg text-gray-700 
      border-b top-0 flex items-center justify-center font-medium py-3"
      >
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav
          className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3
        flex justify-between items-center"
        ></nav>
      ) : null}
    </div>
  );
}
