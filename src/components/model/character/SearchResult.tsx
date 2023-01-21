import seachIcon from '@/images/search.svg';
import { CharacterIcons, SearchResultOrganizations, Team } from '@types';
import { useState } from 'react';

import { Paging } from './Paging';
import { ShowOrganization } from './ShowOrganization';

type SearchRowsProps = {
  team: Team;
  characterIcons: CharacterIcons;
};

export const SearchResult = (props: SearchRowsProps) => {
  const { team, characterIcons } = props;

  const [sortType, setSortType] = useState('update_datetime desc');
  const [isSearched, setIsSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [organizations, setOrganizations] = useState<
    Partial<SearchResultOrganizations> | undefined
  >(undefined);

  const seachOrganizations = async (
    currentPage: number,
    sortType: string,
    team: Team
  ) => {
    if (team.length > 0) {
      const result = await window.electron.seachOrganizations(
        team,
        currentPage,
        sortType
      );
      setIsSearched(true);
      setMaxPage(Math.ceil(result.num_of_results / 10));
      setOrganizations(result);
    }
  };

  return (
    <>
      <div className={'chara-search-results'}>
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
            onClick={() => seachOrganizations(currentPage, sortType, team)}
            disabled={team.length <= 0}
          >
            <img src={seachIcon} alt="seach" />
            検索
          </button>
        </div>
        <div>
          <Paging
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
            isSearched={isSearched}
          />
          {organizations?.result?.map((organization, index) => (
            <ShowOrganization
              key={'showOrganization_' + index}
              organization={organization}
              characterIcons={characterIcons}
            />
          ))}
          <Paging
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
            isSearched={isSearched}
          />
        </div>
      </div>
    </>
  );
};
