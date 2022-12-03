type SearchRadioProps = {
  index: number;
  isChecked: boolean;
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
