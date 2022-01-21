import React, {useState} from 'react';
import { Accordion, Button, ListGroup, Panel } from 'react-bootstrap';


const Recipes= (props) => {

   const handleDelete = (recipe) => {
        props.onDeleteRecipe(recipe)
    }

    const handleEdit = (recipe) => {
        props.onEditRecipe(recipe)
    }



    


    return (
        <>
        <Accordion id="recipeBook">
            {props.recipeBook.map((recipe, key) => {
                return (
                    <Panel headre={recipe.title} eventKey={recipe.key} collapsible={true}>
                        <ListGroup>
                            {recipe.ingredients.split(",").map(item => {
                                 return(
                                    <li className="list-group-item">{item}</li>
                                  );
                            })}
                        </ListGroup>
                        <div className="btn-group">
                   <Button className="edit-btn" onClick={() => handleEdit(recipe)}><i className="fa fa-pencil-alt"></i></Button>
                   <Button className="delete-btn" onClick={() => handleDelete(recipe)}><i className="fa fa-trash-alt"></i></Button>
                 </div>
                    </Panel>
                )
            })}

        </Accordion>
        </>
    )
}

export default Recipes