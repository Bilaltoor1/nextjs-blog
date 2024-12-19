'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')

    const createPost = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content, imageUrl, category }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
         await res.json()
    }
  
    return (
        <div>
            <h1 className='font-bold text-2xl mt-4'>Posts Create</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">Title</Label>
                    <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title here ..." className="bg-black bg-opacity-25 focus-visible:ring-offset-0 focus-visible:ring-0 border-none outline-none"></Input>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">description</Label>
                    <Input onChange={(e) => setContent(e.target.value)} type="text" placeholder="Enter description here ..." className="bg-black bg-opacity-25 focus-visible:ring-offset-0 focus-visible:ring-0 border-none outline-none"></Input>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">Image URL</Label>
                    <Input onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder="Enter image url here ..." className="bg-black bg-opacity-25 focus-visible:ring-offset-0 focus-visible:ring-0 border-none outline-none"></Input>
                </div>
                <select className="bg-black bg-opacity-25 text-white p-2 rounded-md border-none" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Sports">Sports</option>
                    <option value="Education">Education</option>
                    <option value="Weather">Weather</option>
                </select>
                <Button className="bg-white text-black w-fit hover:bg-white hover:text-black" onClick={async () => await createPost()}>Create Post</Button>
            </div>
        </div>
    )
}

export default page