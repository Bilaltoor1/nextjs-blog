import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }) => {
  return (
    <div className='w-full grid justify-items-start p-4 border border-gray-200 border-opacity-25 rounded-md shadow-md bg-black bg-opacity-25'>
      <div className='relative w-full h-60 rounded-md overflow-hidden'>
        <Image src={post.imageurl} alt={post.title} width={300} height={200} className='w-full object-cover h-full absolute' />
      </div>
      <Badge className='my-2 bg-gradient-to-r from-fuchsia-500 to-pink-500'>{post.category}</Badge>
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      <p className='text-gray-500 mb-2'>
        {post.content.length > 30 ? post.content.substring(0, 50) + '...' : post.content}
      </p>
      <Link className="bg-gradient-to-r py-2 text-sm px-4 from-fuchsia-500 to-pink-500 rounded-full font-bold mt-4 " href={`/posts/${post._id}`}>Read More</Link>
    </div>
  )
}

export default BlogCard