import { remark } from "remark"
import html from "remark-html"
import { useEffect, useState } from "react"

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const [htmlContent, setHtmlContent] = useState("")

  useEffect(() => {
    async function convertMarkdown() {
      const file = await remark().use(html).process(post.content)
      setHtmlContent(file.toString())
    }
    convertMarkdown()
  }, [post.content])

  return (
    <Layout>
      <article>
        {/* ... */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </Layout>
  )
}
