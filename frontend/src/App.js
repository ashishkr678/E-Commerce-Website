
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
