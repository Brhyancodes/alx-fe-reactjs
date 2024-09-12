import data from "../data.json";
import { useState } from "react";

function AddRecipeForm() {
  const [recipes, setRecipes] = useState(data);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!title || !summary || !ingredients || !steps) {
    //   alert("Please fill out all fields");
    // }
    const validate = {};
    if (!title) {
      validate.title = "Title is required";
    }

    if (!summary) {
      validate.summary = "Summary is required";
    }

    if (!ingredients) {
      validate.ingredients = "Ingredients are required";
    }

    if (!steps) {
      validate.steps = "Cooking steps are required";
    }
    setErrors(validate);

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      ingredients,
      instructions,
    };
    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setSummary("");
    setIngredients("");
    setSteps("");
    console.log(newRecipe);
  };

  return (
    <div className="bg-neutral-50 p-3 shadow-lg sm:w-full md:w-1/2 m-auto mt-3 rounded-sm">
      <form
        className="flex flex-col place-items-center gap-5 mt-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter recipe name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-solid border-2 border-yellow-600 rounded-md p-2"
        />
        {errors.title && <span className="text-red-600">{errors.title}</span>}
        <input
          type="text"
          name="summary"
          id="summary"
          placeholder="Enter recipe summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border-solid border-2 border-yellow-600 rounded-md p-2"
        />
        {errors.summary && (
          <span className="text-red-600">{errors.summary}</span>
        )}
        <textarea
          name="ingredients"
          id="ingredients"
          cols="45"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border-solid border-2 border-yellow-600 rounded-md p-2"
        />
        {errors.ingredients && (
          <span className="text-red-600">{errors.ingredients}</span>
        )}
        <textarea
          name="instructions"
          id="instructions"
          cols="45"
          placeholder="Enter cooking instructions"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border-solid border-2 border-yellow-600 rounded-md p-2"
        />
        {errors.steps && <span className="text-red-600">{errors.steps}</span>}
        <button
          type="submit"
          className="bg-yellow-600 text-neutral-50 rounded-lg p-3 font-bold"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;