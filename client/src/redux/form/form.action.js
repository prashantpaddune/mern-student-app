import * as api from '../../helpers/apihelpers';

export const fetchStudents = async (dispatch) => {
    try {
        const {data} = await api.fetchStudents();
        //console.log('get', data);
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch(error) {
        console.log(error.message);
    }
}; 

export const createStudent = (input) => async(dispatch) => {
    try {
        const {data} = await api.createStudent(input);
        //console.log('create', data);
        dispatch({type: 'CREATE', payload: data});
    } catch(error) {
        console.log(error);
    }
}

export const updateStudent = (id, input) => async(dispatch) => {
    try {
       const {data} = await api.updateStudent(id, input);
        //console.log('Update', data);
       dispatch({type: 'UPDATE', payload: data});
    } catch(error) {
        console.log(error.message);
    }
}

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id);
        dispatch({type: 'DELETE', payload: id});
    } catch(error) {    
        console.log(error);
    }
}