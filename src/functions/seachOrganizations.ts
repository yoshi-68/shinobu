import {
  SetIsSearchResultExist,
  SetIsSearched,
  SetMaxPage,
  SetOrganizations,
  Team,
} from '@types';

export const seachOrganizations = async (
  currentPage: number,
  sortType: string,
  team: Team,
  setIsSearchResultExist: SetIsSearchResultExist,
  setIsSearched: SetIsSearched,
  setMaxPage: SetMaxPage,
  setOrganizations: SetOrganizations
) => {
  if (team.length > 0) {
    const result = await window.electron.seachOrganizations(
      team,
      currentPage,
      sortType
    );

    setIsSearchResultExist(Number(result.num_of_results) ? true : false);
    setIsSearched(true);
    setMaxPage(Math.ceil(result.num_of_results / 10));
    setOrganizations(result);
  }
};
