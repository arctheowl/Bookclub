import { Description } from "../data/description";

export default function Head() {
  return (
    <>
      <title>Fleet Bookclub</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" content={Description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
