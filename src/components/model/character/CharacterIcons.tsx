import { Character } from '@types';
import { MAX_NUM_CHARA_SELECTION } from '../../../settings'

type CharactersIconProps = {
  charaData: Character;
  setTeam1Characters: React.Dispatch<React.SetStateAction<Character[]>>;
  team1Characters: Character[];
};

export const CharactersIcon = (props: CharactersIconProps) => {
  const { charaData, setTeam1Characters, team1Characters } = props;

  // useStateから新しい配列を生成してから、setする（useStateのオブジェクトにpushしてから渡すのはNGかも？）
  const charactersData = team1Characters.map((chara) => {
    return chara;
  });

  const addCharacterData = () => {
    // 質問：ぱっと見、charactersDataのスコープ事故に見える？

    // 1チームにつき、最大5人までキャラクターを選択できる
    if (charactersData.length >= MAX_NUM_CHARA_SELECTION) return;
    // 1チームで、同じキャラクターを選択させない
    if (team1Characters.some(v => v.id === charaData.id)) return;

    charactersData.push(charaData);

    // キャラクターを隊列順にソートする
    const compareOrderFormation = (a: Character, b: Character) =>
      a.orderFormation - b.orderFormation;
    charactersData.sort(compareOrderFormation);
    setTeam1Characters(charactersData);
  };

  return (
    <input
      type="image"
      className="chara-icon"
      src={charaData.iconPath}
      alt={charaData.name}
      title={charaData.name}
      onClick={addCharacterData}
    />
  );
};
