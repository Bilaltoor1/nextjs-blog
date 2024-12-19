import BlogCard from "./components/BlogCard";
export default async function page() {
  const res = await fetch('http://localhost:3000/api/posts'); 
  const data = await res.json();
  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-3xl font-bold ">Blogs</h1>
        <p>Total ( {data.posts.length} )</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 ">
        {data.posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </>
  )
};