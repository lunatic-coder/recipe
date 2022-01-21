import React, {useEffect, useState} from 'react';
import {Button, Modal, Model} from 'react-bootstrap'

const RecipeBook = () => {
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
      ];

    const [recipeBook, setRecipeBook] =useState(recipe_book)
    const [isEditing, setIsEditing] = useState(false);
    const [show, setShow] = useState(false);
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        localStorage.Item_of_recipe = JSON.stringify(recipeBook);
        localStorage.setItem('Item_of_recipe', JSON.stringify(recipeBook))
    })

    

    const handlClose = () => {
      setShow(false)
    }
 
    const handlAddRecipe =() => {
        setShow(true);
        setIsEditing(false);
        setRecipe({title: '', ingredients: []})
    }

   const handleEditRecipe = (editRecipe) => {
    const updatedRecipe = [...RecipeBook, editRecipe]
       setShow(true);
       isEditing(true);
       setRecipe({updatedRecipe: editRecipe})
   }

    return(
        <>
        <div>
            {recipeBook.map((item, index) => {
               console.log('yy',recipeBook )
                return(
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.ingredients}</p>
                        <button>edit</button>
                        <button>Add</button>
                        </div>
                    
                   
                )
            })}
        </div>
        </>
    )
}

export default RecipeBook


const AddRecipee =(props) => {
  const [input, setInput] = useState()

  const handleInput = (e) => {
    setInput(current => ({
      ...current,
      [e.target.id] : e.target.value
    }))
  }

  const handleEdit= (recipe)=>
  props.handleEditRecipe(recipe)

    return(
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This is the tag</p>
          <input />
          <input />
        </Modal.Body>
        <Button>cancle</Button>
        <Button>save</Button>
        {props.isEditing ? <Button onClick={handleEdit}>Edit</Button> : <Button>save</Button>}


      </Modal>
    )

}