# flat_ui_colors

This python script does scraping [Flat UI Colors website](https://flatuicolors.com/) and outputs the result as the source code files of the flat ui colors in some programming languages.

## Outputs of Scraping

Outputs of scraping are [here](https://github.com/HituziANDO/flat_ui_colors/tree/main/dist).

- [JavaScript](https://github.com/HituziANDO/flat_ui_colors/blob/main/dist/flat_ui_colors.js)
- [SCSS](https://github.com/HituziANDO/flat_ui_colors/blob/main/dist/flat_ui_colors.scss)
- [Swift](https://github.com/HituziANDO/flat_ui_colors/blob/main/dist/FlatUIColors.swift)
- [TypeScript](https://github.com/HituziANDO/flat_ui_colors/blob/main/dist/FlatUIColors.ts)

## Require

- Python 3.9+
- Google Chrome
- chromedriver

I tested in the following environment when scraping.

- macOS 10.15.7
- Python 3.9.7
- Google Chrome 93.0.4577.63
- chromedriver 93.0.4577.63
- selenium 3.141.0

## Setup

### Install packages

```
pip install -r requirements.txt
```

### Install Chrome

Install Chrome browser to your PC.

### Install chromedriver

#### on Mac

1. Download ChromeDriver zip from https://chromedriver.chromium.org/downloads
2. Unzip
3. Move chromedriver to `/usr/local/bin/chromedriver`

Check chromedriver version.

```
chromedriver --version
```

## Usage

### Run scraping

```
python app/main.py
```

### Use FlatUIColors

Scraping results output into [dist](https://github.com/HituziANDO/flat_ui_colors/tree/main/dist) directory as FlatUIColors source files. Copy the file of programming language using by your project into the project.

#### JavaScript

For example

```javascript
import FlatUIColors from "path/to/FlatUIColors"

const color1 = FlatUIColors.Gb.protossPylon.rgbAsCSS()
console.log(color1)  // -> "rgb(0, 168, 255)"

const color2 = FlatUIColors.Gb.downloadProgress.rgbaAsCSS(0.5)
console.log(color2)  // -> "rgba(76, 209, 55, 0.5)"

const color3 = FlatUIColors.Tr.palette[0].rgbAsCSS()
console.log(color3)  // -> "rgb(205, 132, 241)"
```

#### TypeScript

For example

```typescript
import FlatUIColors from "path/to/FlatUIColors"

const color1 = FlatUIColors.Gb.protossPylon.rgbAsCSS()
console.log(color1)  // -> "rgb(0, 168, 255)"

const color2 = FlatUIColors.Gb.downloadProgress.rgbaAsCSS(0.5)
console.log(color2)  // -> "rgba(76, 209, 55, 0.5)"

const color3 = FlatUIColors.Tr.palette[0].rgbAsCSS()
console.log(color3)  // -> "rgb(205, 132, 241)"
```

#### Swift

For example

##### iOS

```swift
// FlatUIColors returns UIColor object.
let color: UIColor = FlatUIColors.Gb.protossPylon
var red: CGFloat = 0
var green: CGFloat = 0
var blue: CGFloat = 0
var alpha: CGFloat = 0
color.getRed(&red, green: &green, blue: &blue, alpha: &alpha)
print("r:\(red * 255), g:\(green * 255), b:\(blue * 255), a:\(alpha)")
// -> r:0.0, g:168.0, b:255.0, a:1.0
```

##### macOS

```swift
// FlatUIColors returns NSColor object.
let color: NSColor = FlatUIColors.Gb.protossPylon
```
