import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecommendationList from "./components/RecommendationsList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
                <FavoritesList />
                <RecommendationList />
              </>
            }
          />
          <Route path="/details/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;