import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteButton = useRecipeStore((state) => state.deleteRecipes);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteButton(+recipeId);
    navigate("/");
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteRecipeButton;