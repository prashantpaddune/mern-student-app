import axiosService from '../services/AxiosService';
const { studentAxios } = axiosService;

export const fetchStudents = () => studentAxios.get('/');
export const createStudent = (student) => studentAxios.post('/', student);
export const updateStudent = (id, updatedStudent) => studentAxios.patch(`/${id}`, updatedStudent);
export const deleteStudent = (id) => studentAxios.delete(`/${id}`);
