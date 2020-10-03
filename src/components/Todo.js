import React, { useState } from 'react'
import { List, ListItem, ListItemText, Modal} from  "@material-ui/core";
import firebaseDB from "../firebase";
import { makeStyles } from '@material-ui/core/styles';

function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };
    
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();

    const handleClose = () => {
        firebaseDB.collection('to-do').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    };

    const onEditHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <React.Fragment>
            <Modal open={open} onClose={handleClose} >
                <div className={classes.paper}>
                    <p>Original TODO: {props.todo.todo}</p>
                    <p>Enter your new TODO below</p>
                    <input value={input} onChange={(e) => onEditHandler(e)}></input>
                    <button onClick={handleClose}>CONFIRM</button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo}/>
                </ListItem>
                <button onClick={(e) => firebaseDB.collection('to-do').doc(props.todo.id).delete()}>DELETE</button>
                <button onClick={handleOpen}>UPDATE</button>
            </List>
        </React.Fragment>
    )
}

export default Todo
