import React, { useState, useEffect } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddRecipe from "./AddRecipe";
import Recipes from "./Recipes";

const recipe_book = [
    {
      title: "Pho",
      ingredients: "Beef bones, Rice noodles, Onion, Star anise, Ginger",
      key: 0,
    },
    {
      title: "Vietnamese Spicy Beef Noodle Soup (Bun Bo Hue)",
      ingredients: "Beef bones, Minced garlic, Minced lemongras, Shrimp paste",
      key: 1,
    },
    {
      title: "Bun Rieu Cua",
      ingredients:
        "Paddy crabs,Tomatoes, Onion, Eggs,  Perilla, Rice vermicelli",
      key: 2,
    },
  ],
  RecipeBook = () => {
    const [recipeBook, setRecipeBook] = useState(recipe_book);
    const [isEditing, setIsEditing] = useState(false);
    const [show, setShow] = useState(false);
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
      localStorage.trangtran_recipeBook = JSON.stringify(recipeBook);
      localStorage.setItem("trangtran_recipeBook", JSON.stringify(recipeBook));
    }, [recipeBook]);

    const handleAddNewRecipe = () => {
      setIsEditing(false);
      setShow(true);
      setRecipe({ title: "", ingredients: [] });
    };

    const showModel = () => {
      setShow(true);
    };

    const hideModel = () => {
      setShow(false);
      isEditing(false);
    };

    const onAddNewRecipe = (recipe) => {
      let newRecipeBook = [...RecipeBook, recipe];
      setRecipeBook({ RecipeBook: newRecipeBook });
      setShow(false);
      isEditing(false);
    };

    const onEditRecipe = (editrecipe) => {
      setShow(true);
      isEditing(true);
      setRecipe(editrecipe);
    };

    const onSaveEditedRcipe = (editedRecipe) => {
      let updatedRecipeBook = [...RecipeBook];
      updatedRecipeBook.map((recipe) => {
        if (recipe.key === editedRecipe.key) {
          recipe.ingredients = editedRecipe.ingredients;
          recipe.title = editedRecipe.title;
        }
      });
      setRecipeBook(updatedRecipeBook);
      isEditing(false);
      setShow(false)
    };

    const onDeleteRecipe = (recipe)=> {
        var isConfirmed = window.confirm(" Are you sure you want to delete your secret recipe ?");
        if(isConfirmed){
            var updatedRecipeBook = recipeBook.filter((item, index) => {
                return recipe !== item
            })
        }

        if(isConfirmed){
            setRecipeBook(updatedRecipeBook)
        }
    }



    return <>
    <div className="recipe-wrapper">
        <h1 className="title">Recipe book</h1>
        <div className="utensils-icon"><i className="fa fa-utensils"></i></div>
        <Recipes recipeBook={recipeBook} onEditRecipe={onEditRecipe} onDeleteRecipe={onDeleteRecipe}/>
        <ButtonToolbar>
        <Button onClick={handleAddNewRecipe}><i className="fa fa-plus"></i></Button>
        <AddRecipe onHide={hideModel} show={show} isEditing={isEditing} onAddNewRecipe={onAddNewRecipe} onSaveEditedRcipe={onSaveEditedRcipe} recipe={recipe}/>
      </ButtonToolbar>
      <div className="image">
          <img src="http://www.pngmart.com/files/4/Cooking-PNG-Image.png" width="20%"/>
      </div>
      <p className="additional-text">Enjoy your cooking secret!</p>
      </div>
        
    
    </>;
  };

export default RecipeBook;
