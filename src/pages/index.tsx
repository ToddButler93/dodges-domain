import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const {data} = api.post.getAll.useQuery();

  console.log(data);

  return (
    <>
      <Head>
        <title>Dodges Domain</title>
        <meta name="description" content="Dodges Domain, the output of his small brain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-zinc-900">
        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </div>
    </>
  );
}
