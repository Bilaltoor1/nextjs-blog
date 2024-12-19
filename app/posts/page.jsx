import BlogCard from "../components/BlogCard";

export default async function page () {
const data = await fetch("http://localhost:3000/api/posts");
const posts = await data.json();
  return (
   <div>
       
   </div>
  )
}