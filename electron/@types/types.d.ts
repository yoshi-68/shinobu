export type characterData = {
    id: number;
    name: string;
    iconPath: string;
    guardType: string;
    orderFormation: number;
};

export type charactersData = {
    allCharaData: characterData[];
    avantGuard: characterData[];
    middleGuard: characterData[];
    rearGuard: characterData[];
};
