#if os(OSX)
import AppKit
public typealias FUCColor = NSColor
#elseif os(iOS)
import UIKit
public typealias FUCColor = UIColor
#endif

/// Returns new color object.
///
/// - Parameters:
///   - red: A red. The range of its value is 0 to 255.
///   - green: A green. The range of its value is 0 to 255.
///   - blue: A blue. The range of its value is 0 to 255.
/// - Returns: New color object.
public func rgb(red: CGFloat, green: CGFloat, blue: CGFloat) -> FUCColor {
    FUCColor(red: red / 255.0, green: green / 255.0, blue: blue / 255.0, alpha: 1.0)
}

public struct FlatUIColors {
    /// Flat UI Palette v1 by Flat UI Colors
    /// https://flatuicolors.com/palette/defo
    public struct Defo {
        public static let turquoise = rgb(red: 26, green: 188, blue: 156)
        public static let emerald = rgb(red: 46, green: 204, blue: 113)
        public static let peterRiver = rgb(red: 52, green: 152, blue: 219)
        public static let amethyst = rgb(red: 155, green: 89, blue: 182)
        public static let wetAsphalt = rgb(red: 52, green: 73, blue: 94)
        public static let greenSea = rgb(red: 22, green: 160, blue: 133)
        public static let nephritis = rgb(red: 39, green: 174, blue: 96)
        public static let belizeHole = rgb(red: 41, green: 128, blue: 185)
        public static let wisteria = rgb(red: 142, green: 68, blue: 173)
        public static let midnightBlue = rgb(red: 44, green: 62, blue: 80)
        public static let sunFlower = rgb(red: 241, green: 196, blue: 15)
        public static let carrot = rgb(red: 230, green: 126, blue: 34)
        public static let alizarin = rgb(red: 231, green: 76, blue: 60)
        public static let clouds = rgb(red: 236, green: 240, blue: 241)
        public static let concrete = rgb(red: 149, green: 165, blue: 166)
        public static let orange = rgb(red: 243, green: 156, blue: 18)
        public static let pumpkin = rgb(red: 211, green: 84, blue: 0)
        public static let pomegranate = rgb(red: 192, green: 57, blue: 43)
        public static let silver = rgb(red: 189, green: 195, blue: 199)
        public static let asbestos = rgb(red: 127, green: 140, blue: 141)

        public static let palette = [
            Self.turquoise,
            Self.emerald,
            Self.peterRiver,
            Self.amethyst,
            Self.wetAsphalt,
            Self.greenSea,
            Self.nephritis,
            Self.belizeHole,
            Self.wisteria,
            Self.midnightBlue,
            Self.sunFlower,
            Self.carrot,
            Self.alizarin,
            Self.clouds,
            Self.concrete,
            Self.orange,
            Self.pumpkin,
            Self.pomegranate,
            Self.silver,
            Self.asbestos,
        ]
    }

    /// American Palette by Kevin Yang      from 🇺🇸
    /// https://flatuicolors.com/palette/us
    public struct Us {
        public static let lightGreenishBlue = rgb(red: 85, green: 239, blue: 196)
        public static let fadedPoster = rgb(red: 129, green: 236, blue: 236)
        public static let greenDarnerTail = rgb(red: 116, green: 185, blue: 255)
        public static let shyMoment = rgb(red: 162, green: 155, blue: 254)
        public static let cityLights = rgb(red: 223, green: 230, blue: 233)
        public static let mintLeaf = rgb(red: 0, green: 184, blue: 148)
        public static let robinsEggBlue = rgb(red: 0, green: 206, blue: 201)
        public static let electronBlue = rgb(red: 9, green: 132, blue: 227)
        public static let exodusFruit = rgb(red: 108, green: 92, blue: 231)
        public static let soothingBreeze = rgb(red: 178, green: 190, blue: 195)
        public static let sourLemon = rgb(red: 255, green: 234, blue: 167)
        public static let firstDate = rgb(red: 250, green: 177, blue: 160)
        public static let pinkGlamour = rgb(red: 255, green: 118, blue: 117)
        public static let pico8Pink = rgb(red: 253, green: 121, blue: 168)
        public static let americanRiver = rgb(red: 99, green: 110, blue: 114)
        public static let brightYarrow = rgb(red: 253, green: 203, blue: 110)
        public static let orangeville = rgb(red: 225, green: 112, blue: 85)
        public static let chiGong = rgb(red: 214, green: 48, blue: 49)
        public static let prunusAvium = rgb(red: 232, green: 67, blue: 147)
        public static let draculaOrchid = rgb(red: 45, green: 52, blue: 54)

        public static let palette = [
            Self.lightGreenishBlue,
            Self.fadedPoster,
            Self.greenDarnerTail,
            Self.shyMoment,
            Self.cityLights,
            Self.mintLeaf,
            Self.robinsEggBlue,
            Self.electronBlue,
            Self.exodusFruit,
            Self.soothingBreeze,
            Self.sourLemon,
            Self.firstDate,
            Self.pinkGlamour,
            Self.pico8Pink,
            Self.americanRiver,
            Self.brightYarrow,
            Self.orangeville,
            Self.chiGong,
            Self.prunusAvium,
            Self.draculaOrchid,
        ]
    }

    /// Aussie Palette by Kate Hoolahan      from 🇦🇺
    /// https://flatuicolors.com/palette/au
    public struct Au {
        public static let beekeeper = rgb(red: 246, green: 229, blue: 141)
        public static let spicedNectarine = rgb(red: 255, green: 190, blue: 118)
        public static let pinkGlamour = rgb(red: 255, green: 121, blue: 121)
        public static let juneBud = rgb(red: 186, green: 220, blue: 88)
        public static let coastalBreeze = rgb(red: 223, green: 249, blue: 251)
        public static let turbo = rgb(red: 249, green: 202, blue: 36)
        public static let quinceJelly = rgb(red: 240, green: 147, blue: 43)
        public static let carminePink = rgb(red: 235, green: 77, blue: 75)
        public static let pureApple = rgb(red: 106, green: 176, blue: 76)
        public static let hintOfIcePack = rgb(red: 199, green: 236, blue: 238)
        public static let middleBlue = rgb(red: 126, green: 214, blue: 223)
        public static let heliotrope = rgb(red: 224, green: 86, blue: 253)
        public static let exodusFruit = rgb(red: 104, green: 109, blue: 224)
        public static let deepKoamaru = rgb(red: 48, green: 51, blue: 107)
        public static let soaringEagle = rgb(red: 149, green: 175, blue: 192)
        public static let greenlandGreen = rgb(red: 34, green: 166, blue: 179)
        public static let steelPink = rgb(red: 190, green: 46, blue: 221)
        public static let blurple = rgb(red: 72, green: 52, blue: 212)
        public static let deepCove = rgb(red: 19, green: 15, blue: 64)
        public static let wizardGrey = rgb(red: 83, green: 92, blue: 104)

        public static let palette = [
            Self.beekeeper,
            Self.spicedNectarine,
            Self.pinkGlamour,
            Self.juneBud,
            Self.coastalBreeze,
            Self.turbo,
            Self.quinceJelly,
            Self.carminePink,
            Self.pureApple,
            Self.hintOfIcePack,
            Self.middleBlue,
            Self.heliotrope,
            Self.exodusFruit,
            Self.deepKoamaru,
            Self.soaringEagle,
            Self.greenlandGreen,
            Self.steelPink,
            Self.blurple,
            Self.deepCove,
            Self.wizardGrey,
        ]
    }

    /// British Palette by Jan Losert      from 🇬🇧
    /// https://flatuicolors.com/palette/gb
    public struct Gb {
        public static let protossPylon = rgb(red: 0, green: 168, blue: 255)
        public static let periwinkle = rgb(red: 156, green: 136, blue: 255)
        public static let riseNShine = rgb(red: 251, green: 197, blue: 49)
        public static let downloadProgress = rgb(red: 76, green: 209, blue: 55)
        public static let seabrook = rgb(red: 72, green: 126, blue: 176)
        public static let vanadylBlue = rgb(red: 0, green: 151, blue: 230)
        public static let mattPurple = rgb(red: 140, green: 122, blue: 230)
        public static let nanohanachaGold = rgb(red: 225, green: 177, blue: 44)
        public static let skirretGreen = rgb(red: 68, green: 189, blue: 50)
        public static let naval = rgb(red: 64, green: 115, blue: 158)
        public static let nasturcianFlower = rgb(red: 232, green: 65, blue: 24)
        public static let lynxWhite = rgb(red: 245, green: 246, blue: 250)
        public static let blueberrySoda = rgb(red: 127, green: 143, blue: 166)
        public static let mazarineBlue = rgb(red: 39, green: 60, blue: 117)
        public static let blueNights = rgb(red: 53, green: 59, blue: 72)
        public static let harleyDavidsonOrange = rgb(red: 194, green: 54, blue: 22)
        public static let hintOfPensive = rgb(red: 220, green: 221, blue: 225)
        public static let chainGangGrey = rgb(red: 113, green: 128, blue: 147)
        public static let picoVoid = rgb(red: 25, green: 42, blue: 86)
        public static let electromagnetic = rgb(red: 47, green: 54, blue: 64)

        public static let palette = [
            Self.protossPylon,
            Self.periwinkle,
            Self.riseNShine,
            Self.downloadProgress,
            Self.seabrook,
            Self.vanadylBlue,
            Self.mattPurple,
            Self.nanohanachaGold,
            Self.skirretGreen,
            Self.naval,
            Self.nasturcianFlower,
            Self.lynxWhite,
            Self.blueberrySoda,
            Self.mazarineBlue,
            Self.blueNights,
            Self.harleyDavidsonOrange,
            Self.hintOfPensive,
            Self.chainGangGrey,
            Self.picoVoid,
            Self.electromagnetic,
        ]
    }

    /// Canadian Palette by Dmitri Litvinov      from 🇨🇦
    /// https://flatuicolors.com/palette/ca
    public struct Ca {
        public static let jigglypuff = rgb(red: 255, green: 159, blue: 243)
        public static let casandoraYellow = rgb(red: 254, green: 202, blue: 87)
        public static let pastelRed = rgb(red: 255, green: 107, blue: 107)
        public static let megaman = rgb(red: 72, green: 219, blue: 251)
        public static let wildCaribbeanGreen = rgb(red: 29, green: 209, blue: 161)
        public static let lianHongLotusPink = rgb(red: 243, green: 104, blue: 224)
        public static let doubleDragonSkin = rgb(red: 255, green: 159, blue: 67)
        public static let amour = rgb(red: 238, green: 82, blue: 83)
        public static let cyanite = rgb(red: 10, green: 189, blue: 227)
        public static let darkMountainMeadow = rgb(red: 16, green: 172, blue: 132)
        public static let jadeDust = rgb(red: 0, green: 210, blue: 211)
        public static let joustBlue = rgb(red: 84, green: 160, blue: 255)
        public static let nasuPurple = rgb(red: 95, green: 39, blue: 205)
        public static let lightBlueBallerina = rgb(red: 200, green: 214, blue: 229)
        public static let fuelTown = rgb(red: 87, green: 101, blue: 116)
        public static let aquaVelvet = rgb(red: 1, green: 163, blue: 164)
        public static let bleuDeFrance = rgb(red: 46, green: 134, blue: 222)
        public static let bluebell = rgb(red: 52, green: 31, blue: 151)
        public static let stormPetrel = rgb(red: 131, green: 149, blue: 167)
        public static let imperialPrimer = rgb(red: 34, green: 47, blue: 62)

        public static let palette = [
            Self.jigglypuff,
            Self.casandoraYellow,
            Self.pastelRed,
            Self.megaman,
            Self.wildCaribbeanGreen,
            Self.lianHongLotusPink,
            Self.doubleDragonSkin,
            Self.amour,
            Self.cyanite,
            Self.darkMountainMeadow,
            Self.jadeDust,
            Self.joustBlue,
            Self.nasuPurple,
            Self.lightBlueBallerina,
            Self.fuelTown,
            Self.aquaVelvet,
            Self.bleuDeFrance,
            Self.bluebell,
            Self.stormPetrel,
            Self.imperialPrimer,
        ]
    }

    /// Chinese Palette by Wenjun      from 🇨🇳
    /// https://flatuicolors.com/palette/cn
    public struct Cn {
        public static let goldenSand = rgb(red: 236, green: 204, blue: 104)
        public static let coral = rgb(red: 255, green: 127, blue: 80)
        public static let wildWatermelon = rgb(red: 255, green: 107, blue: 129)
        public static let peace = rgb(red: 164, green: 176, blue: 190)
        public static let grisaille = rgb(red: 87, green: 96, blue: 111)
        public static let orange = rgb(red: 255, green: 165, blue: 2)
        public static let bruschettaTomato = rgb(red: 255, green: 99, blue: 72)
        public static let watermelon = rgb(red: 255, green: 71, blue: 87)
        public static let bayWharf = rgb(red: 116, green: 125, blue: 140)
        public static let prestigeBlue = rgb(red: 47, green: 53, blue: 66)
        public static let limeSoap = rgb(red: 123, green: 237, blue: 159)
        public static let frenchSkyBlue = rgb(red: 112, green: 161, blue: 255)
        public static let saturatedSky = rgb(red: 83, green: 82, blue: 237)
        public static let white = rgb(red: 255, green: 255, blue: 255)
        public static let cityLights = rgb(red: 223, green: 228, blue: 234)
        public static let ufoGreen = rgb(red: 46, green: 213, blue: 115)
        public static let clearChill = rgb(red: 30, green: 144, blue: 255)
        public static let brightGreek = rgb(red: 55, green: 66, blue: 250)
        public static let antiFlashWhite = rgb(red: 241, green: 242, blue: 246)
        public static let twinkleBlue = rgb(red: 206, green: 214, blue: 224)

        public static let palette = [
            Self.goldenSand,
            Self.coral,
            Self.wildWatermelon,
            Self.peace,
            Self.grisaille,
            Self.orange,
            Self.bruschettaTomato,
            Self.watermelon,
            Self.bayWharf,
            Self.prestigeBlue,
            Self.limeSoap,
            Self.frenchSkyBlue,
            Self.saturatedSky,
            Self.white,
            Self.cityLights,
            Self.ufoGreen,
            Self.clearChill,
            Self.brightGreek,
            Self.antiFlashWhite,
            Self.twinkleBlue,
        ]
    }

    /// Dutch Palette by Jeroen Van Eerden      from 🇳🇱
    /// https://flatuicolors.com/palette/nl
    public struct Nl {
        public static let sunflower = rgb(red: 255, green: 195, blue: 18)
        public static let energos = rgb(red: 196, green: 229, blue: 56)
        public static let blueMartina = rgb(red: 18, green: 203, blue: 196)
        public static let lavenderRose = rgb(red: 253, green: 167, blue: 223)
        public static let baraRed = rgb(red: 237, green: 76, blue: 103)
        public static let radiantYellow = rgb(red: 247, green: 159, blue: 31)
        public static let androidGreen = rgb(red: 163, green: 203, blue: 56)
        public static let mediterraneanSea = rgb(red: 18, green: 137, blue: 167)
        public static let lavenderTea = rgb(red: 217, green: 128, blue: 250)
        public static let veryBerry = rgb(red: 181, green: 52, blue: 113)
        public static let puffinsBill = rgb(red: 238, green: 90, blue: 36)
        public static let pixelatedGrass = rgb(red: 0, green: 148, blue: 50)
        public static let merchantMarineBlue = rgb(red: 6, green: 82, blue: 221)
        public static let forgottenPurple = rgb(red: 153, green: 128, blue: 250)
        public static let hollyhock = rgb(red: 131, green: 52, blue: 113)
        public static let redPigment = rgb(red: 234, green: 32, blue: 39)
        public static let turkishAqua = rgb(red: 0, green: 98, blue: 102)
        public static let _20000LeaguesUnderTheSea = rgb(red: 27, green: 20, blue: 100)
        public static let circumorbitalRing = rgb(red: 87, green: 88, blue: 187)
        public static let magentaPurple = rgb(red: 111, green: 30, blue: 81)

        public static let palette = [
            Self.sunflower,
            Self.energos,
            Self.blueMartina,
            Self.lavenderRose,
            Self.baraRed,
            Self.radiantYellow,
            Self.androidGreen,
            Self.mediterraneanSea,
            Self.lavenderTea,
            Self.veryBerry,
            Self.puffinsBill,
            Self.pixelatedGrass,
            Self.merchantMarineBlue,
            Self.forgottenPurple,
            Self.hollyhock,
            Self.redPigment,
            Self.turkishAqua,
            Self._20000LeaguesUnderTheSea,
            Self.circumorbitalRing,
            Self.magentaPurple,
        ]
    }

    /// French Palette by Léa Poisson      from 🇫🇷
    /// https://flatuicolors.com/palette/fr
    public struct Fr {
        public static let flatFlesh = rgb(red: 250, green: 211, blue: 144)
        public static let melonMelody = rgb(red: 248, green: 194, blue: 145)
        public static let livid = rgb(red: 106, green: 137, blue: 204)
        public static let spray = rgb(red: 130, green: 204, blue: 221)
        public static let paradiseGreen = rgb(red: 184, green: 233, blue: 148)
        public static let squashBlossom = rgb(red: 246, green: 185, blue: 59)
        public static let mandarinRed = rgb(red: 229, green: 80, blue: 57)
        public static let azraqBlue = rgb(red: 74, green: 105, blue: 189)
        public static let dupain = rgb(red: 96, green: 163, blue: 188)
        public static let auroraGreen = rgb(red: 120, green: 224, blue: 143)
        public static let icelandPoppy = rgb(red: 250, green: 152, blue: 58)
        public static let tomatoRed = rgb(red: 235, green: 47, blue: 6)
        public static let yueGuangLanBlue = rgb(red: 30, green: 55, blue: 153)
        public static let goodSamaritan = rgb(red: 60, green: 99, blue: 130)
        public static let waterfall = rgb(red: 56, green: 173, blue: 169)
        public static let carrotOrange = rgb(red: 229, green: 142, blue: 38)
        public static let jalapenoRed = rgb(red: 183, green: 21, blue: 64)
        public static let darkSapphire = rgb(red: 12, green: 36, blue: 97)
        public static let forestBlues = rgb(red: 10, green: 61, blue: 98)
        public static let reefEncounter = rgb(red: 7, green: 153, blue: 146)

        public static let palette = [
            Self.flatFlesh,
            Self.melonMelody,
            Self.livid,
            Self.spray,
            Self.paradiseGreen,
            Self.squashBlossom,
            Self.mandarinRed,
            Self.azraqBlue,
            Self.dupain,
            Self.auroraGreen,
            Self.icelandPoppy,
            Self.tomatoRed,
            Self.yueGuangLanBlue,
            Self.goodSamaritan,
            Self.waterfall,
            Self.carrotOrange,
            Self.jalapenoRed,
            Self.darkSapphire,
            Self.forestBlues,
            Self.reefEncounter,
        ]
    }

    /// German Palette by Martin David      from 🇩🇪
    /// https://flatuicolors.com/palette/de
    public struct De {
        public static let fusionRed = rgb(red: 252, green: 92, blue: 101)
        public static let orangeHibiscus = rgb(red: 253, green: 150, blue: 68)
        public static let flirtatious = rgb(red: 254, green: 211, blue: 48)
        public static let reptileGreen = rgb(red: 38, green: 222, blue: 129)
        public static let maximumBlueGreen = rgb(red: 43, green: 203, blue: 186)
        public static let desire = rgb(red: 235, green: 59, blue: 90)
        public static let beniukonBronze = rgb(red: 250, green: 130, blue: 49)
        public static let nycTaxi = rgb(red: 247, green: 183, blue: 49)
        public static let algalFuel = rgb(red: 32, green: 191, blue: 107)
        public static let turquoiseTopaz = rgb(red: 15, green: 185, blue: 177)
        public static let highBlue = rgb(red: 69, green: 170, blue: 242)
        public static let c64Ntsc = rgb(red: 75, green: 123, blue: 236)
        public static let lighterPurple = rgb(red: 165, green: 94, blue: 234)
        public static let twinkleBlue = rgb(red: 209, green: 216, blue: 224)
        public static let blueGrey = rgb(red: 119, green: 140, blue: 163)
        public static let boyzone = rgb(red: 45, green: 152, blue: 218)
        public static let royalBlue = rgb(red: 56, green: 103, blue: 214)
        public static let gloomyPurple = rgb(red: 136, green: 84, blue: 208)
        public static let innuendo = rgb(red: 165, green: 177, blue: 194)
        public static let blueHorizon = rgb(red: 75, green: 101, blue: 132)

        public static let palette = [
            Self.fusionRed,
            Self.orangeHibiscus,
            Self.flirtatious,
            Self.reptileGreen,
            Self.maximumBlueGreen,
            Self.desire,
            Self.beniukonBronze,
            Self.nycTaxi,
            Self.algalFuel,
            Self.turquoiseTopaz,
            Self.highBlue,
            Self.c64Ntsc,
            Self.lighterPurple,
            Self.twinkleBlue,
            Self.blueGrey,
            Self.boyzone,
            Self.royalBlue,
            Self.gloomyPurple,
            Self.innuendo,
            Self.blueHorizon,
        ]
    }

    /// Indian Palette by Ranganath Krishnamani      from 🇮🇳
    /// https://flatuicolors.com/palette/in
    public struct In {
        public static let orchidOrange = rgb(red: 254, green: 164, blue: 127)
        public static let spiroDiscoBall = rgb(red: 37, green: 204, blue: 247)
        public static let honeyGlow = rgb(red: 234, green: 181, blue: 67)
        public static let sweetGarden = rgb(red: 85, green: 230, blue: 193)
        public static let fallingStar = rgb(red: 202, green: 211, blue: 200)
        public static let richGardenia = rgb(red: 249, green: 127, blue: 81)
        public static let clearChill = rgb(red: 27, green: 156, blue: 252)
        public static let sarawakWhitePepper = rgb(red: 248, green: 239, blue: 186)
        public static let keppel = rgb(red: 88, green: 177, blue: 159)
        public static let shipsOfficer = rgb(red: 44, green: 58, blue: 71)
        public static let fieryFuchsia = rgb(red: 179, green: 55, blue: 113)
        public static let bluebell = rgb(red: 59, green: 59, blue: 152)
        public static let georgiaPeach = rgb(red: 253, green: 114, blue: 114)
        public static let oasisStream = rgb(red: 154, green: 236, blue: 219)
        public static let brightUbe = rgb(red: 214, green: 162, blue: 232)
        public static let magentaPurple = rgb(red: 109, green: 33, blue: 79)
        public static let endingNavyBlue = rgb(red: 24, green: 44, blue: 97)
        public static let sasquatchSocks = rgb(red: 252, green: 66, blue: 123)
        public static let pineGlade = rgb(red: 189, green: 197, blue: 129)
        public static let highlighterLavender = rgb(red: 130, green: 88, blue: 159)

        public static let palette = [
            Self.orchidOrange,
            Self.spiroDiscoBall,
            Self.honeyGlow,
            Self.sweetGarden,
            Self.fallingStar,
            Self.richGardenia,
            Self.clearChill,
            Self.sarawakWhitePepper,
            Self.keppel,
            Self.shipsOfficer,
            Self.fieryFuchsia,
            Self.bluebell,
            Self.georgiaPeach,
            Self.oasisStream,
            Self.brightUbe,
            Self.magentaPurple,
            Self.endingNavyBlue,
            Self.sasquatchSocks,
            Self.pineGlade,
            Self.highlighterLavender,
        ]
    }

    /// Russian Palette by Alexander Zaytsev      from 🇷🇺
    /// https://flatuicolors.com/palette/ru
    public struct Ru {
        public static let creamyPeach = rgb(red: 243, green: 166, blue: 131)
        public static let rosyHighlight = rgb(red: 247, green: 215, blue: 148)
        public static let softBlue = rgb(red: 119, green: 139, blue: 235)
        public static let brewedMustard = rgb(red: 231, green: 127, blue: 103)
        public static let oldGeranium = rgb(red: 207, green: 106, blue: 135)
        public static let sawtoothAak = rgb(red: 241, green: 144, blue: 102)
        public static let summertime = rgb(red: 245, green: 205, blue: 121)
        public static let cornflower = rgb(red: 84, green: 109, blue: 229)
        public static let tigerlily = rgb(red: 225, green: 95, blue: 65)
        public static let deepRose = rgb(red: 196, green: 69, blue: 105)
        public static let purpleMountainMajesty = rgb(red: 120, green: 111, blue: 166)
        public static let roguePink = rgb(red: 248, green: 165, blue: 194)
        public static let squeaky = rgb(red: 99, green: 205, blue: 218)
        public static let appleValley = rgb(red: 234, green: 134, blue: 133)
        public static let pencilLead = rgb(red: 89, green: 98, blue: 117)
        public static let purpleCorallite = rgb(red: 87, green: 75, blue: 144)
        public static let flamingoPink = rgb(red: 247, green: 143, blue: 179)
        public static let blueCuracao = rgb(red: 61, green: 193, blue: 211)
        public static let porcelainRose = rgb(red: 230, green: 103, blue: 103)
        public static let biscay = rgb(red: 48, green: 57, blue: 82)

        public static let palette = [
            Self.creamyPeach,
            Self.rosyHighlight,
            Self.softBlue,
            Self.brewedMustard,
            Self.oldGeranium,
            Self.sawtoothAak,
            Self.summertime,
            Self.cornflower,
            Self.tigerlily,
            Self.deepRose,
            Self.purpleMountainMajesty,
            Self.roguePink,
            Self.squeaky,
            Self.appleValley,
            Self.pencilLead,
            Self.purpleCorallite,
            Self.flamingoPink,
            Self.blueCuracao,
            Self.porcelainRose,
            Self.biscay,
        ]
    }

    /// Spanish Palette by Miguel Camacho      from 🇪🇸
    /// https://flatuicolors.com/palette/es
    public struct Es {
        public static let jacksonsPurple = rgb(red: 64, green: 64, blue: 122)
        public static let c64Purple = rgb(red: 112, green: 111, blue: 211)
        public static let swanWhite = rgb(red: 247, green: 241, blue: 227)
        public static let summerSky = rgb(red: 52, green: 172, blue: 224)
        public static let celestialGreen = rgb(red: 51, green: 217, blue: 178)
        public static let luckyPoint = rgb(red: 44, green: 44, blue: 84)
        public static let liberty = rgb(red: 71, green: 71, blue: 135)
        public static let hotStone = rgb(red: 170, green: 166, blue: 157)
        public static let devilBlue = rgb(red: 34, green: 112, blue: 147)
        public static let palmSpringsSplash = rgb(red: 33, green: 140, blue: 116)
        public static let fluorescentRed = rgb(red: 255, green: 82, blue: 82)
        public static let syntheticPumpkin = rgb(red: 255, green: 121, blue: 63)
        public static let crocodileTooth = rgb(red: 209, green: 204, blue: 192)
        public static let mandarinSorbet = rgb(red: 255, green: 177, blue: 66)
        public static let spicedButternut = rgb(red: 255, green: 218, blue: 121)
        public static let eyeOfNewt = rgb(red: 179, green: 57, blue: 57)
        public static let chileanFire = rgb(red: 205, green: 97, blue: 51)
        public static let greyPorcelain = rgb(red: 132, green: 129, blue: 122)
        public static let alamedaOchre = rgb(red: 204, green: 142, blue: 53)
        public static let desert = rgb(red: 204, green: 174, blue: 98)

        public static let palette = [
            Self.jacksonsPurple,
            Self.c64Purple,
            Self.swanWhite,
            Self.summerSky,
            Self.celestialGreen,
            Self.luckyPoint,
            Self.liberty,
            Self.hotStone,
            Self.devilBlue,
            Self.palmSpringsSplash,
            Self.fluorescentRed,
            Self.syntheticPumpkin,
            Self.crocodileTooth,
            Self.mandarinSorbet,
            Self.spicedButternut,
            Self.eyeOfNewt,
            Self.chileanFire,
            Self.greyPorcelain,
            Self.alamedaOchre,
            Self.desert,
        ]
    }

    /// Swedish Palette by Jesper Dahlqvist      from 🇸🇪
    /// https://flatuicolors.com/palette/se
    public struct Se {
        public static let highlighterPink = rgb(red: 239, green: 87, blue: 119)
        public static let darkPeriwinkle = rgb(red: 87, green: 95, blue: 207)
        public static let megaman = rgb(red: 75, green: 207, blue: 250)
        public static let freshTurquoise = rgb(red: 52, green: 231, blue: 228)
        public static let mintyGreen = rgb(red: 11, green: 232, blue: 129)
        public static let sizzlingRed = rgb(red: 245, green: 59, blue: 87)
        public static let freeSpeechBlue = rgb(red: 60, green: 64, blue: 198)
        public static let spiroDiscoBall = rgb(red: 15, green: 188, blue: 249)
        public static let jadeDust = rgb(red: 0, green: 216, blue: 214)
        public static let greenTeal = rgb(red: 5, green: 196, blue: 107)
        public static let narenjiOrange = rgb(red: 255, green: 192, blue: 72)
        public static let yrielYellow = rgb(red: 255, green: 221, blue: 89)
        public static let sunsetOrange = rgb(red: 255, green: 94, blue: 87)
        public static let hintOfElusiveBlue = rgb(red: 210, green: 218, blue: 226)
        public static let goodNight = rgb(red: 72, green: 84, blue: 96)
        public static let chromeYellow = rgb(red: 255, green: 168, blue: 1)
        public static let vibrantYellow = rgb(red: 255, green: 211, blue: 42)
        public static let redOrange = rgb(red: 255, green: 63, blue: 52)
        public static let londonSquare = rgb(red: 128, green: 142, blue: 155)
        public static let blackPearl = rgb(red: 30, green: 39, blue: 46)

        public static let palette = [
            Self.highlighterPink,
            Self.darkPeriwinkle,
            Self.megaman,
            Self.freshTurquoise,
            Self.mintyGreen,
            Self.sizzlingRed,
            Self.freeSpeechBlue,
            Self.spiroDiscoBall,
            Self.jadeDust,
            Self.greenTeal,
            Self.narenjiOrange,
            Self.yrielYellow,
            Self.sunsetOrange,
            Self.hintOfElusiveBlue,
            Self.goodNight,
            Self.chromeYellow,
            Self.vibrantYellow,
            Self.redOrange,
            Self.londonSquare,
            Self.blackPearl,
        ]
    }

    /// Turkish Palette by Tamer Köseli      from 🇹🇷
    /// https://flatuicolors.com/palette/tr
    public struct Tr {
        public static let brightLilac = rgb(red: 205, green: 132, blue: 241)
        public static let prettyPlease = rgb(red: 255, green: 204, blue: 204)
        public static let lightRed = rgb(red: 255, green: 77, blue: 77)
        public static let mandarinSorbet = rgb(red: 255, green: 175, blue: 64)
        public static let unmellowYellow = rgb(red: 255, green: 250, blue: 101)
        public static let lightPurple = rgb(red: 197, green: 108, blue: 240)
        public static let youngSalmon = rgb(red: 255, green: 184, blue: 184)
        public static let redOrange = rgb(red: 255, green: 56, blue: 56)
        public static let radiantYellow = rgb(red: 255, green: 159, blue: 26)
        public static let dornYellow = rgb(red: 255, green: 242, blue: 0)
        public static let wintergreen = rgb(red: 50, green: 255, blue: 126)
        public static let electricBlue = rgb(red: 126, green: 255, blue: 245)
        public static let neonBlue = rgb(red: 24, green: 220, blue: 255)
        public static let lightSlateBlue = rgb(red: 125, green: 95, blue: 255)
        public static let shadowedSteel = rgb(red: 75, green: 75, blue: 75)
        public static let weirdGreen = rgb(red: 58, green: 227, blue: 116)
        public static let hammamBlue = rgb(red: 103, green: 230, blue: 220)
        public static let spiroDiscoBall = rgb(red: 23, green: 192, blue: 235)
        public static let lightIndigo = rgb(red: 113, green: 88, blue: 226)
        public static let balticSea = rgb(red: 61, green: 61, blue: 61)

        public static let palette = [
            Self.brightLilac,
            Self.prettyPlease,
            Self.lightRed,
            Self.mandarinSorbet,
            Self.unmellowYellow,
            Self.lightPurple,
            Self.youngSalmon,
            Self.redOrange,
            Self.radiantYellow,
            Self.dornYellow,
            Self.wintergreen,
            Self.electricBlue,
            Self.neonBlue,
            Self.lightSlateBlue,
            Self.shadowedSteel,
            Self.weirdGreen,
            Self.hammamBlue,
            Self.spiroDiscoBall,
            Self.lightIndigo,
            Self.balticSea,
        ]
    }

}
