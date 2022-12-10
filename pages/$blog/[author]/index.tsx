import { faker } from "@faker-js/faker";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import Badge from "components/badge";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import IPost from "types/post";
import IUser from "types/user";
import mockPost from "utils/mock-post";
import mockUser from "utils/mock-user";

type Props = {
  author: IUser;
  posts: IPost[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const author = mockUser();
  const posts = new Array(
    faker.datatype.number({
      min: 2,
      max: 6,
      precision: 2,
    }),
  )
    .fill(null)
    .map(() => mockPost({ author }));

  return {
    props: {
      author,
      posts,
    },
  };
};

export default function Profile({ posts, author }: Props) {
  return (
    <>
      <Head>
        <title>{author.name}&rsquo;s Blog</title>
      </Head>

      <header className="py-4 px-6">
        <a
          href="http://localhost:5000"
          className="flex w-fit items-center gap-2 transition-colors duration-300 hover:text-sky-700"
        >
          <ArrowLongLeftIcon className="h-5 w-5" />
          Go back
        </a>
      </header>

      <main className="p-16">
        <div className="mx-auto max-w-[690px]">
          <Author data={author} />
          <Posts data={posts} />
        </div>
      </main>
    </>
  );
}

function Posts({ data }: { data: IPost[] }) {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-2">
        <h1 className="font-serif text-2xl font-bold tracking-[0.015em] text-neutral-800">Posts</h1>
        <Badge>{data.length}</Badge>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-8">
        {data.map(({ id, slug, title, cover, author }) => (
          <a key={id} href={`http://${author.username}.localhost:5000/${slug}`} className="block">
            <div className="aspect-w-16 aspect-h-9">
              <Image src={cover} alt="" width={600} height={600} />
            </div>

            <h2 className="mt-1 text-lg text-neutral-800 line-clamp-1">{title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

function Author({ data }: { data: IUser }) {
  return (
    <div className="flex items-center gap-4">
      <div className="overflow-hidden rounded-full">
        <Image src={data.avatar} alt={data.name} width={100} height={100} />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-neutral-800">{data.name}</h1>
        <p className="text-neutral-700">{data.email}</p>
      </div>
    </div>
  );
}
