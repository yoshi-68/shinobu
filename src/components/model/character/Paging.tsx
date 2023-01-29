import leftFillIcon from '@/images/left-fill.svg';
import leftIcon from '@/images/left.svg';
import rightFillIcon from '@/images/right-fill.svg';
import rightIcon from '@/images/right.svg';
import { PagingDto } from '@types';

type SearchUiProps = { pagingDto: PagingDto };

export const Paging = (props: SearchUiProps) => {
  const { pagingDto } = props;
  if (pagingDto.isSearched) {
    return (
      <>
        <div className="paging">
          <input
            type="image"
            className="paging-allow"
            src={pagingDto.currentPage > 1 ? leftIcon : leftFillIcon}
            alt="back"
            onClick={() => {
              if (1 < pagingDto.currentPage)
                pagingDto.setCurrentPage(pagingDto.currentPage - 1);
            }}
          />
          <input
            type="text"
            className="paging-number"
            readOnly
            value={pagingDto.currentPage + '/' + pagingDto.maxPage}
          />
          <input
            type="image"
            className="paging-allow"
            src={
              pagingDto.currentPage < pagingDto.maxPage
                ? rightIcon
                : rightFillIcon
            }
            alt="next"
            onClick={() => {
              if (pagingDto.currentPage < pagingDto.maxPage)
                pagingDto.setCurrentPage(pagingDto.currentPage + 1);
            }}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
