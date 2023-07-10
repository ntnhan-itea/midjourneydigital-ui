export interface Counter {
    id: string | undefined;
    anime: {
        naruto: number;
        demonSlayer: number;
        attackOnTitan: number;
        myHeroAcademia: number;
        onePiece: number;
        dragonBall: number;
        sailorMoon: number;
        studioGhibli: number;
    } | null;
    product: {
        tshirt: number;
        figureModel: number;
        sticker: number;
        keyChain: number;
    } | null;

    midjourney: {
        account: number;
        promptDetail: number;
        tutorial: number;
    } | null;
}
