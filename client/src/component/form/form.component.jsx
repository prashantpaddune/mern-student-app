import {useState, useEffect} from 'react';
import './form.styles.scss';

//redux import
import {useDispatch, useSelector} from 'react-redux';
import { createStudent, updateStudent } from '../../redux/form/form.action';


const Form = ({currentId, setCurrentId}) => {
    const input = useSelector((state) => currentId ? state.form.find(input => input._id === currentId): null);
    const [state, setState] = useState({
        firstName: '', 
        lastName: '', 
        qualification: '',
        dateOfBirth: '', 
        maritalStatus: '', 
        selectedRadio: ''
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if(input) setState(input);
    }, [input]);
        
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(currentId) {
            dispatch(updateStudent(currentId, state));
        } else {
            dispatch(createStudent(state));
        }
        
        setState({
            firstName: '', 
            lastName: '', 
            qualification: '',
            dateOfBirth: '', 
            maritalStatus: '', 
            selectedRadio: ''
        });
        setCurrentId(null);
        console.log(state, createStudent);
    }

    const {firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio} = state;
    
    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Register Student</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" noValidate>

                                    <div className="col-md-12">
                                        <input placeholder="Full Name" type='text' name='firstName' className='form-control' value={firstName} onChange={(e) => setState({...state, firstName: e.target.value})} required />
                                            <div className="valid-feedback">Username field is valid!</div>
                                            <div className="invalid-feedback">Username field cannot be blank!</div>
                                    </div>

                                    <div className="col-md-12">
                                        <input placeholder="Last name" type='text' name='lastName' className='form-input' value={lastName} onChange={(e) => setState({...state, lastName: e.target.value})} required />
                                            <div className="valid-feedback">Email field is valid!</div>
                                            <div className="invalid-feedback">Email field cannot be blank!</div>
                                    </div>

                                    <div className="col-md-12">
                                        <select className='form-input mt-3' name='qualification' onChange={(e) => setState({...state, qualification: e.target.value})} value={qualification}>
                                            <option selected disabled value="">Qualification</option>
                                            <option value='BscIt'>BscIt</option>
                                            <option value='BCA'>BCA</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <select className='form-input' name='maritalStatus' onChange={(e) => setState({...state, maritalStatus: e.target.value})} value={maritalStatus}>
                                            <option selected value='' disabled>Marital Status</option>
                                            <option value='Married'>Married</option>
                                            <option value='UnMarried'>UnMarried</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <div className='dropdown mt-3 mx-4'>
                                            <label className='form-input '>DOB: </label>
                                            <input type='date' className='form-input' name='dateOfBirth' onChange={(e) => setState({...state, dateOfBirth: e.target.value})} value={dateOfBirth} />
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-3 mx-4">
                                        <label className='form-input-label'>Hobbies:</label><span className="radio">
                                 <label>
                                     <input
                                         className="mx-1"
                                            type="radio"
                                            value="Reading"
                                            checked={selectedRadio === "Reading"}
                                            onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                            />
                                            Reading
                                        </label>
                                    </span>
                                    <span className="radio">
                                        <label>
                                            <input
                                                className="mx-1"
                                            type="radio"
                                            value="Games"
                                            checked={selectedRadio === "Games"}
                                            onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                            />
                                            Games
                                        </label>
                                    </span>
                                    <span className="radio">
                                        <label>
                                            <input
                                                className="mx-1"
                                            type="radio"
                                            value="Movies"
                                            checked={selectedRadio === "Movies"}
                                            onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                            />
                                            Movies
                                        </label>
                                    </span>
                                        </div>

                                        <div className="form-button mt-4 mx-4">
                                            <button className='btn btn-primary' onClick={(e) => handleSubmit(e, state)}>{currentId?'Update':'Submit'}</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );   
        
    
}

export default Form;
