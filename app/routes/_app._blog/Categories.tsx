import {NavLink} from '@remix-run/react'

type Category = {
  category: string;
  cat_url: string;
}

export default function Categories({categories}: {categories: Category[]}) {
  return (
    <>
      <h2 className='cat-heading'>Categories:</h2>
      <nav className='categories'>
        {categories.map(({category, cat_url}) => (
          <NavLink key={cat_url} to={`/categories/${cat_url}`}>
            {category}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
