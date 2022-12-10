import { faker } from "@faker-js/faker";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import IUser from "types/user";
import mockUser from "utils/mock-user";

type Props = {
  data: IUser[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = new Array(
    faker.datatype.number({
      min: 5,
      max: 10,
    }),
  )
    .fill(null)
    .map(() => mockUser());

  return { props: { data } };
};

export default function Index({ data }: Props) {
  return (
    <>
      <Head>
        <title>Hello, World! 🎉🥳</title>
      </Head>

      <main className="p-16">
        <div className="mx-auto max-w-[690px]">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-[0.025em] text-neutral-800">
              Authors
            </h1>

            <div className="rounded-lg bg-purple-200 py-[2px] px-[4px] text-xs font-semibold leading-[1.15] text-purple-800">
              {data.length}
            </div>
          </div>

          <div className="mt-6">
            <ul className="flex flex-col gap-2">
              {data.map(({ id, name, email, username }) => {
                return (
                  <li key={id}>
                    <a
                      href={`http://${username}.localhost:5000`}
                      className="flex items-center gap-4 rounded-md border border-neutral-200 p-4 outline-none transition-colors duration-300 hover:border-neutral-300 focus:border-sky-200"
                    >
                      <div className="overflow-hidden rounded-full">
                        <Image
                          src={`https://i.pravatar.cc/300?u=${id}`}
                          width={48}
                          height={48}
                          alt=""
                          draggable={false}
                        />
                      </div>

                      <div>
                        <div className="text-xl font-semibold text-neutral-800">{name}</div>
                        <div className="text-sm text-neutral-700">{email}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
