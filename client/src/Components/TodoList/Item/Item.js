import { useState } from 'react';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

import './Item.scss';
import {showErrorToast} from "../../../Util";

const Item = ({id, task, completed, onUpdate, onDelete}) => {
    const [taskText, setTaskTest] = useState(task);
    const [editing, setEditing] = useState(false);
    const handleEditSave = () => {
        if (taskText) {
            onUpdate({id, task: taskText, completed});
            setEditing(!editing);
        } else {
            showErrorToast('Task text is empty');
        }
    }
    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleEditSave();
        }
    }
    const handleEditCancel = () => {
        setTaskTest(task);
        setEditing(!editing);
    }
    const handleEditChange = () => {
        setEditing(!editing);
    }
    const handleDelete = () => {
        onDelete(id)
    }
    return (
        <ListGroup.Item className={"item d-flex align-items-center"}>
            {
                editing ?
                    <InputGroup>
                        <FormControl
                            placeholder="Update Task"
                            value={taskText}
                            onChange={e => setTaskTest(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button variant="outline-secondary" onClick={handleEditSave}>Update</Button>
                        <Button variant="outline-secondary" onClick={handleEditCancel}>Cancel</Button>
                    </InputGroup>
                    :
                    <>
                        <span
                            className={`gap-3 flex-grow-1 ${completed ? 'completed' : ''}`}
                            onClick={() => onUpdate({id, task, completed: !completed})}
                        >
                            {task}
                        </span>
                        <Pencil className={'icon'} onClick={handleEditChange} />
                        <Trash className={'icon'} onClick={handleDelete} />
                    </>
            }

        </ListGroup.Item>
    )
}

export default Item;
