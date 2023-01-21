import leftFillIcon from '@/images/left-fill.svg';
import leftIcon from '@/images/left.svg';
import rightFillIcon from '@/images/right-fill.svg';
import rightIcon from '@/images/right.svg';

type SearchUiProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
  isSearched: boolean;
};

export const Paging = (props: SearchUiProps) => {
  const { currentPage, setCurrentPage, maxPage, isSearched } = props;
  if (isSearched) {
    return (
      <>
        <div className="paging">
          <input
            type="image"
            className="paging-allow"
            src={currentPage > 1 ? leftIcon : leftFillIcon}
            alt="back"
            onClick={() => {
              if (1 < currentPage) setCurrentPage(currentPage - 1);
            }}
          />
          <input
            type="text"
            className="paging-number"
            readOnly
            value={currentPage + '/' + maxPage}
          />
          <input
            type="image"
            className="paging-allow"
            src={currentPage < maxPage ? rightIcon : rightFillIcon}
            alt="next"
            onClick={() => {
              if (currentPage < maxPage) setCurrentPage(currentPage + 1);
            }}
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
