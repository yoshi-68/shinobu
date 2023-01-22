import clearIcon from '@/images/clear.svg';
import noSelected from '@/images/no_character.png';
import { MAX_NUM_CHARA_SELECTION } from '@/settings';
import { Character, SetTeams, Team, Teams } from '@types';

type SelectedCharactersProps = {
  selectedSearchTabIndex: number;
  team: Team;
  setTeams: SetTeams;
};

export const SelectedCharacters = (props: SelectedCharactersProps) => {
  const { selectedSearchTabIndex, team, setTeams } = props;
  const charactersData: Partial<Team> = Array.from(team);

  // キャラクターの表示用にキャラクターデータを最大5個コピーする。キャラクターデータがない場合はundefinedで埋める。
  for (let i = 0; i < MAX_NUM_CHARA_SELECTION - team.length; i++) {
    charactersData.push(undefined);
  }

  const onClickRemoveCharacter = (clickId: number) => {
    setTeams((teams) =>
      teams.map((t, i) => {
        if (i === selectedSearchTabIndex - 1) {
          return t.filter((charaData) => {
            return charaData.id !== clickId;
          });
        }

        return t;
      })
    );
  };

  const onClickClearCharacters = () => {
    setTeams((teams) =>
      teams.map((t, i) => {
        if (i === selectedSearchTabIndex - 1) return [];

        return t;
      })
    );
  };

  return (
    <div className="selected-chara">
      <div className="selected-chara-icons">
        {charactersData.map((chara, index) => {
          if (chara) {
            return (
              <input
                key={'selected_characters' + index + '_' + chara.id}
                type="image"
                className={'selected-chara-icon'}
                src={chara.iconPath}
                title={chara.name}
                alt={chara.name}
                onClick={() => onClickRemoveCharacter(chara.id)}
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
      </div>
      <input
        type="image"
        className={'clear-icon'}
        src={clearIcon}
        onClick={onClickClearCharacters}
      />
    </div>
  );
};
