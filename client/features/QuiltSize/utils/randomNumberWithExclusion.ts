import randomNumber from './randomNumber';

const randomNumberWithExclusionGetter = getRandomNumber => (
    min: number,
    max: number,
    exclude: number,
): number => {
    let rand;

    while (rand === undefined || rand === exclude) {
        rand = getRandomNumber(min, max);
    }

    return rand;
};

const randomNumberWithExclusion = randomNumberWithExclusionGetter(randomNumber);

export {
    randomNumberWithExclusion as default,
    randomNumberWithExclusionGetter,
};
