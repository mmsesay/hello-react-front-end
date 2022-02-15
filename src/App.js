import { HashRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
