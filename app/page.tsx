import dynamic from "next/dynamic"
import Prose from "./prose"

export default function Page() {
  const Mdx = dynamic(() => import("./[mdx]/README.mdx"))
  return (
    <Prose>
      <Mdx />
    </Prose>
  )
}
