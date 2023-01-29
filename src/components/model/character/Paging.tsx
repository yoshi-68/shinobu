import leftFillIcon from '@/images/left-fill.svg';
import leftIcon from '@/images/left.svg';
import rightFillIcon from '@/images/right-fill.svg';
import rightIcon from '@/images/right.svg';
import { PagingDto } from '@types';

type SearchUiProps = { pagingDto: PagingDto };

export const Paging = (props: SearchUiProps) => {
  const dto = props.pagingDto;
  if (dto.isSearched) {
    return (
      <>
        <div className="paging">
          <input
            type="image"
            className="paging-allow"
            src={dto.currentPage > 1 ? leftIcon : leftFillIcon}
            alt="back"
            onClick={() => {
              if (1 < dto.currentPage) dto.setCurrentPage(dto.currentPage - 1);
            }}
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
            onClick={() => {
              if (dto.currentPage < dto.maxPage)
                dto.setCurrentPage(dto.currentPage + 1);
            }}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
