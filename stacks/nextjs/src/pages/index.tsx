import type { NextPage } from "next"
import Head from "next/head";

const render: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div>
          <h1>hello world</h1>
        </div>
      </main>
    </>
  )
}

export default render;