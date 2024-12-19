import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EditDeleteButton from './EditDeleteButton'

const page = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const { post } = await res.json();

    return (
        <div className='w-full h-full py-6'>
            <div className='relative w-full h-[400px] rounded-md overflow-hidden'>
                <Image src={post.imageurl} alt='blog' width={1000} height={400} className='w-full object-contains object-center absolute' />
            </div>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-bold text-2xl'>
                    {post.title}
                </h1>
               <EditDeleteButton id={post._id} />
            </div>

            <Badge className="bg-gradient-to-r from-blue-600 to-violet-600">{post.category}</Badge>
            <p className='my-4'>
                {post.content}
            </p>
            <h4 className='mt-4'>Write a Comment here : </h4>
            <div className='my-4'>
                <Textarea placeholder="write comment" className="bg-black bg-opacity-20 outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full px-4 text-sm mt-4">Create</Button>
            </div>
            <h4 className='font-bold my-4'>Comments</h4>
            <div className='flex flex-col gap-4'>
                <div className='bg-black bg-opacity-20 p-4 rounded-md'>
                    <h4 className='font-bold'>Bilal Toor</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente distinctio dolorum illo autem saepe illum libero aliquam inventore cum quasi hic nostrum provident, maxime explicabo ipsam, sunt, vel rerum!</p>
                </div>
            </div>
        </div>
    )
}

export default page