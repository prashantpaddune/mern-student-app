import  Form  from '../form/form.component';
import {useSelector, useDispatch} from 'react-redux';
import {deleteStudent} from '../../redux/form/form.action';



const FormInput = ({currentId, setCurrentId}) => {
    const value = useSelector((state) => state.form);
    const dispatch = useDispatch();
    // console.log(value);
    return (
        <div className="container-fluid py-5 p-5">
            <div className="row">
                <div className="col-md-5">
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
                <div className="col-md-7">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Marital Status</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            !value.length? null:
                            value.map((input, index) => (
                                <tr key={input._id}>
                                    <th scope="row" >{ index + 1}</th>
                                    <td>{input.firstName}</td>
                                    <td>{input.lastName}</td>
                                    <td>{input.qualification}</td>
                                    <td>{input.dateOfBirth}</td>
                                    <td>{input.maritalStatus}</td>
                                    <td>{input.selectedRadio}</td>
                                    <td>
                                        <button onClick={() => {
                                            setCurrentId(input._id)
                                        }} className="btn btn-success">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(deleteStudent(input._id))
                                        }} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    
}

export default FormInput;
