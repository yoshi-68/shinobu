import { SetSelectedSearchTabIndex } from 'types';

type SearchRadioProps = {
  index: number;
  isChecked: boolean;
  setSelectedSearchTabIndex: SetSelectedSearchTabIndex;
};

export const SearchTabRadio = (props: SearchRadioProps) => {
  const { index, isChecked } = props;
  return (
    <input
      id={'chara_search_tab' + index}
      type="radio"
      name="chara_search_tab_btn"
      defaultChecked={isChecked}
    />
  );
};
