import { Characters, SetSelectedCharacters } from 'types';

import { SearchResult } from './SearchResult';
import { SelectedCharacters } from './SelectedCharacters';

type SearchPanelProps = {
  index: number;
  selectedCharacter: Characters;
  setSelectedCharacters: SetSelectedCharacters;
};

export const SearchPanel = (props: SearchPanelProps) => {
  const { index, selectedCharacter, setSelectedCharacters } = props;

  return (
    <div id={'chara_search_tab' + index} className="chara-search-tab-panel">
      <SelectedCharacters
        key={'selectedCharacters' + index}
        index={index}
        selectedCharacter={selectedCharacter}
        setSelectedCharacters={setSelectedCharacters}
      />
      <SearchResult key={'searchRows' + index} />
    </div>
  );
};
