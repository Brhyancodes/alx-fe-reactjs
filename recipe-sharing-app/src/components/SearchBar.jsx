import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      style={{ marginBottom: "20px" }}
      type="text"
      placeholder="Search Recipes"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;