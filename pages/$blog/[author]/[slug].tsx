import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import IPost from "types/post";
import IUser from "types/user";
import mockPost from "utils/mock-post";
import mockUser from "utils/mock-user";

type Props = {
  author: IUser;
  post: IPost;
};

type Params = {
  author: string;
  slug: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  /* 💡 access author and slug */
  console.log(params);

  const author = mockUser();
  const post = mockPost({ author });

  return { props: { author, post } };
};

export default function Posts() {
  const router = useRouter();

  return (
    <div className="p-4">
      <pre>
        <code>{JSON.stringify(router.query, null, 2)}</code>
      </pre>
    </div>
  );
}
