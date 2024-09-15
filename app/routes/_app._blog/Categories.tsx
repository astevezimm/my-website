import {Link} from '@remix-run/react'

type Category = {
  category: string;
  category_slug: string;
}

export default function Categories({categories}: {categories: Category[]}) {
  return (
    <>
      <h2>Categories</h2>
      <ul>
        {categories.map(({category, category_slug}) => (
          <li key={category_slug}>
            <Link to={`/categories/${category_slug}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
