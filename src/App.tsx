import CharaSearch from './components/CharaSearch';
import CharaSelect from './components/CharaSelect';
import './css/App.css';

const App = () => {
    return (
        <div className="App">
            <CharaSelect />
            <CharaSearch />
        </div>
    );
};

export default App;
