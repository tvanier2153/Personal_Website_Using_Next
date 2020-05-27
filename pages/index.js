import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedContentData } from '../lib/content'
import Link from 'next/link'

export async function getStaticProps() {
  const allContentData = getSortedContentData()
  return {
    props: {
      allContentData
    }
  }
}

export default function Home({ allContentData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, My name is Tommy Vanier. I'm currently a Software Engineer
          at Cerner Corporation based in the Greater Phladelphia Area. Doop doop
          bloopidy doop.
        </p>  
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allContentData.map(({ id, linkTitle }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/content/[id]" as={`/content/${id}`}>
                <a>{linkTitle}</a>
              </Link>
            </li>
          ))}
          <li className={utilStyles.listItem}>
              <Link href="/resume.pdf">
                <a>Resume</a>
              </Link>
            </li>
        </ul>
      </section>
    </Layout>
  )
}