export type Character = {
  id: number;
  name: string;
  iconPath: string;
  guardType: string;
  orderFormation: number;
};

export type CharacterGroup = {
  allTab: Character[];
  forwardTab: Character[];
  middleTab: Character[];
  backwardTab: Character[];
};
