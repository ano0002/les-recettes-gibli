import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';
import Recipe from './components/Recipe';

function App() {
  const navLinks = [
    { name: 'Home', url: '/', element: <Home />, displayInNav: true },
    { name: 'Add Recipe', url: '/add', element: <Add />, displayInNav: true },
    { name: 'Advanced Search', url: '/search', element: <Search />, displayInNav: true },
    { name: 'Recipe', url: '/recipe/:id', element: <Recipe />, displayInNav: false}
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
