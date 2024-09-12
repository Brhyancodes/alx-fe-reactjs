import { useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  //   const details = data.find((recipe) => recipe.id === +id);

  useEffect(() => {
    const recipeDetails = data.find((recipe) => recipe.id === +id);
    setRecipe(recipeDetails);
  }, [id]);

  return (
    <div
      key={recipe.id}
      className="bg-neutral-50 rounded mx-auto mt-10  w-8/12 shadow-md"
    >
      <img src={recipe.image} alt={recipe.title} className="m-auto py-5" />
      <h1 className="font-bold text-yellow-600 mx-2 text-lg">{recipe.title}</h1>
      <h3 className="font-semibold ml-5 mt-2">Ingredients:</h3>
      <p className="font-light ml-6">{recipe.ingredients}</p>
      <h3 className="font-semibold ml-5">Instructions:</h3>
      <p className="font-light ml-6 pb-5 ">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;