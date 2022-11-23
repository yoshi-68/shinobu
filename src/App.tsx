import React, { createContext, useCallback, useState } from 'react';

import CharaSearch from './components/CharacterSearch/CharacterSearch';
import { CharacterSelect } from './components/CharacterSelect/CharacterSelect';
import './css/style.css';

const App = () => {
  return (
    <>
      <div className="App">
        <CharacterSelect />
        <CharaSearch />
      </div>
    </>
  );
};

export default App;
