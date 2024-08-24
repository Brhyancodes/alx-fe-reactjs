import { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
  const { favorites, recommendations, generateRecommendations } =
    useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>Recommendations not available at the moment.</p>
      )}
    </div>
  );
};

export default RecommendationList;