import dynamic from 'next/dynamic'

export default function Page({ params }: any) {
  const Mdx = dynamic(() => import(`./${params.mdx}.mdx`))
  return <Mdx />
}
