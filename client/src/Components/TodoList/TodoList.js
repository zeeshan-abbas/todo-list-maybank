import { useState, useEffect } from 'react';
import {Col, Container, Row, InputGroup, FormControl, Button, ListGroup} from 'react-bootstrap';
import {withHeaderMenu} from '../../Behavior';
import Item from "./Item/Item";
import {showErrorToast, showSuccessToast} from "../../Util";
import {addTodoTask, deleteTodoTask, getTodoList, updateTodoTask} from "../../API";
import Loader from "../Loader/Loader";

const TodoList = () => {

    const [loading, setLoading] = useState(true);
    const [taskText, setTaskText] = useState('');
    const [todoList, setTodoList] = useState([]);

    const sendAPIRequest = async () => {
        const { success, data, error } = await getTodoList();
        if (success) {
            setTodoList(data);
        } else {
            showErrorToast(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        sendAPIRequest();
    }, [])

    const handleAddTask = async () => {
        if (taskText) {
            setLoading(true);
            const params = {
                task: taskText,
                completed: false
            }
            const { success, message, error } = await addTodoTask(params);
            if (success) {
                showSuccessToast(message);
                setTaskText('');
                await sendAPIRequest();
            } else {
                setLoading(false);
                showErrorToast(error);
            }
        } else {
            showErrorToast('Task text is empty');
        }
    }

    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            handleAddTask();
        }
    }

    const handleUpdate = async ({ id, ...data }) => {
        const { success, message, error } = await updateTodoTask(id, data);
        if (success) {
            showSuccessToast(message);
            await sendAPIRequest();
        } else {
            setLoading(false);
            showErrorToast(error);
        }
    }

    const handleDelete = async (id) => {
        setLoading(true);
        const { success, message, error } = await deleteTodoTask(id);
        if (success) {
            showSuccessToast(message);
            await sendAPIRequest();
        } else {
            setLoading(false);
            showErrorToast(error);
        }
    }

    return (
        <Container className={"mt-4"}>
            {loading && <Loader/>}
            <Row className="mt-4">
                <Col><h1>Todos</h1></Col>
            </Row>
            <Row className="mt-4">
                <InputGroup>
                    <FormControl
                        placeholder="Enter Task"
                        aria-label="Enter Task"
                        value={taskText}
                        onChange={e => setTaskText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button
                        variant="outline-secondary"
                        onClick={handleAddTask}
                    >
                        ADD
                    </Button>
                </InputGroup>
            </Row>
            <Row className={"mt-4"}>
                <Col>
                    <ListGroup>
                        {
                            todoList.map(task => (
                                <Item
                                    key={task.id}
                                    onUpdate={handleUpdate}
                                    onDelete={handleDelete}
                                    {...task}
                                />
                            ))
                        }
                        {
                            todoList.length === 0 && <div>No Task Added</div>
                        }
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    )
}

export default withHeaderMenu(TodoList);
