import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  let { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === +recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <DeleteRecipeButton recipeId={recipeId} />
        <EditRecipeForm recipeId={recipeId} />
      </div>
    </div>
  );
};

export default RecipeDetails;