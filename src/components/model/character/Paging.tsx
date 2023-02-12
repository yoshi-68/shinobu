import { seachOrganizations } from '@/functions/seachOrganizations';
import leftFillIcon from '@/images/left-fill.svg';
import leftIcon from '@/images/left.svg';
import rightFillIcon from '@/images/right-fill.svg';
import rightIcon from '@/images/right.svg';
import { PagingDto, SeachOrganizationsDto } from '@types';

const movePage = async (paginationType: 'prev' | 'next', dto: PagingDto) => {
  const seachOrganizationsDto: SeachOrganizationsDto = {
    currentPage: dto.currentPage,
    sortType: dto.sortType,
    team: dto.searchedTeam!,
    setSearchedTeam: dto.setSearchedTeam,
    setIsSearchResultExist: dto.setIsSearchResultExist,
    setMaxPage: dto.setMaxPage,
    setOrganizations: dto.setOrganizations,
    setIsDisabledSeach: dto.setIsDisabledSeach,
  };

  if (paginationType === 'prev') {
    if (dto.currentPage <= 1) return;
    dto.setCurrentPage((currentPage) => {
      seachOrganizationsDto.currentPage = currentPage - 1;
      seachOrganizations(seachOrganizationsDto);
      return seachOrganizationsDto.currentPage;
    });
  } else {
    if (dto.maxPage <= dto.currentPage) return;
    dto.setCurrentPage((currentPage) => {
      seachOrganizationsDto.currentPage = currentPage + 1;
      seachOrganizations(seachOrganizationsDto);
      return seachOrganizationsDto.currentPage;
    });
  }
};

type PagingProps = { pagingDto: PagingDto };
export const Paging = (props: PagingProps) => {
  const dto = props.pagingDto;
  if (dto.searchedTeam) {
    return (
      <>
        <div className="paging">
          <input
            type="image"
            className="paging-allow"
            src={dto.currentPage > 1 ? leftIcon : leftFillIcon}
            alt="back"
            onClick={() => movePage('prev', dto)}
            disabled={dto.isDisabledSeach}
          />
          <input
            type="text"
            className="paging-number"
            readOnly
            value={dto.currentPage + '/' + dto.maxPage}
          />
          <input
            type="image"
            className="paging-allow"
            src={dto.currentPage < dto.maxPage ? rightIcon : rightFillIcon}
            alt="next"
            onClick={() => movePage('next', dto)}
            disabled={dto.isDisabledSeach}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
