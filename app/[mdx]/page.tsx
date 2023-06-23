import dynamic from "next/dynamic"

export default function Page({ params }: any) {
  const Mdx = dynamic(
    () => import(`./${params.mdx ? params.mdx : "index"}.mdx`)
  )
  return <Mdx />
}
