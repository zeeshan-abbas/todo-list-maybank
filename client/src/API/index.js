import axios from 'axios';

export const SERVER_URL = `http://localhost:3001`;

const BASE_URL = `${SERVER_URL}/api/`;

const getInstance = (Authorization) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            ...(Authorization ? {Authorization} : {}),
        },
    });
}

const handleResponse = ({status, data}) => {
    if (status >= 200 && status < 300) {
        return {success: true, data: data.payload, message: data.message};
    }
    return {success: false, error: 'Unexpected error occurred. Please retry!'};
}

const handleErrorResponse = ({request, response, message}) => {
    if (response) {
        return {success: false, error: response?.data?.message || 'Unable to send request. Try again later!'};
    } else if (request) {
        return {success: false, error: 'Unable to send request. Try again later!'};
    } else {
        return {success: false, error: message};
    }
}

export async function getTodoList() {
    try {
        const res = await getInstance().get('/todo');
        return handleResponse(res);
    } catch (error) {
        return handleErrorResponse(error)
    }
}

export async function addTodoTask(params) {
    try {
        const res = await getInstance().post('/todo', params);
        return handleResponse(res);
    } catch (error) {
        return handleErrorResponse(error)
    }
}

export async function updateTodoTask(id, params) {
    try {
        const res = await getInstance().put(`/todo/${id}`, params );
        return handleResponse(res);
    } catch (error) {
        return handleErrorResponse(error)
    }
}

export async function deleteTodoTask(id) {
    try {
        const res = await getInstance().delete(`/todo/${id}`);
        return handleResponse(res);
    } catch (error) {
        return handleErrorResponse(error)
    }
}
