import { useParams } from "react-router"

// todo: add loader and meta like in _index

export function BlogCategoryPage() {
    const category = useParams().category
    return <>{category}</>
}