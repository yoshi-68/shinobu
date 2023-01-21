import { MAX_NUM_CHARA_SELECTION } from '@/settings';
import { Character, SetTeams, Teams } from '@types';

type CharactersIconProps = {
  charaData: Character;
  selectedSearchTabIndex: number;
  setTeams: SetTeams;
};

export const CharacterIcon = (props: CharactersIconProps) => {
  const { charaData, selectedSearchTabIndex, setTeams } = props;
  const addCharacterData = (teams: Teams): Teams => {
    const team = teams[selectedSearchTabIndex - 1];
    if (!team) return teams;
    // 1チームにつき、最大5人までキャラクターを選択できる
    if (MAX_NUM_CHARA_SELECTION <= team.length) return teams;
    // 1チームで、同じキャラクターを選択させない
    if (team.some((v) => v.id === charaData.id)) return teams;

    team.push(charaData);
    // キャラクターを隊列順にソートする
    team.sort(
      (a: Character, b: Character) => a.orderFormation - b.orderFormation
    );
    const newTeams = teams.map((t, i) => {
      return i === selectedSearchTabIndex - 1 ? team : t;
    });

    return newTeams;
  };

  const onClickAddCharacterData = () => {
    setTeams((teams) => {
      return addCharacterData(teams);
    });
  };

  return (
    <input
      type="image"
      className="chara-icon"
      src={charaData.iconPath}
      alt={charaData.name}
      title={charaData.name}
      onClick={onClickAddCharacterData}
    />
  );
};
