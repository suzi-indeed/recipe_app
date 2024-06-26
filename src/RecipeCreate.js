import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

  // V TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // V TODO: Add the required input and textarea form elements.
  // V TODO: Add the required submit and change handlers.

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation
    };
    //console.log(recipes);
    setRecipes([
      ...recipes,
      newRecipe
    ]);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" id="name" name="name" placeholder="Name" onChange={(event) => setName(event.target.value)}></input>
            </td>
            <td>
              <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)}></input>
            </td>
            <td>
              <input type="url" id="url" name="photo" placeholder="URL" onChange={(event) => setPhoto(event.target.value)}></input>
            </td>
            <td>
              <textarea type="text" id="ingredients" name="ingredients" placeholder="Ingredients" onChange={(event) => setIngredients(event.target.value)}></textarea>
            </td>
            <td>
              <textarea type="text" id="preparation" name="preparation" placeholder="Preparation" onChange={(event) => setPreparation(event.target.value)}></textarea>
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );

}

export default RecipeCreate;


// name: "Tuna Poke with Mango",
// cuisine: "Hawaiian",
// photo: "https://www.foodista.com/sites/default/files/styles/recype/public/tunapokebowlwithmango22.jpg",
// ingredients: "1 package of sushi grade tuna. 1 cup cooked quinoa ½ avocado, sliced. ½ mango, cubed. 1 shredded carrot. 1 small sliced cucumber. poke sauce.",
// preparation: "1.