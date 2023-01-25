import { Description } from "../data/description";

export default function Head() {
  return (
    <>
      <title>Fleet Bookclub</title>
      <meta name="viewport" content={Description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
