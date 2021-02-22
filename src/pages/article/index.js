import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as ArticleService from '@modules/article/services'
export { default } from '@components/_pages/article/ArticlePage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData({ query }) {
  const articleList = await ArticleService.getArticles()

  return {
    props: { articleList },
  }
}
