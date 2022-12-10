import { LightBulbIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-[480px] rounded-md border p-8">
          <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-orange-300 to-amber-200 p-4 text-orange-800">
            <LightBulbIcon className="h-14 w-14" />
          </div>

          <p className="mt-10 text-center leading-[1.25] text-neutral-700">
            Nothing is actually here. This is just a demo of how routes work&nbsp;in&nbsp;
            <strong className="whitespace-nowrap">multi-tenant</strong>&nbsp;apps.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="rounded-sm border border-sky-300 py-2 px-4 text-sky-500 outline-none transition-all duration-300 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 focus:border-sky-400 focus:bg-sky-50 focus:text-sky-600"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
