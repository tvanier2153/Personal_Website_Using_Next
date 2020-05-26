import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import { getAllInfoIds, getInfoData } from '../../lib/info'
import utilStyles from '../../styles/utils.module.css' 

export async function getStaticPaths() {
  const paths = getAllInfoIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const infoData = await getInfoData(params.id)
  return {
    props: {
      infoData
    }
  }
}  

export default function Info({ infoData }) {
  return (
    <Layout>
      <Head>
        <title>{infoData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{infoData.title}</h1>
        <div className={utilStyles.lightText}>
          Last Updated On: 
          <Date dateString={infoData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: infoData.contentHtml }} />
      </article>
    </Layout>
  )
}