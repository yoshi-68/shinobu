import { CharacterIcons, SetTeams, Team } from '@types';

import { SearchResult } from './SearchResult';
import { SelectedCharacters } from './SelectedCharacters';

type SearchPanelProps = {
  index: number;
  selectedSearchTabIndex: number;
  team: Team;
  setTeams: SetTeams;
  characterIcons: CharacterIcons;
};

export const SearchPanel = (props: SearchPanelProps) => {
  const { index, selectedSearchTabIndex, team, setTeams, characterIcons } =
    props;

  return (
    <div id={'chara_search_tab' + index} className="chara-search-tab-panel">
      <SelectedCharacters
        key={'selectedCharacters' + index}
        selectedSearchTabIndex={selectedSearchTabIndex}
        team={team}
        setTeams={setTeams}
      />
      <SearchResult
        key={'searchRows' + index}
        team={team}
        characterIcons={characterIcons}
      />
    </div>
  );
};
