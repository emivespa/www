export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article
      className="
      prose
      m-2
      mx-auto
      max-w-[50rem]
      p-2
      dark:prose-invert
      prose-p:text-canvastext
      prose-code:font-normal
      prose-code:text-canvastext
      prose-code:before:content-['']
      prose-code:after:content-['']
      prose-code:bg-buttonface
      prose-pre:bg-buttonface
      prose-pre:text-canvastext
      prose-li:text-canvastext
      prose-img:mx-auto
      prose-img:max-h-[20rem]
      "
    >
      {children}
    </article>
  )
}
