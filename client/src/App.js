import {useEffect, useState} from 'react';
import './App.css';
import FormInput from './component/form-input-display/form-input-display.component';
import {useDispatch} from 'react-redux';

//Redux import 
import {fetchStudents} from './redux/form/form.action';


const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchStudents);
      }, [currentId, dispatch]);

    return (
        <div className="App">
          <FormInput currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    );
  
}



export default App;
