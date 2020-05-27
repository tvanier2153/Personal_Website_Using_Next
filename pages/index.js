import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedContentData } from '../lib/content'

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
    <Layout home allContentData={allContentData}>
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
    </Layout>
  )
}