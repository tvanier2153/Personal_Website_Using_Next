import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllContentIds, getContentData, getSortedContentData } from '../../lib/content'
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
  const allContentData = getSortedContentData()
  return {
    props: {
      contentData,
      allContentData
    }
  }
}  

export default function Content({ contentData, allContentData }) {
  return (
    <Layout allContentData={allContentData}>
      <Head>
        <title>{contentData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{contentData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
      </article>
    </Layout>
  )
}