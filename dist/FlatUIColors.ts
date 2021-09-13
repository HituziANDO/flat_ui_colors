export class FlatUIColor {
    /**
     * Red
     * 0-255
     */
    readonly red: number
    /**
     * Green
     * 0-255
     */
    readonly green: number
    /**
     * Blue
     * 0-255
     */
    readonly blue: number

    constructor(red: number, green: number, blue: number) {
        this.red = red
        this.green = green
        this.blue = blue
    }

    /**
     * Returns rgb(r, g, b).
     */
    rgbAsCSS(): string {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }

    /**
     * Returns rgba(r, g, b, a).
     * @param alpha 0-1.0
     */
    rgbaAsCSS(alpha: number): string {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${alpha})`
    }
}

const rgb = (r: number, g: number, b: number) => new FlatUIColor(r, g, b)

/**
 * Flat UI Palette v1 by Flat UI Colors
 * https://flatuicolors.com/palette/defo
 */
class Defo {
    static readonly turquoise = rgb(26, 188, 156)
    static readonly emerald = rgb(46, 204, 113)
    static readonly peterRiver = rgb(52, 152, 219)
    static readonly amethyst = rgb(155, 89, 182)
    static readonly wetAsphalt = rgb(52, 73, 94)
    static readonly greenSea = rgb(22, 160, 133)
    static readonly nephritis = rgb(39, 174, 96)
    static readonly belizeHole = rgb(41, 128, 185)
    static readonly wisteria = rgb(142, 68, 173)
    static readonly midnightBlue = rgb(44, 62, 80)
    static readonly sunFlower = rgb(241, 196, 15)
    static readonly carrot = rgb(230, 126, 34)
    static readonly alizarin = rgb(231, 76, 60)
    static readonly clouds = rgb(236, 240, 241)
    static readonly concrete = rgb(149, 165, 166)
    static readonly orange = rgb(243, 156, 18)
    static readonly pumpkin = rgb(211, 84, 0)
    static readonly pomegranate = rgb(192, 57, 43)
    static readonly silver = rgb(189, 195, 199)
    static readonly asbestos = rgb(127, 140, 141)

    static readonly palette = [
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
}

/**
 * American Palette by Kevin Yang      from 🇺🇸
 * https://flatuicolors.com/palette/us
 */
class Us {
    static readonly lightGreenishBlue = rgb(85, 239, 196)
    static readonly fadedPoster = rgb(129, 236, 236)
    static readonly greenDarnerTail = rgb(116, 185, 255)
    static readonly shyMoment = rgb(162, 155, 254)
    static readonly cityLights = rgb(223, 230, 233)
    static readonly mintLeaf = rgb(0, 184, 148)
    static readonly robinsEggBlue = rgb(0, 206, 201)
    static readonly electronBlue = rgb(9, 132, 227)
    static readonly exodusFruit = rgb(108, 92, 231)
    static readonly soothingBreeze = rgb(178, 190, 195)
    static readonly sourLemon = rgb(255, 234, 167)
    static readonly firstDate = rgb(250, 177, 160)
    static readonly pinkGlamour = rgb(255, 118, 117)
    static readonly pico8Pink = rgb(253, 121, 168)
    static readonly americanRiver = rgb(99, 110, 114)
    static readonly brightYarrow = rgb(253, 203, 110)
    static readonly orangeville = rgb(225, 112, 85)
    static readonly chiGong = rgb(214, 48, 49)
    static readonly prunusAvium = rgb(232, 67, 147)
    static readonly draculaOrchid = rgb(45, 52, 54)

    static readonly palette = [
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
}

/**
 * Aussie Palette by Kate Hoolahan      from 🇦🇺
 * https://flatuicolors.com/palette/au
 */
class Au {
    static readonly beekeeper = rgb(246, 229, 141)
    static readonly spicedNectarine = rgb(255, 190, 118)
    static readonly pinkGlamour = rgb(255, 121, 121)
    static readonly juneBud = rgb(186, 220, 88)
    static readonly coastalBreeze = rgb(223, 249, 251)
    static readonly turbo = rgb(249, 202, 36)
    static readonly quinceJelly = rgb(240, 147, 43)
    static readonly carminePink = rgb(235, 77, 75)
    static readonly pureApple = rgb(106, 176, 76)
    static readonly hintOfIcePack = rgb(199, 236, 238)
    static readonly middleBlue = rgb(126, 214, 223)
    static readonly heliotrope = rgb(224, 86, 253)
    static readonly exodusFruit = rgb(104, 109, 224)
    static readonly deepKoamaru = rgb(48, 51, 107)
    static readonly soaringEagle = rgb(149, 175, 192)
    static readonly greenlandGreen = rgb(34, 166, 179)
    static readonly steelPink = rgb(190, 46, 221)
    static readonly blurple = rgb(72, 52, 212)
    static readonly deepCove = rgb(19, 15, 64)
    static readonly wizardGrey = rgb(83, 92, 104)

    static readonly palette = [
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
}

/**
 * British Palette by Jan Losert      from 🇬🇧
 * https://flatuicolors.com/palette/gb
 */
class Gb {
    static readonly protossPylon = rgb(0, 168, 255)
    static readonly periwinkle = rgb(156, 136, 255)
    static readonly riseNShine = rgb(251, 197, 49)
    static readonly downloadProgress = rgb(76, 209, 55)
    static readonly seabrook = rgb(72, 126, 176)
    static readonly vanadylBlue = rgb(0, 151, 230)
    static readonly mattPurple = rgb(140, 122, 230)
    static readonly nanohanachaGold = rgb(225, 177, 44)
    static readonly skirretGreen = rgb(68, 189, 50)
    static readonly naval = rgb(64, 115, 158)
    static readonly nasturcianFlower = rgb(232, 65, 24)
    static readonly lynxWhite = rgb(245, 246, 250)
    static readonly blueberrySoda = rgb(127, 143, 166)
    static readonly mazarineBlue = rgb(39, 60, 117)
    static readonly blueNights = rgb(53, 59, 72)
    static readonly harleyDavidsonOrange = rgb(194, 54, 22)
    static readonly hintOfPensive = rgb(220, 221, 225)
    static readonly chainGangGrey = rgb(113, 128, 147)
    static readonly picoVoid = rgb(25, 42, 86)
    static readonly electromagnetic = rgb(47, 54, 64)

    static readonly palette = [
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
}

/**
 * Canadian Palette by Dmitri Litvinov      from 🇨🇦
 * https://flatuicolors.com/palette/ca
 */
class Ca {
    static readonly jigglypuff = rgb(255, 159, 243)
    static readonly casandoraYellow = rgb(254, 202, 87)
    static readonly pastelRed = rgb(255, 107, 107)
    static readonly megaman = rgb(72, 219, 251)
    static readonly wildCaribbeanGreen = rgb(29, 209, 161)
    static readonly lianHongLotusPink = rgb(243, 104, 224)
    static readonly doubleDragonSkin = rgb(255, 159, 67)
    static readonly amour = rgb(238, 82, 83)
    static readonly cyanite = rgb(10, 189, 227)
    static readonly darkMountainMeadow = rgb(16, 172, 132)
    static readonly jadeDust = rgb(0, 210, 211)
    static readonly joustBlue = rgb(84, 160, 255)
    static readonly nasuPurple = rgb(95, 39, 205)
    static readonly lightBlueBallerina = rgb(200, 214, 229)
    static readonly fuelTown = rgb(87, 101, 116)
    static readonly aquaVelvet = rgb(1, 163, 164)
    static readonly bleuDeFrance = rgb(46, 134, 222)
    static readonly bluebell = rgb(52, 31, 151)
    static readonly stormPetrel = rgb(131, 149, 167)
    static readonly imperialPrimer = rgb(34, 47, 62)

    static readonly palette = [
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
}

/**
 * Chinese Palette by Wenjun      from 🇨🇳
 * https://flatuicolors.com/palette/cn
 */
class Cn {
    static readonly goldenSand = rgb(236, 204, 104)
    static readonly coral = rgb(255, 127, 80)
    static readonly wildWatermelon = rgb(255, 107, 129)
    static readonly peace = rgb(164, 176, 190)
    static readonly grisaille = rgb(87, 96, 111)
    static readonly orange = rgb(255, 165, 2)
    static readonly bruschettaTomato = rgb(255, 99, 72)
    static readonly watermelon = rgb(255, 71, 87)
    static readonly bayWharf = rgb(116, 125, 140)
    static readonly prestigeBlue = rgb(47, 53, 66)
    static readonly limeSoap = rgb(123, 237, 159)
    static readonly frenchSkyBlue = rgb(112, 161, 255)
    static readonly saturatedSky = rgb(83, 82, 237)
    static readonly white = rgb(255, 255, 255)
    static readonly cityLights = rgb(223, 228, 234)
    static readonly ufoGreen = rgb(46, 213, 115)
    static readonly clearChill = rgb(30, 144, 255)
    static readonly brightGreek = rgb(55, 66, 250)
    static readonly antiFlashWhite = rgb(241, 242, 246)
    static readonly twinkleBlue = rgb(206, 214, 224)

    static readonly palette = [
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
}

/**
 * Dutch Palette by Jeroen Van Eerden      from 🇳🇱
 * https://flatuicolors.com/palette/nl
 */
class Nl {
    static readonly sunflower = rgb(255, 195, 18)
    static readonly energos = rgb(196, 229, 56)
    static readonly blueMartina = rgb(18, 203, 196)
    static readonly lavenderRose = rgb(253, 167, 223)
    static readonly baraRed = rgb(237, 76, 103)
    static readonly radiantYellow = rgb(247, 159, 31)
    static readonly androidGreen = rgb(163, 203, 56)
    static readonly mediterraneanSea = rgb(18, 137, 167)
    static readonly lavenderTea = rgb(217, 128, 250)
    static readonly veryBerry = rgb(181, 52, 113)
    static readonly puffinsBill = rgb(238, 90, 36)
    static readonly pixelatedGrass = rgb(0, 148, 50)
    static readonly merchantMarineBlue = rgb(6, 82, 221)
    static readonly forgottenPurple = rgb(153, 128, 250)
    static readonly hollyhock = rgb(131, 52, 113)
    static readonly redPigment = rgb(234, 32, 39)
    static readonly turkishAqua = rgb(0, 98, 102)
    static readonly _20000LeaguesUnderTheSea = rgb(27, 20, 100)
    static readonly circumorbitalRing = rgb(87, 88, 187)
    static readonly magentaPurple = rgb(111, 30, 81)

    static readonly palette = [
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
}

/**
 * French Palette by Léa Poisson      from 🇫🇷
 * https://flatuicolors.com/palette/fr
 */
class Fr {
    static readonly flatFlesh = rgb(250, 211, 144)
    static readonly melonMelody = rgb(248, 194, 145)
    static readonly livid = rgb(106, 137, 204)
    static readonly spray = rgb(130, 204, 221)
    static readonly paradiseGreen = rgb(184, 233, 148)
    static readonly squashBlossom = rgb(246, 185, 59)
    static readonly mandarinRed = rgb(229, 80, 57)
    static readonly azraqBlue = rgb(74, 105, 189)
    static readonly dupain = rgb(96, 163, 188)
    static readonly auroraGreen = rgb(120, 224, 143)
    static readonly icelandPoppy = rgb(250, 152, 58)
    static readonly tomatoRed = rgb(235, 47, 6)
    static readonly yueGuangLanBlue = rgb(30, 55, 153)
    static readonly goodSamaritan = rgb(60, 99, 130)
    static readonly waterfall = rgb(56, 173, 169)
    static readonly carrotOrange = rgb(229, 142, 38)
    static readonly jalapenoRed = rgb(183, 21, 64)
    static readonly darkSapphire = rgb(12, 36, 97)
    static readonly forestBlues = rgb(10, 61, 98)
    static readonly reefEncounter = rgb(7, 153, 146)

    static readonly palette = [
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
}

/**
 * German Palette by Martin David      from 🇩🇪
 * https://flatuicolors.com/palette/de
 */
class De {
    static readonly fusionRed = rgb(252, 92, 101)
    static readonly orangeHibiscus = rgb(253, 150, 68)
    static readonly flirtatious = rgb(254, 211, 48)
    static readonly reptileGreen = rgb(38, 222, 129)
    static readonly maximumBlueGreen = rgb(43, 203, 186)
    static readonly desire = rgb(235, 59, 90)
    static readonly beniukonBronze = rgb(250, 130, 49)
    static readonly nycTaxi = rgb(247, 183, 49)
    static readonly algalFuel = rgb(32, 191, 107)
    static readonly turquoiseTopaz = rgb(15, 185, 177)
    static readonly highBlue = rgb(69, 170, 242)
    static readonly c64Ntsc = rgb(75, 123, 236)
    static readonly lighterPurple = rgb(165, 94, 234)
    static readonly twinkleBlue = rgb(209, 216, 224)
    static readonly blueGrey = rgb(119, 140, 163)
    static readonly boyzone = rgb(45, 152, 218)
    static readonly royalBlue = rgb(56, 103, 214)
    static readonly gloomyPurple = rgb(136, 84, 208)
    static readonly innuendo = rgb(165, 177, 194)
    static readonly blueHorizon = rgb(75, 101, 132)

    static readonly palette = [
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
}

/**
 * Indian Palette by Ranganath Krishnamani      from 🇮🇳
 * https://flatuicolors.com/palette/in
 */
class In {
    static readonly orchidOrange = rgb(254, 164, 127)
    static readonly spiroDiscoBall = rgb(37, 204, 247)
    static readonly honeyGlow = rgb(234, 181, 67)
    static readonly sweetGarden = rgb(85, 230, 193)
    static readonly fallingStar = rgb(202, 211, 200)
    static readonly richGardenia = rgb(249, 127, 81)
    static readonly clearChill = rgb(27, 156, 252)
    static readonly sarawakWhitePepper = rgb(248, 239, 186)
    static readonly keppel = rgb(88, 177, 159)
    static readonly shipsOfficer = rgb(44, 58, 71)
    static readonly fieryFuchsia = rgb(179, 55, 113)
    static readonly bluebell = rgb(59, 59, 152)
    static readonly georgiaPeach = rgb(253, 114, 114)
    static readonly oasisStream = rgb(154, 236, 219)
    static readonly brightUbe = rgb(214, 162, 232)
    static readonly magentaPurple = rgb(109, 33, 79)
    static readonly endingNavyBlue = rgb(24, 44, 97)
    static readonly sasquatchSocks = rgb(252, 66, 123)
    static readonly pineGlade = rgb(189, 197, 129)
    static readonly highlighterLavender = rgb(130, 88, 159)

    static readonly palette = [
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
}

/**
 * Russian Palette by Alexander Zaytsev      from 🇷🇺
 * https://flatuicolors.com/palette/ru
 */
class Ru {
    static readonly creamyPeach = rgb(243, 166, 131)
    static readonly rosyHighlight = rgb(247, 215, 148)
    static readonly softBlue = rgb(119, 139, 235)
    static readonly brewedMustard = rgb(231, 127, 103)
    static readonly oldGeranium = rgb(207, 106, 135)
    static readonly sawtoothAak = rgb(241, 144, 102)
    static readonly summertime = rgb(245, 205, 121)
    static readonly cornflower = rgb(84, 109, 229)
    static readonly tigerlily = rgb(225, 95, 65)
    static readonly deepRose = rgb(196, 69, 105)
    static readonly purpleMountainMajesty = rgb(120, 111, 166)
    static readonly roguePink = rgb(248, 165, 194)
    static readonly squeaky = rgb(99, 205, 218)
    static readonly appleValley = rgb(234, 134, 133)
    static readonly pencilLead = rgb(89, 98, 117)
    static readonly purpleCorallite = rgb(87, 75, 144)
    static readonly flamingoPink = rgb(247, 143, 179)
    static readonly blueCuracao = rgb(61, 193, 211)
    static readonly porcelainRose = rgb(230, 103, 103)
    static readonly biscay = rgb(48, 57, 82)

    static readonly palette = [
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
}

/**
 * Spanish Palette by Miguel Camacho      from 🇪🇸
 * https://flatuicolors.com/palette/es
 */
class Es {
    static readonly jacksonsPurple = rgb(64, 64, 122)
    static readonly c64Purple = rgb(112, 111, 211)
    static readonly swanWhite = rgb(247, 241, 227)
    static readonly summerSky = rgb(52, 172, 224)
    static readonly celestialGreen = rgb(51, 217, 178)
    static readonly luckyPoint = rgb(44, 44, 84)
    static readonly liberty = rgb(71, 71, 135)
    static readonly hotStone = rgb(170, 166, 157)
    static readonly devilBlue = rgb(34, 112, 147)
    static readonly palmSpringsSplash = rgb(33, 140, 116)
    static readonly fluorescentRed = rgb(255, 82, 82)
    static readonly syntheticPumpkin = rgb(255, 121, 63)
    static readonly crocodileTooth = rgb(209, 204, 192)
    static readonly mandarinSorbet = rgb(255, 177, 66)
    static readonly spicedButternut = rgb(255, 218, 121)
    static readonly eyeOfNewt = rgb(179, 57, 57)
    static readonly chileanFire = rgb(205, 97, 51)
    static readonly greyPorcelain = rgb(132, 129, 122)
    static readonly alamedaOchre = rgb(204, 142, 53)
    static readonly desert = rgb(204, 174, 98)

    static readonly palette = [
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
}

/**
 * Swedish Palette by Jesper Dahlqvist      from 🇸🇪
 * https://flatuicolors.com/palette/se
 */
class Se {
    static readonly highlighterPink = rgb(239, 87, 119)
    static readonly darkPeriwinkle = rgb(87, 95, 207)
    static readonly megaman = rgb(75, 207, 250)
    static readonly freshTurquoise = rgb(52, 231, 228)
    static readonly mintyGreen = rgb(11, 232, 129)
    static readonly sizzlingRed = rgb(245, 59, 87)
    static readonly freeSpeechBlue = rgb(60, 64, 198)
    static readonly spiroDiscoBall = rgb(15, 188, 249)
    static readonly jadeDust = rgb(0, 216, 214)
    static readonly greenTeal = rgb(5, 196, 107)
    static readonly narenjiOrange = rgb(255, 192, 72)
    static readonly yrielYellow = rgb(255, 221, 89)
    static readonly sunsetOrange = rgb(255, 94, 87)
    static readonly hintOfElusiveBlue = rgb(210, 218, 226)
    static readonly goodNight = rgb(72, 84, 96)
    static readonly chromeYellow = rgb(255, 168, 1)
    static readonly vibrantYellow = rgb(255, 211, 42)
    static readonly redOrange = rgb(255, 63, 52)
    static readonly londonSquare = rgb(128, 142, 155)
    static readonly blackPearl = rgb(30, 39, 46)

    static readonly palette = [
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
}

/**
 * Turkish Palette by Tamer Köseli      from 🇹🇷
 * https://flatuicolors.com/palette/tr
 */
class Tr {
    static readonly brightLilac = rgb(205, 132, 241)
    static readonly prettyPlease = rgb(255, 204, 204)
    static readonly lightRed = rgb(255, 77, 77)
    static readonly mandarinSorbet = rgb(255, 175, 64)
    static readonly unmellowYellow = rgb(255, 250, 101)
    static readonly lightPurple = rgb(197, 108, 240)
    static readonly youngSalmon = rgb(255, 184, 184)
    static readonly redOrange = rgb(255, 56, 56)
    static readonly radiantYellow = rgb(255, 159, 26)
    static readonly dornYellow = rgb(255, 242, 0)
    static readonly wintergreen = rgb(50, 255, 126)
    static readonly electricBlue = rgb(126, 255, 245)
    static readonly neonBlue = rgb(24, 220, 255)
    static readonly lightSlateBlue = rgb(125, 95, 255)
    static readonly shadowedSteel = rgb(75, 75, 75)
    static readonly weirdGreen = rgb(58, 227, 116)
    static readonly hammamBlue = rgb(103, 230, 220)
    static readonly spiroDiscoBall = rgb(23, 192, 235)
    static readonly lightIndigo = rgb(113, 88, 226)
    static readonly balticSea = rgb(61, 61, 61)

    static readonly palette = [
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
}

export default class FlatUIColors {
    static readonly Defo = Defo
    static readonly Us = Us
    static readonly Au = Au
    static readonly Gb = Gb
    static readonly Ca = Ca
    static readonly Cn = Cn
    static readonly Nl = Nl
    static readonly Fr = Fr
    static readonly De = De
    static readonly In = In
    static readonly Ru = Ru
    static readonly Es = Es
    static readonly Se = Se
    static readonly Tr = Tr
}
