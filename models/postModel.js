import mongoose , {Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;