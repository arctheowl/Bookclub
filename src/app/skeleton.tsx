
export default function Skeleton() {
  let i = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,]
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-8 md:gap-y-8 p-10 bg-[#e3e2de]">
        {i.map((item) => (

          <div className="col-span-1 border-gray-600 h-48 w-full relative block rounded-lg border-2 border-dashed p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" key={item} />
        ))}
      </div>
    </> 
  );
}
