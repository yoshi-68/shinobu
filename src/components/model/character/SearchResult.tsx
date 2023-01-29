import {
  CharacterIcons,
  PagingDto,
  SearchResultOrganizations,
  Team,
} from '@types';
import { useState } from 'react';

import { seachOrganizations } from '../../../functions/seachOrganizations';
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
  const [isSearchResultExist, setIsSearchResultExist] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [organizations, setOrganizations] = useState<
    Partial<SearchResultOrganizations> | undefined
  >(undefined);

  const pagingDto = {
    currentPage,
    sortType,
    team,
    maxPage,
    isSearched,
    setCurrentPage,
    setIsSearchResultExist,
    setIsSearched,
    setMaxPage,
    setOrganizations,
  };

  const seachOrganizationsDto = {
    currentPage,
    sortType,
    team,
    setIsSearchResultExist,
    setIsSearched,
    setMaxPage,
    setOrganizations,
  };

  if (isSearchResultExist) {
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
              type={'button'}
              className={'search-btn'}
              onClick={() => seachOrganizations(seachOrganizationsDto)}
              disabled={team.length <= 0}
            >
              検索
            </button>
          </div>
          <div>
            <Paging pagingDto={pagingDto} />
            {organizations?.result?.map((organization, index) => (
              <ShowOrganization
                key={'showOrganization_' + index}
                organization={organization}
                characterIcons={characterIcons}
              />
            ))}
            <Paging pagingDto={pagingDto} />
          </div>
        </div>
      </>
    );
  } else {
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
              type={'button'}
              className={'search-btn'}
              onClick={() => seachOrganizations(seachOrganizationsDto)}
              disabled={team.length <= 0}
            >
              検索
            </button>
          </div>
          {!isSearchResultExist && isSearched && (
            <div className={'no-result-found'}>
              <p>検索結果がありませんでした。</p>
            </div>
          )}
        </div>
      </>
    );
  }
};
