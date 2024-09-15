import {NavLink} from '@remix-run/react'

type Category = {
  category: string;
  category_slug: string;
}

export default function Categories({categories}: {categories: Category[]}) {
  return (
    <>
      <h2 className='cat-heading'>Categories:</h2>
      <nav className='categories'>
        {categories.map(({category, category_slug}) => (
          <li key={category_slug}>
            <NavLink to={`/categories/${category_slug}`}>
              {category}
            </NavLink>
          </li>
        ))}
      </nav>
    </>
  );
}
