# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver import Chrome
# from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
import re
import os


def to_camel(string, capitalize):
    """
    :param string: A target string.
    :param capitalize: If True, capitalize the first letter.
    :return: Converted string.
    """
    ret = string.lower()
    words = re.split("[\s_]", ret)
    words = list(map(lambda x: x.capitalize(), words))
    if not capitalize:
        words[0] = words[0].lower()
    return "".join(words)


class FlatUiColorsParser:
    """
    This class scrapes https://flatuicolors.com/ and parses the html to create color objects in Swift.
    """

    @classmethod
    def exec(cls, url, code):
        """
        Executes.

        :param url: The flatuicolors page.
        """
        opts = webdriver.ChromeOptions()
        opts.add_argument("--headless")
        opts.add_argument("--no-sandbox")
        driver = Chrome(executable_path="/usr/local/bin/chromedriver", options=opts)

        # driver = webdriver.Remote(
        #     command_executor=os.environ["SELENIUM_URL"],
        #     desired_capabilities=DesiredCapabilities.CHROME.copy()
        # )

        driver.get(url)

        # Wait for downloading the page and running JavaScript...
        time.sleep(4)

        html = driver.page_source

        driver.quit()

        soup = BeautifulSoup(html, 'html.parser')

        # print(soup.prettify())

        # for Swift
        elements = soup.select(".author")
        for element in elements:
            author = element.text.replace("\n", "").strip()
            code += f"    /// {author}\n"

        class_name = url.rsplit('/', 1)[-1]
        code += f"    /// {url}\n"
        code += f"    public struct {class_name} {{\n"

        color_names = []
        elements = soup.select(".color")
        for element in elements:
            pre_color_name = element.text \
                .replace('\'', '') \
                .replace('-', ' ') \
                .replace('!', '') \
                .replace('?', '') \
                .replace('=', '') \
                .strip()
            pre_color = element.get("style").replace('background: ', '').replace(';', '').strip()

            # for Swift
            color_name = to_camel(pre_color_name, False)
            if re.match(r'^\d.*$', color_name):
                color_name = '_' + color_name
            color_name = color_name \
                .replace('á', 'a') \
                .replace('ó', 'o') \
                .replace('è', 'e') \
                .replace('ā', 'a') \
                .replace('â', 'a')
            color_names.append(color_name)
            comps = re.split(",", pre_color.replace("rgb(", "rgb(red: "))
            comps[1] = "green:" + comps[1]
            comps[2] = "blue:" + comps[2]
            color = ", ".join(comps)
            code += f"        public static let {color_name} = {color}\n"

        code += "\n"
        code += "        public static let palette = [\n"

        for color_name in color_names:
            code += f"            Self.{color_name},\n"
        code += "        ]\n"
        code += "    }\n\n"  # end struct {class_name}

        return code


if __name__ == '__main__':
    # for Swift
    swift_code = """#if os(OSX)
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

public struct FlatUIColors {\n"""

    urls = [
        "https://flatuicolors.com/palette/defo",
        "https://flatuicolors.com/palette/us",
        "https://flatuicolors.com/palette/au",
        "https://flatuicolors.com/palette/gb",
        "https://flatuicolors.com/palette/ca",
        "https://flatuicolors.com/palette/cn",
        "https://flatuicolors.com/palette/nl",
        "https://flatuicolors.com/palette/fr",
        "https://flatuicolors.com/palette/de",
        "https://flatuicolors.com/palette/in",
        "https://flatuicolors.com/palette/ru",
        "https://flatuicolors.com/palette/es",
        "https://flatuicolors.com/palette/se",
        "https://flatuicolors.com/palette/tr"
    ]
    for url in urls:
        swift_code = FlatUiColorsParser.exec(url, swift_code)

    swift_code += "}\n"  # end struct FUCColors

    # Make output directory if not exists.
    DIST_DIR = "dist"
    os.makedirs(DIST_DIR, exist_ok=True)

    f = open(f"{DIST_DIR}/FlatUIColors.swift", "w", encoding="UTF-8")
    f.write(swift_code)
    f.close()
