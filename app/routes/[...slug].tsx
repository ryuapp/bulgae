import { createRoute } from 'honox/factory'
import { parseMarkdown } from '../markdown'


export default createRoute((c) => {
  const path = c.req.path.slice(1)
  const posts = import.meta.glob('../content/*.md', {
    eager: true,
  })
  const post = posts["../content/"+path+".md"]
  if (!post) {
    return c.render(
      <div>
        <h1>404 Not Found</h1>
      </div>,
      { title: '404 Not Found' }
    )
  }
  const content = parseMarkdown(post.markdown)
  
  return c.render(
    <div>
      <h1>Hello, {path}!</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
})
