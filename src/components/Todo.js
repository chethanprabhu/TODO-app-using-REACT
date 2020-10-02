import React from 'react'
import { List, ListItem, ListItemText} from  "@material-ui/core";
import firebaseDB from "../firebase";

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo}/>
            </ListItem>
            <button onClick={(e) => firebaseDB.collection('to-do').doc(props.todo.id).delete()}>DELETE ME</button>
        </List>
    )
}

export default Todo
