import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';

function App() {
  const navLinks = [
    { name: 'Home', url: '/', element: <Home /> },
    { name: 'Add Recipe', url: '/add', element: <Add /> },
    { name: 'Advanced Search', url: '/search', element: <Search /> },
  ];

  return (
    <div className="App">
      <Header navItems={navLinks} />
      <Main routes={navLinks}/>
      <Footer />
    </div>
  );
}

export default App;
