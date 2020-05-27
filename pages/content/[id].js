import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import { getAllContentIds, getContentData } from '../../lib/content'
import utilStyles from '../../styles/utils.module.css' 

export async function getStaticPaths() {
  const paths = getAllContentIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const contentData = await getContentData(params.id)
  return {
    props: {
      contentData
    }
  }
}  

export default function Content({ contentData }) {
  return (
    <Layout>
      <Head>
        <title>{contentData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{contentData.title}</h1>
        <div className={utilStyles.lightText}>
          Last Updated On: 
          <Date dateString={contentData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
      </article>
    </Layout>
  )
}