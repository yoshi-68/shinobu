import leftIcon from '@/images/left.svg';
import rightIcon from '@/images/right.svg';
import seachIcon from '@/images/search.svg';
import { Character, CharacterIcons, SearchResultOrganizations } from '@types';
import { useState } from 'react';

import { ShowOrganization } from './ShowOrganization';

type SearchRowsProps = {
  teamCharacters: Character[];
  characterIcons: CharacterIcons;
};

export const SearchResult = (props: SearchRowsProps) => {
  const { teamCharacters, characterIcons } = props;

  const [sortType, setSortType] = useState('update_datetime desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);
  const [organizations, setOrganizations] = useState<
    Partial<SearchResultOrganizations> | undefined
  >(undefined);

  const seachOrganizations = async (
    currentPage: number,
    sortType: string,
    teamCharacters: Character[]
  ) => {
    if (teamCharacters.length > 0) {
      const result = await window.electron.seachOrganizations(
        teamCharacters,
        currentPage,
        sortType
      );
      setMaxPage(Math.ceil(result.num_of_results / 10));
      setOrganizations(result);
    }
  };

  return (
    <div className={'chara-search-rows'}>
      <div>
        <label className={'selectbox-001'}>
          <select onChange={(event) => setSortType(event.target.value)}>
            <option value={'update_datetime desc'}>時間</option>
            <option value={'good desc,bad asc,update_datetime desc'}>
              評価
            </option>
          </select>
        </label>
        <button
          type="button"
          onClick={() =>
            seachOrganizations(currentPage, sortType, teamCharacters)
          }
          disabled={teamCharacters.length <= 0}
        >
          <img src={seachIcon} alt="seach" />
          検索
        </button>
      </div>

      <input
        type="image"
        src={leftIcon}
        alt="back"
        onClick={() => {
          if (1 < currentPage) setCurrentPage(currentPage - 1);
        }}
      />
      <input type="text" readOnly value={currentPage + '/' + maxPage} />
      <input
        type="image"
        src={rightIcon}
        alt="next"
        onClick={() => {
          if (currentPage < maxPage) setCurrentPage(currentPage + 1);
        }}
      />
      <ShowOrganization
        organizations={organizations}
        characterIcons={characterIcons}
      />
    </div>
  );
};
