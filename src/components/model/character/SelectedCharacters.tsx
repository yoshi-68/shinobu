import { Character } from '@types';
import { MAX_NUM_CHARA_SELECTION } from '../../../settings'

import noSelected from '../../../images/no_character.png';
import searchIcon from '../../../images/search.svg';

type SelectedCharactersProps = {
  index: number;
  team1Characters: Character[];
};

export const SelectedCharacters = (props: SelectedCharactersProps) => {
  const { index, team1Characters } = props;
  const charactersData = [];

  // キャラクターの表示用にキャラクターデータを最大5個コピーする。キャラクターデータがない場合はundefinedで埋める。
  for (let i = 0; i < MAX_NUM_CHARA_SELECTION; i++) {
    charactersData.push(team1Characters[i]);
  }

  // キャラクターを右から先頭に隊列順で表示させるため、リバースさせる
  charactersData.reverse();

  return (
    <div id={'selected_characters' + index}>
      {charactersData.map((chara, index) => {
        if (typeof chara === 'undefined') {
          return (
            <img
              key={'selected_characters' + index + '_' + index}
              className={'selected-chara-icon'}
              src={noSelected}
            />
          );
        } else {
          return (
            <img
              key={'selected_characters' + index + '_' + chara.id}
              className={'selected-chara-icon'}
              src={chara.iconPath}
            />
          );
        }
      })}
      <input type="image" className={'search-icon'} src={searchIcon} />
    </div>
  );
};
