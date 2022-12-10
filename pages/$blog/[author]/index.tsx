import { useRouter } from "next/router";

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
