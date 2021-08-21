import './App.css';
import SuperHeroApp from './components/SuperHero/SuperHeroApp'
import withLoading from './HOC/withLoading';

function App() {
  
  return (
    <div className="App">
      <SuperHeroApp />
    </div>
  );
}

export default withLoading(App);
