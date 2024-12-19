import connectDB from "@/lib/database"
import Post from "@/models/postModel"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    const { id } = await params
    const { title, content } = await request.json()
    await connectDB()
    const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true })
    return NextResponse.json({
        message: "Post updated successfully",
        post: post
    })
}

export async function GET(request, { params }) {
    const {id} = await params
    await connectDB()
    const post = await Post.findById(id)
    return NextResponse.json({
        post: post
    })
}
export async function DELETE(request, { params }) {
    const { id } = params;
    try {
      await connectDB();
      await Post.findByIdAndDelete(id);
      return NextResponse.json({
        message: "Post deleted successfully",
      });
    } catch (error) {
      return NextResponse.json({ error: 'Error deleting post' }, { status: 500 });
    }
  }