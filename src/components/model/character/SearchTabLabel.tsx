import { SetSelectedSearchTabIndex } from 'types';

type SearchTabLabelProps = {
  index: number;
  labelName: string;
  setSelectedSearchTabIndex: SetSelectedSearchTabIndex;
};

export const SearchTabLabel = (props: SearchTabLabelProps) => {
  const { index, labelName } = props;
  return (
    <label
      className={'chara-search-tab' + index + '-label'}
      htmlFor={'chara_search_tab' + index}
      onClick={() => {
        props.setSelectedSearchTabIndex(index);
      }}
    >
      {labelName}
    </label>
  );
};
