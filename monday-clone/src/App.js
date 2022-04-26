import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Ticket from './pages/Ticket';

const  App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/ticket/:id' element={<Ticket editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
