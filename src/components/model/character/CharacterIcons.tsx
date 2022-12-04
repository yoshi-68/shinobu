import no_character from '../../../images/no_character.png';

type Props = {
  charaName: string | undefined;
  iconPath: string | undefined;
};

export const CharactersIcon = (props: Props) => {
  let { iconPath, charaName } = props;

  iconPath = iconPath !== undefined ? iconPath : no_character;
  charaName = charaName !== undefined ? charaName : 'No Character';

  return (
    <input
      type="image"
      className="chara-icon"
      src={iconPath}
      alt={charaName}
      title={charaName}
    />
  );
};
