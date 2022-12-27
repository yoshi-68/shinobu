import { Character } from '@types';

import { SearchResult } from './SearchResult';
import { SelectedCharacters } from './SelectedCharacters';

type SearchPanelProps = {
  index: number;
  team1Characters: Character[];
};

export const SearchPanel = (props: SearchPanelProps) => {
  const { index, team1Characters } = props;

  return (
    <div id={'chara_search_tab' + index} className="chara-search-tab-panel">
      <SelectedCharacters
        key={'selectedCharacters' + index}
        index={index}
        team1Characters={team1Characters}
      />
      <SearchResult key={'searchRows' + index} />
    </div>
  );
};
