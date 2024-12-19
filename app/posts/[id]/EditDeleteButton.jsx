'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

const EditDeleteButton = ({ id }) => {
    const router = useRouter();
    const deletePost = async () => {
        const confirmed = confirm('Are you sure you want to delete this post?');
        if (!confirmed) return;
    
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          router.push('/');
        }
      };
    const updatePost = async () => {
        router.push(`/posts/edit/${id}`);
    }

    return (
        <div className='flex gap-2'>
            <Button onClick={deletePost} className="bg-gradient-to-r from-red-500 to-orange-500  px-4 text-sm">Delete</Button>
            <Button onClick={()=>updatePost()} className="bg-gradient-to-r from-blue-600 to-violet-600 px-4 text-sm">Edit</Button>
        </div>
    )
}

export default EditDeleteButton