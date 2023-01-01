import { Character, CharacterIcons, SetTeamCharacters } from '@types';

import { SearchResult } from './SearchResult';
import { SelectedCharacters } from './SelectedCharacters';

type SearchPanelProps = {
  index: number;
  teamCharacters: Character[];
  setTeamCharacters: SetTeamCharacters;
  characterIcons: CharacterIcons;
};

export const SearchPanel = (props: SearchPanelProps) => {
  const { index, teamCharacters, setTeamCharacters, characterIcons } = props;

  return (
    <div id={'chara_search_tab' + index} className="chara-search-tab-panel">
      <SelectedCharacters
        key={'selectedCharacters' + index}
        index={index}
        team1Characters={teamCharacters}
        setTeam1Characters={setTeamCharacters}
      />
      <SearchResult
        key={'searchRows' + index}
        teamCharacters={teamCharacters}
        characterIcons={characterIcons}
      />
    </div>
  );
};
