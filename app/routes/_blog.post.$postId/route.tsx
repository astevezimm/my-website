import { useParams } from "react-router"

// todo: add loader and meta like in _index

export function BlogPostPage() {
    const postId = useParams().postId
    return <>{postId}</>
}