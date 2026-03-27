"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-sm text-gray-500">Đang tải...</span>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">
          Chào, {session.user?.name}
        </span>
        <button 
          onClick={() => signOut()} 
          className="text-sm font-semibold text-red-600 hover:text-red-700"
        >
          Đăng xuất
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => signIn("google")} 
      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
    >
      Đăng nhập
    </button>
  );
}