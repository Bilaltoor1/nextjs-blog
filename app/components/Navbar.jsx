import React from 'react';
import Link from "next/link";
import { BookOpenIcon, SquarePen } from 'lucide-react';

function Navbar() {
    return (
        <div className='flex w-full justify-between'>
            <Link href='/' className='font-bold  flex items-center gap-2'>
                <span className='text-xl font-Nunito'>KNOWLEDGE GATE</span>
                <BookOpenIcon size='24' />
            </Link>
            <Link href="/posts/create">
                <SquarePen size='24' />
            </Link>
        </div>
    );
}

export default Navbar;