type Props = {
  charaName: string;
  iconPath: string;
};

export const CharactersIcon = (props: Props) => {
  return (
    <input
      type="image"
      className="chara-icon"
      src={props.iconPath}
      alt={props.charaName}
      title={props.charaName}
    />
  );
};
