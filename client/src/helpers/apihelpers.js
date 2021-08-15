import axiosService from '../services/AxiosService';
const { studentAxios } = axiosService;

export const fetchInputs = () => studentAxios.get('/');
export const createInput = (newInput) => studentAxios.post('/', newInput);
export const updateInput = (id, updatedInput) => studentAxios.patch(`/${id}`, updatedInput);
export const deleteInput = (id) => studentAxios.delete(`/${id}`);
