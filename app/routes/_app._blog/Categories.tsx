export default function Categories({categories}: {categories: string[]}) {
  return (
    <>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}
