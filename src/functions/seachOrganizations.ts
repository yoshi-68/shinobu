import { sleep } from '@/functions/sleep';
import { SeachOrganizationsDto } from '@types';

export const seachOrganizations = async (dto: SeachOrganizationsDto) => {
  if (dto.team.length === 0) return;

  dto.setIsDisabledSeach(true);

  const result = await window.electron.seachOrganizations(
    dto.team,
    dto.currentPage,
    dto.sortType
  );
  dto.setIsSearchResultExist(Number(result.num_of_results) ? true : false);
  dto.setOrganizations(result);
  dto.setSearchedTeam([...dto.team]);
  dto.setMaxPage(Math.ceil(result.num_of_results / 10));
  await sleep(1000);
  dto.setIsDisabledSeach(false);
};
