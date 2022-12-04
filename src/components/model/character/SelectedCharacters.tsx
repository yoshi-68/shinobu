import { Characters, SetSelectedCharacters } from 'types';

import noSelected from '../../../images/no_character.png';
import searchIcon from '../../../images/search.svg';

type SelectedCharactersProps = {
  index: number;
  selectedCharacter: Characters;
  setSelectedCharacters: SetSelectedCharacters;
};

export const SelectedCharacters = (props: SelectedCharactersProps) => {
  const { index, selectedCharacter, setSelectedCharacters } = props;

  return (
    <div id={'selected_characters' + index}>
      <img className={'selected-chara-icon'} src={noSelected}></img>
      <input type="image" className={'search-icon'} src={searchIcon}></input>
    </div>
  );
};
