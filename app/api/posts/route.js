import connectDB from "@/lib/database";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, content , imageUrl:imageurl ,category } = await request.json();
    await connectDB();
    const post = await Post.create({ title, content , imageurl ,category });
    return NextResponse.json({
        message: "Post created successfully",
        post: post
    })
}

export async function GET() {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json({
        posts: posts
    });
}

export async function DELETE(request) {
 const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({
        message: "Post deleted successfully"
    });
}

