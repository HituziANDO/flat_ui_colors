export class FlatUIColor {
    /**
     * @param {number} red Red. The range of its value is 0 to 255.
     * @param {number} green Green. The range of its value is 0 to 255.
     * @param {number} blue Blue. The range of its value is 0 to 255.
     */
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * Returns rgb(r, g, b).
     */
    rgbAsCSS() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    /**
     * Returns rgba(r, g, b, a).
     * @param {number} alpha Alpha. The range of its value is 0 to 1.0.
     */
    rgbaAsCSS(alpha) {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${alpha})`;
    }
}

const rgb = (r, g, b) => new FlatUIColor(r, g, b);

/**
 * Flat UI Palette v1 by Flat UI Colors
 * https://flatuicolors.com/palette/defo
 */
const Defo = {
    turquoise: rgb(26, 188, 156),
    emerald: rgb(46, 204, 113),
    peterRiver: rgb(52, 152, 219),
    amethyst: rgb(155, 89, 182),
    wetAsphalt: rgb(52, 73, 94),
    greenSea: rgb(22, 160, 133),
    nephritis: rgb(39, 174, 96),
    belizeHole: rgb(41, 128, 185),
    wisteria: rgb(142, 68, 173),
    midnightBlue: rgb(44, 62, 80),
    sunFlower: rgb(241, 196, 15),
    carrot: rgb(230, 126, 34),
    alizarin: rgb(231, 76, 60),
    clouds: rgb(236, 240, 241),
    concrete: rgb(149, 165, 166),
    orange: rgb(243, 156, 18),
    pumpkin: rgb(211, 84, 0),
    pomegranate: rgb(192, 57, 43),
    silver: rgb(189, 195, 199),
    asbestos: rgb(127, 140, 141),

    palette: [
        Defo.turquoise,
        Defo.emerald,
        Defo.peterRiver,
        Defo.amethyst,
        Defo.wetAsphalt,
        Defo.greenSea,
        Defo.nephritis,
        Defo.belizeHole,
        Defo.wisteria,
        Defo.midnightBlue,
        Defo.sunFlower,
        Defo.carrot,
        Defo.alizarin,
        Defo.clouds,
        Defo.concrete,
        Defo.orange,
        Defo.pumpkin,
        Defo.pomegranate,
        Defo.silver,
        Defo.asbestos,
    ]
};

/**
 * American Palette by Kevin Yang      from 🇺🇸
 * https://flatuicolors.com/palette/us
 */
const Us = {
    lightGreenishBlue: rgb(85, 239, 196),
    fadedPoster: rgb(129, 236, 236),
    greenDarnerTail: rgb(116, 185, 255),
    shyMoment: rgb(162, 155, 254),
    cityLights: rgb(223, 230, 233),
    mintLeaf: rgb(0, 184, 148),
    robinsEggBlue: rgb(0, 206, 201),
    electronBlue: rgb(9, 132, 227),
    exodusFruit: rgb(108, 92, 231),
    soothingBreeze: rgb(178, 190, 195),
    sourLemon: rgb(255, 234, 167),
    firstDate: rgb(250, 177, 160),
    pinkGlamour: rgb(255, 118, 117),
    pico8Pink: rgb(253, 121, 168),
    americanRiver: rgb(99, 110, 114),
    brightYarrow: rgb(253, 203, 110),
    orangeville: rgb(225, 112, 85),
    chiGong: rgb(214, 48, 49),
    prunusAvium: rgb(232, 67, 147),
    draculaOrchid: rgb(45, 52, 54),

    palette: [
        Us.lightGreenishBlue,
        Us.fadedPoster,
        Us.greenDarnerTail,
        Us.shyMoment,
        Us.cityLights,
        Us.mintLeaf,
        Us.robinsEggBlue,
        Us.electronBlue,
        Us.exodusFruit,
        Us.soothingBreeze,
        Us.sourLemon,
        Us.firstDate,
        Us.pinkGlamour,
        Us.pico8Pink,
        Us.americanRiver,
        Us.brightYarrow,
        Us.orangeville,
        Us.chiGong,
        Us.prunusAvium,
        Us.draculaOrchid,
    ]
};

/**
 * Aussie Palette by Kate Hoolahan      from 🇦🇺
 * https://flatuicolors.com/palette/au
 */
const Au = {
    beekeeper: rgb(246, 229, 141),
    spicedNectarine: rgb(255, 190, 118),
    pinkGlamour: rgb(255, 121, 121),
    juneBud: rgb(186, 220, 88),
    coastalBreeze: rgb(223, 249, 251),
    turbo: rgb(249, 202, 36),
    quinceJelly: rgb(240, 147, 43),
    carminePink: rgb(235, 77, 75),
    pureApple: rgb(106, 176, 76),
    hintOfIcePack: rgb(199, 236, 238),
    middleBlue: rgb(126, 214, 223),
    heliotrope: rgb(224, 86, 253),
    exodusFruit: rgb(104, 109, 224),
    deepKoamaru: rgb(48, 51, 107),
    soaringEagle: rgb(149, 175, 192),
    greenlandGreen: rgb(34, 166, 179),
    steelPink: rgb(190, 46, 221),
    blurple: rgb(72, 52, 212),
    deepCove: rgb(19, 15, 64),
    wizardGrey: rgb(83, 92, 104),

    palette: [
        Au.beekeeper,
        Au.spicedNectarine,
        Au.pinkGlamour,
        Au.juneBud,
        Au.coastalBreeze,
        Au.turbo,
        Au.quinceJelly,
        Au.carminePink,
        Au.pureApple,
        Au.hintOfIcePack,
        Au.middleBlue,
        Au.heliotrope,
        Au.exodusFruit,
        Au.deepKoamaru,
        Au.soaringEagle,
        Au.greenlandGreen,
        Au.steelPink,
        Au.blurple,
        Au.deepCove,
        Au.wizardGrey,
    ]
};

/**
 * British Palette by Jan Losert      from 🇬🇧
 * https://flatuicolors.com/palette/gb
 */
const Gb = {
    protossPylon: rgb(0, 168, 255),
    periwinkle: rgb(156, 136, 255),
    riseNShine: rgb(251, 197, 49),
    downloadProgress: rgb(76, 209, 55),
    seabrook: rgb(72, 126, 176),
    vanadylBlue: rgb(0, 151, 230),
    mattPurple: rgb(140, 122, 230),
    nanohanachaGold: rgb(225, 177, 44),
    skirretGreen: rgb(68, 189, 50),
    naval: rgb(64, 115, 158),
    nasturcianFlower: rgb(232, 65, 24),
    lynxWhite: rgb(245, 246, 250),
    blueberrySoda: rgb(127, 143, 166),
    mazarineBlue: rgb(39, 60, 117),
    blueNights: rgb(53, 59, 72),
    harleyDavidsonOrange: rgb(194, 54, 22),
    hintOfPensive: rgb(220, 221, 225),
    chainGangGrey: rgb(113, 128, 147),
    picoVoid: rgb(25, 42, 86),
    electromagnetic: rgb(47, 54, 64),

    palette: [
        Gb.protossPylon,
        Gb.periwinkle,
        Gb.riseNShine,
        Gb.downloadProgress,
        Gb.seabrook,
        Gb.vanadylBlue,
        Gb.mattPurple,
        Gb.nanohanachaGold,
        Gb.skirretGreen,
        Gb.naval,
        Gb.nasturcianFlower,
        Gb.lynxWhite,
        Gb.blueberrySoda,
        Gb.mazarineBlue,
        Gb.blueNights,
        Gb.harleyDavidsonOrange,
        Gb.hintOfPensive,
        Gb.chainGangGrey,
        Gb.picoVoid,
        Gb.electromagnetic,
    ]
};

/**
 * Canadian Palette by Dmitri Litvinov      from 🇨🇦
 * https://flatuicolors.com/palette/ca
 */
const Ca = {
    jigglypuff: rgb(255, 159, 243),
    casandoraYellow: rgb(254, 202, 87),
    pastelRed: rgb(255, 107, 107),
    megaman: rgb(72, 219, 251),
    wildCaribbeanGreen: rgb(29, 209, 161),
    lianHongLotusPink: rgb(243, 104, 224),
    doubleDragonSkin: rgb(255, 159, 67),
    amour: rgb(238, 82, 83),
    cyanite: rgb(10, 189, 227),
    darkMountainMeadow: rgb(16, 172, 132),
    jadeDust: rgb(0, 210, 211),
    joustBlue: rgb(84, 160, 255),
    nasuPurple: rgb(95, 39, 205),
    lightBlueBallerina: rgb(200, 214, 229),
    fuelTown: rgb(87, 101, 116),
    aquaVelvet: rgb(1, 163, 164),
    bleuDeFrance: rgb(46, 134, 222),
    bluebell: rgb(52, 31, 151),
    stormPetrel: rgb(131, 149, 167),
    imperialPrimer: rgb(34, 47, 62),

    palette: [
        Ca.jigglypuff,
        Ca.casandoraYellow,
        Ca.pastelRed,
        Ca.megaman,
        Ca.wildCaribbeanGreen,
        Ca.lianHongLotusPink,
        Ca.doubleDragonSkin,
        Ca.amour,
        Ca.cyanite,
        Ca.darkMountainMeadow,
        Ca.jadeDust,
        Ca.joustBlue,
        Ca.nasuPurple,
        Ca.lightBlueBallerina,
        Ca.fuelTown,
        Ca.aquaVelvet,
        Ca.bleuDeFrance,
        Ca.bluebell,
        Ca.stormPetrel,
        Ca.imperialPrimer,
    ]
};

/**
 * Chinese Palette by Wenjun      from 🇨🇳
 * https://flatuicolors.com/palette/cn
 */
const Cn = {
    goldenSand: rgb(236, 204, 104),
    coral: rgb(255, 127, 80),
    wildWatermelon: rgb(255, 107, 129),
    peace: rgb(164, 176, 190),
    grisaille: rgb(87, 96, 111),
    orange: rgb(255, 165, 2),
    bruschettaTomato: rgb(255, 99, 72),
    watermelon: rgb(255, 71, 87),
    bayWharf: rgb(116, 125, 140),
    prestigeBlue: rgb(47, 53, 66),
    limeSoap: rgb(123, 237, 159),
    frenchSkyBlue: rgb(112, 161, 255),
    saturatedSky: rgb(83, 82, 237),
    white: rgb(255, 255, 255),
    cityLights: rgb(223, 228, 234),
    ufoGreen: rgb(46, 213, 115),
    clearChill: rgb(30, 144, 255),
    brightGreek: rgb(55, 66, 250),
    antiFlashWhite: rgb(241, 242, 246),
    twinkleBlue: rgb(206, 214, 224),

    palette: [
        Cn.goldenSand,
        Cn.coral,
        Cn.wildWatermelon,
        Cn.peace,
        Cn.grisaille,
        Cn.orange,
        Cn.bruschettaTomato,
        Cn.watermelon,
        Cn.bayWharf,
        Cn.prestigeBlue,
        Cn.limeSoap,
        Cn.frenchSkyBlue,
        Cn.saturatedSky,
        Cn.white,
        Cn.cityLights,
        Cn.ufoGreen,
        Cn.clearChill,
        Cn.brightGreek,
        Cn.antiFlashWhite,
        Cn.twinkleBlue,
    ]
};

/**
 * Dutch Palette by Jeroen Van Eerden      from 🇳🇱
 * https://flatuicolors.com/palette/nl
 */
const Nl = {
    sunflower: rgb(255, 195, 18),
    energos: rgb(196, 229, 56),
    blueMartina: rgb(18, 203, 196),
    lavenderRose: rgb(253, 167, 223),
    baraRed: rgb(237, 76, 103),
    radiantYellow: rgb(247, 159, 31),
    androidGreen: rgb(163, 203, 56),
    mediterraneanSea: rgb(18, 137, 167),
    lavenderTea: rgb(217, 128, 250),
    veryBerry: rgb(181, 52, 113),
    puffinsBill: rgb(238, 90, 36),
    pixelatedGrass: rgb(0, 148, 50),
    merchantMarineBlue: rgb(6, 82, 221),
    forgottenPurple: rgb(153, 128, 250),
    hollyhock: rgb(131, 52, 113),
    redPigment: rgb(234, 32, 39),
    turkishAqua: rgb(0, 98, 102),
    _20000LeaguesUnderTheSea: rgb(27, 20, 100),
    circumorbitalRing: rgb(87, 88, 187),
    magentaPurple: rgb(111, 30, 81),

    palette: [
        Nl.sunflower,
        Nl.energos,
        Nl.blueMartina,
        Nl.lavenderRose,
        Nl.baraRed,
        Nl.radiantYellow,
        Nl.androidGreen,
        Nl.mediterraneanSea,
        Nl.lavenderTea,
        Nl.veryBerry,
        Nl.puffinsBill,
        Nl.pixelatedGrass,
        Nl.merchantMarineBlue,
        Nl.forgottenPurple,
        Nl.hollyhock,
        Nl.redPigment,
        Nl.turkishAqua,
        Nl._20000LeaguesUnderTheSea,
        Nl.circumorbitalRing,
        Nl.magentaPurple,
    ]
};

/**
 * French Palette by Léa Poisson      from 🇫🇷
 * https://flatuicolors.com/palette/fr
 */
const Fr = {
    flatFlesh: rgb(250, 211, 144),
    melonMelody: rgb(248, 194, 145),
    livid: rgb(106, 137, 204),
    spray: rgb(130, 204, 221),
    paradiseGreen: rgb(184, 233, 148),
    squashBlossom: rgb(246, 185, 59),
    mandarinRed: rgb(229, 80, 57),
    azraqBlue: rgb(74, 105, 189),
    dupain: rgb(96, 163, 188),
    auroraGreen: rgb(120, 224, 143),
    icelandPoppy: rgb(250, 152, 58),
    tomatoRed: rgb(235, 47, 6),
    yueGuangLanBlue: rgb(30, 55, 153),
    goodSamaritan: rgb(60, 99, 130),
    waterfall: rgb(56, 173, 169),
    carrotOrange: rgb(229, 142, 38),
    jalapenoRed: rgb(183, 21, 64),
    darkSapphire: rgb(12, 36, 97),
    forestBlues: rgb(10, 61, 98),
    reefEncounter: rgb(7, 153, 146),

    palette: [
        Fr.flatFlesh,
        Fr.melonMelody,
        Fr.livid,
        Fr.spray,
        Fr.paradiseGreen,
        Fr.squashBlossom,
        Fr.mandarinRed,
        Fr.azraqBlue,
        Fr.dupain,
        Fr.auroraGreen,
        Fr.icelandPoppy,
        Fr.tomatoRed,
        Fr.yueGuangLanBlue,
        Fr.goodSamaritan,
        Fr.waterfall,
        Fr.carrotOrange,
        Fr.jalapenoRed,
        Fr.darkSapphire,
        Fr.forestBlues,
        Fr.reefEncounter,
    ]
};

/**
 * German Palette by Martin David      from 🇩🇪
 * https://flatuicolors.com/palette/de
 */
const De = {
    fusionRed: rgb(252, 92, 101),
    orangeHibiscus: rgb(253, 150, 68),
    flirtatious: rgb(254, 211, 48),
    reptileGreen: rgb(38, 222, 129),
    maximumBlueGreen: rgb(43, 203, 186),
    desire: rgb(235, 59, 90),
    beniukonBronze: rgb(250, 130, 49),
    nycTaxi: rgb(247, 183, 49),
    algalFuel: rgb(32, 191, 107),
    turquoiseTopaz: rgb(15, 185, 177),
    highBlue: rgb(69, 170, 242),
    c64Ntsc: rgb(75, 123, 236),
    lighterPurple: rgb(165, 94, 234),
    twinkleBlue: rgb(209, 216, 224),
    blueGrey: rgb(119, 140, 163),
    boyzone: rgb(45, 152, 218),
    royalBlue: rgb(56, 103, 214),
    gloomyPurple: rgb(136, 84, 208),
    innuendo: rgb(165, 177, 194),
    blueHorizon: rgb(75, 101, 132),

    palette: [
        De.fusionRed,
        De.orangeHibiscus,
        De.flirtatious,
        De.reptileGreen,
        De.maximumBlueGreen,
        De.desire,
        De.beniukonBronze,
        De.nycTaxi,
        De.algalFuel,
        De.turquoiseTopaz,
        De.highBlue,
        De.c64Ntsc,
        De.lighterPurple,
        De.twinkleBlue,
        De.blueGrey,
        De.boyzone,
        De.royalBlue,
        De.gloomyPurple,
        De.innuendo,
        De.blueHorizon,
    ]
};

/**
 * Indian Palette by Ranganath Krishnamani      from 🇮🇳
 * https://flatuicolors.com/palette/in
 */
const In = {
    orchidOrange: rgb(254, 164, 127),
    spiroDiscoBall: rgb(37, 204, 247),
    honeyGlow: rgb(234, 181, 67),
    sweetGarden: rgb(85, 230, 193),
    fallingStar: rgb(202, 211, 200),
    richGardenia: rgb(249, 127, 81),
    clearChill: rgb(27, 156, 252),
    sarawakWhitePepper: rgb(248, 239, 186),
    keppel: rgb(88, 177, 159),
    shipsOfficer: rgb(44, 58, 71),
    fieryFuchsia: rgb(179, 55, 113),
    bluebell: rgb(59, 59, 152),
    georgiaPeach: rgb(253, 114, 114),
    oasisStream: rgb(154, 236, 219),
    brightUbe: rgb(214, 162, 232),
    magentaPurple: rgb(109, 33, 79),
    endingNavyBlue: rgb(24, 44, 97),
    sasquatchSocks: rgb(252, 66, 123),
    pineGlade: rgb(189, 197, 129),
    highlighterLavender: rgb(130, 88, 159),

    palette: [
        In.orchidOrange,
        In.spiroDiscoBall,
        In.honeyGlow,
        In.sweetGarden,
        In.fallingStar,
        In.richGardenia,
        In.clearChill,
        In.sarawakWhitePepper,
        In.keppel,
        In.shipsOfficer,
        In.fieryFuchsia,
        In.bluebell,
        In.georgiaPeach,
        In.oasisStream,
        In.brightUbe,
        In.magentaPurple,
        In.endingNavyBlue,
        In.sasquatchSocks,
        In.pineGlade,
        In.highlighterLavender,
    ]
};

/**
 * Russian Palette by Alexander Zaytsev      from 🇷🇺
 * https://flatuicolors.com/palette/ru
 */
const Ru = {
    creamyPeach: rgb(243, 166, 131),
    rosyHighlight: rgb(247, 215, 148),
    softBlue: rgb(119, 139, 235),
    brewedMustard: rgb(231, 127, 103),
    oldGeranium: rgb(207, 106, 135),
    sawtoothAak: rgb(241, 144, 102),
    summertime: rgb(245, 205, 121),
    cornflower: rgb(84, 109, 229),
    tigerlily: rgb(225, 95, 65),
    deepRose: rgb(196, 69, 105),
    purpleMountainMajesty: rgb(120, 111, 166),
    roguePink: rgb(248, 165, 194),
    squeaky: rgb(99, 205, 218),
    appleValley: rgb(234, 134, 133),
    pencilLead: rgb(89, 98, 117),
    purpleCorallite: rgb(87, 75, 144),
    flamingoPink: rgb(247, 143, 179),
    blueCuracao: rgb(61, 193, 211),
    porcelainRose: rgb(230, 103, 103),
    biscay: rgb(48, 57, 82),

    palette: [
        Ru.creamyPeach,
        Ru.rosyHighlight,
        Ru.softBlue,
        Ru.brewedMustard,
        Ru.oldGeranium,
        Ru.sawtoothAak,
        Ru.summertime,
        Ru.cornflower,
        Ru.tigerlily,
        Ru.deepRose,
        Ru.purpleMountainMajesty,
        Ru.roguePink,
        Ru.squeaky,
        Ru.appleValley,
        Ru.pencilLead,
        Ru.purpleCorallite,
        Ru.flamingoPink,
        Ru.blueCuracao,
        Ru.porcelainRose,
        Ru.biscay,
    ]
};

/**
 * Spanish Palette by Miguel Camacho      from 🇪🇸
 * https://flatuicolors.com/palette/es
 */
const Es = {
    jacksonsPurple: rgb(64, 64, 122),
    c64Purple: rgb(112, 111, 211),
    swanWhite: rgb(247, 241, 227),
    summerSky: rgb(52, 172, 224),
    celestialGreen: rgb(51, 217, 178),
    luckyPoint: rgb(44, 44, 84),
    liberty: rgb(71, 71, 135),
    hotStone: rgb(170, 166, 157),
    devilBlue: rgb(34, 112, 147),
    palmSpringsSplash: rgb(33, 140, 116),
    fluorescentRed: rgb(255, 82, 82),
    syntheticPumpkin: rgb(255, 121, 63),
    crocodileTooth: rgb(209, 204, 192),
    mandarinSorbet: rgb(255, 177, 66),
    spicedButternut: rgb(255, 218, 121),
    eyeOfNewt: rgb(179, 57, 57),
    chileanFire: rgb(205, 97, 51),
    greyPorcelain: rgb(132, 129, 122),
    alamedaOchre: rgb(204, 142, 53),
    desert: rgb(204, 174, 98),

    palette: [
        Es.jacksonsPurple,
        Es.c64Purple,
        Es.swanWhite,
        Es.summerSky,
        Es.celestialGreen,
        Es.luckyPoint,
        Es.liberty,
        Es.hotStone,
        Es.devilBlue,
        Es.palmSpringsSplash,
        Es.fluorescentRed,
        Es.syntheticPumpkin,
        Es.crocodileTooth,
        Es.mandarinSorbet,
        Es.spicedButternut,
        Es.eyeOfNewt,
        Es.chileanFire,
        Es.greyPorcelain,
        Es.alamedaOchre,
        Es.desert,
    ]
};

/**
 * Swedish Palette by Jesper Dahlqvist      from 🇸🇪
 * https://flatuicolors.com/palette/se
 */
const Se = {
    highlighterPink: rgb(239, 87, 119),
    darkPeriwinkle: rgb(87, 95, 207),
    megaman: rgb(75, 207, 250),
    freshTurquoise: rgb(52, 231, 228),
    mintyGreen: rgb(11, 232, 129),
    sizzlingRed: rgb(245, 59, 87),
    freeSpeechBlue: rgb(60, 64, 198),
    spiroDiscoBall: rgb(15, 188, 249),
    jadeDust: rgb(0, 216, 214),
    greenTeal: rgb(5, 196, 107),
    narenjiOrange: rgb(255, 192, 72),
    yrielYellow: rgb(255, 221, 89),
    sunsetOrange: rgb(255, 94, 87),
    hintOfElusiveBlue: rgb(210, 218, 226),
    goodNight: rgb(72, 84, 96),
    chromeYellow: rgb(255, 168, 1),
    vibrantYellow: rgb(255, 211, 42),
    redOrange: rgb(255, 63, 52),
    londonSquare: rgb(128, 142, 155),
    blackPearl: rgb(30, 39, 46),

    palette: [
        Se.highlighterPink,
        Se.darkPeriwinkle,
        Se.megaman,
        Se.freshTurquoise,
        Se.mintyGreen,
        Se.sizzlingRed,
        Se.freeSpeechBlue,
        Se.spiroDiscoBall,
        Se.jadeDust,
        Se.greenTeal,
        Se.narenjiOrange,
        Se.yrielYellow,
        Se.sunsetOrange,
        Se.hintOfElusiveBlue,
        Se.goodNight,
        Se.chromeYellow,
        Se.vibrantYellow,
        Se.redOrange,
        Se.londonSquare,
        Se.blackPearl,
    ]
};

/**
 * Turkish Palette by Tamer Köseli      from 🇹🇷
 * https://flatuicolors.com/palette/tr
 */
const Tr = {
    brightLilac: rgb(205, 132, 241),
    prettyPlease: rgb(255, 204, 204),
    lightRed: rgb(255, 77, 77),
    mandarinSorbet: rgb(255, 175, 64),
    unmellowYellow: rgb(255, 250, 101),
    lightPurple: rgb(197, 108, 240),
    youngSalmon: rgb(255, 184, 184),
    redOrange: rgb(255, 56, 56),
    radiantYellow: rgb(255, 159, 26),
    dornYellow: rgb(255, 242, 0),
    wintergreen: rgb(50, 255, 126),
    electricBlue: rgb(126, 255, 245),
    neonBlue: rgb(24, 220, 255),
    lightSlateBlue: rgb(125, 95, 255),
    shadowedSteel: rgb(75, 75, 75),
    weirdGreen: rgb(58, 227, 116),
    hammamBlue: rgb(103, 230, 220),
    spiroDiscoBall: rgb(23, 192, 235),
    lightIndigo: rgb(113, 88, 226),
    balticSea: rgb(61, 61, 61),

    palette: [
        Tr.brightLilac,
        Tr.prettyPlease,
        Tr.lightRed,
        Tr.mandarinSorbet,
        Tr.unmellowYellow,
        Tr.lightPurple,
        Tr.youngSalmon,
        Tr.redOrange,
        Tr.radiantYellow,
        Tr.dornYellow,
        Tr.wintergreen,
        Tr.electricBlue,
        Tr.neonBlue,
        Tr.lightSlateBlue,
        Tr.shadowedSteel,
        Tr.weirdGreen,
        Tr.hammamBlue,
        Tr.spiroDiscoBall,
        Tr.lightIndigo,
        Tr.balticSea,
    ]
};

const FlatUIColors = {
    Defo,
    Us,
    Au,
    Gb,
    Ca,
    Cn,
    Nl,
    Fr,
    De,
    In,
    Ru,
    Es,
    Se,
    Tr,
};
export default FlatUIColors;
