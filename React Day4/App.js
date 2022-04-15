import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Employee from './Components/Employee/Employee';

function App() {
  return (
    <div className="container pt-5 mt-4">
      <h3 className="text-center text-uppercase">Day4 Assignment</h3> <hr/>
      <Employee/>
    </div>
  );
}

export default App;
