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
          <NavLink key={category_slug} to={`/categories/${category_slug}`}>
            {category}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
