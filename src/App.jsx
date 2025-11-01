import { Routes, Route } from 'react-router'; // Import React Router
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';

const App = () => {
  
  return (
    <>
      <NavBar />
      <Route>
        <Route path='/sign-up' element={<SignUpForm/>}/>
      </Route>
    </>
  );
};

export default App;

