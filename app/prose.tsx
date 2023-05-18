export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose m-2 mx-auto max-w-[50rem] p-2 dark:prose-invert prose-img:mx-auto prose-img:max-h-[20rem]">
      {children}
      <div className="p-4 pt-4"></div>
    </article>
  )
}
