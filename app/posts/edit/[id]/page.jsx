'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const EditPostPage = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    console.log(id);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const res = await fetch(`http://localhost:3000/api/posts/${id}`);
                const {post} = await res.json();
                console.log(post);
                setTitle(post.title);
                setContent(post.content);
                setImageUrl(post.imageurl);
                setCategory(post.category);
            };
            fetchPost();
        }
    }, [id]);

    const updatePost = async () => {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content, imageUrl, category }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            router.push('/posts');
        }
    };

    return (
        <div>
            <h1 className='font-bold text-2xl mt-4'>Edit Post</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">Title</Label>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter title here ..."
                        className="bg-black bg-opacity-25 focus-visible:ring-0 border-none"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">Description</Label>
                    <Input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        placeholder="Enter description here ..."
                        className="bg-black bg-opacity-25 focus-visible:ring-0 border-none"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className="text-base font-semibold">Image URL</Label>
                    <Input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        type="text"
                        placeholder="Enter image url here ..."
                        className="bg-black bg-opacity-25 focus-visible:ring-0 border-none"
                    />
                </div>
                <select
                    className="bg-black bg-opacity-25 text-white p-2 rounded-md border-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Sports">Sports</option>
                    <option value="Education">Education</option>
                    <option value="Weather">Weather</option>
                </select>
                <Button
                    className="bg-white text-black w-fit hover:bg-white"
                    onClick={updatePost}
                >
                    Update Post
                </Button>
            </div>
        </div>
    );
};

export default EditPostPage;