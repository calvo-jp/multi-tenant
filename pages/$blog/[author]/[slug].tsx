import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import IPost from "types/post";
import mockPost from "utils/mock-post";

type Props = {
  data: IPost;
};

type Params = {
  author: string;
  slug: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  /* 💡 access author and slug */
  console.log(params);

  const data = mockPost();

  return { props: { data } };
};

export default function Posts({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <header className="py-4 px-6">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 transition-colors duration-300 hover:text-sky-700"
        >
          <ArrowLongLeftIcon className="h-5 w-5" />
          Go back
        </Link>
      </header>

      <main className="p-8 lg:p-16">
        <div className="mx-auto max-w-[690px]">
          <h1 className="text-center font-serif text-4xl font-bold">{data.title}</h1>

          <div className="flex justify-center">
            <div className="mt-6 flex items-center gap-4">
              <div className="h-[48px] w-[48px] shrink-0 grow-0 overflow-hidden rounded-full">
                <Image src={data.author.avatar} alt="" width={48} height={48} />
              </div>
              <div>
                <h2 className="text-lg font-semibold leading-[1.15] text-neutral-800">
                  {data.author.name}
                </h2>
                <p className="text-sm leading-[1.15] text-neutral-700">{data.author.email}</p>
              </div>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 mt-12">
            <Image src={data.cover} alt="" width={1000} height={600} />
          </div>
          <div
            className="markdown markdown-neutral mt-12 max-w-[unset] markdown-headings:font-serif markdown-h1:max-w-[unset] markdown-code:text-neutral-800 markdown-pre:bg-neutral-200 lg:markdown-lg"
            dangerouslySetInnerHTML={{
              __html: data.body.html,
            }}
          />
        </div>
      </main>
    </>
  );
}
