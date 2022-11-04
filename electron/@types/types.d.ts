export type CharacterData = {
  id: number;
  name: string;
  iconPath: string;
  guardType: string;
  orderFormation: number;
};

export type CharactersData =
  | {
      allCharaData: CharacterData[];
      avantGuard: CharacterData[];
      middleGuard: CharacterData[];
      rearGuard: CharacterData[];
    }
  | undefined;
