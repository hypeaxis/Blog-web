"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 py-16 sm:px-10">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Sign in</h1>
        <p className="mt-2 text-sm text-gray-600">
          Đăng nhập bằng Google để đồng bộ phiên làm việc qua JWT.
        </p>

        <div className="mt-8 space-y-3">
          <button
            onClick={() => signIn("google", { callbackUrl })}
            disabled={status === "loading"}
            className="w-full rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Đang xử lý..." : "Continue with Google"}
          </button>

          {session?.user?.email ? (
            <p className="text-center text-xs text-gray-500">
              Đang đăng nhập với {session.user.email}
            </p>
          ) : null}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm font-medium text-orange-600 hover:text-orange-700">
            Quay về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}

function LoginFallback() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 py-16 sm:px-10">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Sign in</h1>
        <p className="mt-2 text-sm text-gray-600">Đang tải thông tin đăng nhập...</p>
      </section>
    </main>
  );
}
