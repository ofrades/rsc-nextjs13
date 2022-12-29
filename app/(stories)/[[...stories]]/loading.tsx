export default async function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-violet-500 p-3">
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading...
      </div>
    </div>
  )
}
