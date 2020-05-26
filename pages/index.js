import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedInfoData } from '../lib/info'
import Link from 'next/link'

export async function getStaticProps() {
  const allInfoData = getSortedInfoData()
  return {
    props: {
      allInfoData
    }
  }
}

export default function Home({ allInfoData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, My name is Tommy Vanier. I'm currently a Software Engineer
          at Cerner Corporation in the Greater Phladelphia Area. Doop doop
          bloopidy doop.
        </p>  
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allInfoData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/info/[id]" as={`/info/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}