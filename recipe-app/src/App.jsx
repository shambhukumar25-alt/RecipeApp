
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="recipes/:id"
            element={<RecipeDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;