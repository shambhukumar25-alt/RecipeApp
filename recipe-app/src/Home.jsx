
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const recipes = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Pasta" },
    { id: 3, name: "Butter Chicken" },
  ];

  return (
    <div>
      <h2>Find Your Favorite Recipe</h2>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search recipes..."
      />

      <h3>Recipes List</h3>

      {recipes.map((recipe) => (
        <p key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            {recipe.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Home;