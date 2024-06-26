import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  // V TODO: Display the list of recipes using the structure of table that is provided.
  // V TODO: Create at least one additional component that is used by this component.
  // V TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  // const handleDelete = (event) => {
  //   //console.log(target);
  //   //filter by name the current recepie from the recepies array
  //   console.log("name is ",event.target.name);
  //   let newRecipes = recipes.filter(recipe => recipe.name!==event.target.name);
  //   console.log(newRecipes);
  //   setRecipes(newRecipes);
  // }

  function deleteRecipe(index){
    let newRecipes = recipes.filter((recipe, i) => i!== index);
    setRecipes(newRecipes);
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
            <tr>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo}></img></td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              <td><button name="delete" onClick={()=>deleteRecipe(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
