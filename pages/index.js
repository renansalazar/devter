import Head from 'next/head'
import Link from 'next/link'

import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DevTer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className="title">
          DevTer
        </h1>
        <nav>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav>
      </AppLayout>
      
      <style jsx>{`
        h1{
          color: red;
        },
      `}</style>

    </div>
  )
}
