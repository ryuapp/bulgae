import markdownit from "markdown-it"

const md = markdownit()

export function parseMarkdown(markdown: string): string {
  return md.render(markdown)
}