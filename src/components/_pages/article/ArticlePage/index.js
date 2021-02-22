import { Flex, Box } from '@grid'
import { Page } from '@lib/page'
import Link from '@lib/router/Link'

export default function ArticleListPage({ articleList }) {
  return (
    <Page data={articleList}>
      <Flex>
        {articleList.map(item => {
          return (
            <Link route="article-detail" params={{ id: item.id }} passHref>
              <a css={{ display: 'block', padding: '10px 0' }} href="#">
                {item.title}
              </a>
            </Link>
          )
        })}
      </Flex>
    </Page>
  )
}
