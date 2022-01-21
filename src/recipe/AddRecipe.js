import React, {useState, useMemo} from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddRecipe =(props) => {

    const [data, setData] =useState()

    const onSaveEditedRcipee = (recipe) => {
        props.onSaveEditedRcipe(recipe)
    }

    const onAddNewRecipee = (recipe) => {
        props.onAddNewRecipe(recipe)
    }

    useMemo(() => {
        if(props.recipe !== undefined && props.recipe.title !== undefined){
           props.setRecipe({title: props.recipe.title, ingredients: props.recipe.ingredients})
        }
    }, [props])

        
   const handleChange = (e) => { 
        setData(current => ({
            ...current,
            [e.target.id] : e.target.value
        }))
          
      }
        



    return(
        <>
          
         <Modal show={props.show} onHide={props.onHide} dialogClassName="custom-modal">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-lg">Add new recipe</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <form>
             <input id="title" id="title" value={props.title} onChange={handleChange} placeholder="Enter recipe name" /><br />
             <textarea id="ingredients" id="ingredients" value={props.ingredients} onChange={handleChange} placeholder="Add ingredients, separated by commas..." />
           </form>
         </Modal.Body>
         <Modal.Footer>
{         props.isEditing ? ( <Button onClick={() => this.onSaveEditedRcipee(props.recipe)}><i className="fa fa-check"></i></Button>) : (<Button onClick={() => this.onAddNewRecipee(props.recipe)}><i className="fa fa-plus"></i></Button>)}
         </Modal.Footer>
       </Modal>

        </>
    )
}

export default AddRecipe