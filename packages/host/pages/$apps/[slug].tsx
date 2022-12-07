import { GetServerSideProps } from "next";
import Head from "next/head";
import * as React from "react";
import client from "../../config/client";
import { GetAppDocument } from "../../graphql/queries";
import IApp from "../../types/app";

type Props = {
  data: IApp;
};

type Params = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const { slug } = Object.assign({ slug: "" }, params);

  const { app: data } = await client.request<{ app: IApp }, Params>(GetAppDocument, { slug });

  if (!data) return { notFound: true };

  return { props: { data } };
};

export default function AppPage({ data }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    import("remote/index").then((mod) => {
      if (ref.current) {
        new mod.default({
          target: ref.current,
          props: { data },
        });
      }
    });
  }, [data]);

  return (
    <>
      <Head>
        <title>{data.name}</title>

        {/* <!-- (seo) meta, jsonld, etc... --> */}
      </Head>

      <div ref={ref} />
    </>
  );
}
