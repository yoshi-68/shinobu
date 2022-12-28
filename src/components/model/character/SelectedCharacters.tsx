import { Character } from '@types';

import noSelected from '../../../images/no_character.png';
import searchIcon from '../../../images/search.svg';
import { MAX_NUM_CHARA_SELECTION } from '../../../settings';

type SelectedCharactersProps = {
  index: number;
  team1Characters: Character[];
  setTeam1Characters: React.Dispatch<React.SetStateAction<Character[]>>;
};

export const SelectedCharacters = (props: SelectedCharactersProps) => {
  const { index, team1Characters, setTeam1Characters } = props;
  const charactersData: Character[] = [];

  // キャラクターの表示用にキャラクターデータを最大5個コピーする。キャラクターデータがない場合はundefinedで埋める。
  for (let i = 0; i < MAX_NUM_CHARA_SELECTION; i++) {
    charactersData.push(team1Characters[i]);
  }

  // キャラクターを右から先頭に隊列順で表示させるため、リバースさせる
  charactersData.reverse();

  const removeCharacter = (clickId: number) => {
    const newCharacterData = team1Characters.filter(
      (charaData) => charaData.id !== clickId
    );
    setTeam1Characters(newCharacterData);
  };

  return (
    <div id={'selected_characters' + index}>
      {charactersData.map((chara, index) => {
        if (chara) {
          return (
            <img
              key={'selected_characters' + index + '_' + chara.id}
              className={'selected-chara-icon'}
              src={chara.iconPath}
              onClick={() => removeCharacter(chara.id)}
            />
          );
        } else {
          return (
            <img
              key={'selected_characters' + index + '_' + index}
              className={'selected-chara-icon'}
              src={noSelected}
            />
          );
        }
      })}
      <input type="image" className={'search-icon'} src={searchIcon} />
    </div>
  );
};
