import { seachOrganizations } from "@/functions/seachOrganizations";
import {
  CharacterIcons,
  PagingDto,
  SeachOrganizationsDto,
  SearchResultOrganizations,
  Team
} from "@types";
import { useState } from "react";

import { Paging } from "./Paging";
import { ShowOrganization } from "./ShowOrganization";

const clickSearch = (
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  dto: SeachOrganizationsDto
) => {
  setCurrentPage((state) => 1);
  seachOrganizations(dto);
};

type SearchRowsProps = {
  team: Team;
  characterIcons: CharacterIcons;
};

export const SearchResult = (props: SearchRowsProps) => {
  const { team, characterIcons } = props;

  const [sortType, setSortType] = useState("good desc,bad asc,update_datetime desc");
  const [searchedTeam, setSearchedTeam] = useState<Team | undefined>(undefined);
  const [isSearchResultExist, setIsSearchResultExist] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [organizations, setOrganizations] = useState<
    SearchResultOrganizations | undefined
  >(undefined);
  const [isDisabledSeach, setIsDisabledSeach] = useState(false);

  const seachOrganizationsDto: SeachOrganizationsDto = {
    currentPage,
    sortType,
    team,
    setSearchedTeam,
    setIsSearchResultExist,
    setMaxPage,
    setOrganizations,
    setIsDisabledSeach
  };

  const pagingDto: PagingDto = {
    currentPage,
    sortType,
    maxPage,
    searchedTeam,
    isDisabledSeach,
    setSearchedTeam,
    setCurrentPage,
    setIsSearchResultExist,
    setMaxPage,
    setOrganizations,
    setIsDisabledSeach
  };

  if (isSearchResultExist) {
    return (
      <>
        <div className={"chara-search-results"}>
          <div>
            <label className={"selectbox-001"}>
              <select onChange={(event) => setSortType(event.target.value)}>
                <option value={"good desc,bad asc,update_datetime desc"}>
                  評価
                </option>
                <option value={"update_datetime desc"}>時間</option>
              </select>
            </label>
            <button
              type={"button"}
              className={"search-btn"}
              onClick={() => clickSearch(setCurrentPage, seachOrganizationsDto)}
              disabled={isDisabledSeach || team.length <= 0}
            >
              検索
            </button>
          </div>
          <div>
            <Paging pagingDto={pagingDto} />
            {organizations?.result?.map((organization, index) => (
              <ShowOrganization
                key={"showOrganization_" + index}
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
        <div className={"chara-search-results"}>
          <div>
            <label className={"selectbox-001"}>
              <select onChange={(event) => setSortType(event.target.value)}>
                <option value={"good desc,bad asc,update_datetime desc"}>
                  評価
                </option>
                <option value={"update_datetime desc"}>時間</option>
              </select>
            </label>
            <button
              type={"button"}
              className={"search-btn"}
              onClick={() => clickSearch(setCurrentPage, seachOrganizationsDto)}
              disabled={isDisabledSeach || team.length <= 0}
            >
              検索
            </button>
          </div>
          {!isSearchResultExist && searchedTeam && (
            <div className={"no-result-found"}>
              <p>検索結果がありませんでした。</p>
            </div>
          )}
        </div>
      </>
    );
  }
};
