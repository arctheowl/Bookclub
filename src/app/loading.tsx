import Hero from "../components/v2/Hero";
import Skeleton from "./skeleton";

export default function Loading() {
  return (
  <>
    <div className="h-screen bg-[#e3e2de]">
      <Hero />
      <Skeleton/>
    </div>
    </>
  )
}
