import useRecipeStore from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = ({ recipeId }) => {
  const recipes = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === +recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(
    recipes && recipes.title ? recipes.title : ""
  );
  const [description, setDescription] = useState(
    recipes && recipes.description ? recipes.description : ""
  );

  const handleUpdate = (event) => {
    event.preventDefault();
    updateRecipe({ id: +recipeId, title, description });
  };

  return (
    <form
      onSubmit={handleUpdate}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;