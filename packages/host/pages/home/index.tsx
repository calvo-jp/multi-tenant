import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import client from "../../config/client";
import { GetAppsDocument } from "../../graphql/queries";
import styles from "../../styles/home.module.css";
import IApp from "../../types/app";

type Props = {
  data: IApp[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { apps } = await client.request<{ apps: IApp[] }>(GetAppsDocument);

  return { props: { data: apps } };
};

export default function AppsPage({ data }: Props) {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Apps</h1>
          <div className={styles.badge}>{data.length}</div>
        </div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {data.map(({ id, name, cover, description, slug }) => (
              <li className={styles.listItem} key={id}>
                <div className={styles.listItemImage}>
                  <Image
                    src={cover.url}
                    alt={name}
                    width={cover.width}
                    height={cover.height}
                    draggable={false}
                  />
                </div>

                <h2>{name}</h2>
                <p>{description}</p>

                <a href={`http://${slug}.localhost:3000`} target="_blank" rel="noreferrer">
                  Go to website
                  <ArrowNarrowRightSolidIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function ArrowNarrowRightSolidIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
