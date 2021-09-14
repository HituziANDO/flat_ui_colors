# -*- coding: utf-8 -*-

import re


class SwiftWriter:
    """
    Swift code writer.
    """

    def __init__(self, indent="    "):
        self.__indent = indent
        self.__source_code = """#if os(OSX)
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

    def filename(self):
        return "FlatUIColors.swift"

    def source_code(self):
        return self.__source_code

    def add_color_list(self, url, authors, list_name, colors):
        """
        :param url: URL of the color list page.
        :param authors: Authors.
        :param list_name: The color list name.
        :param colors: (color_name, color)[]
        """

        # Add comments
        for author in authors:
            self.__source_code += f"{self.__indent}/// {author}\n"
        self.__source_code += f"{self.__indent}/// {url}\n"

        # begin struct {list_name}
        self.__source_code += f"{self.__indent}public struct {list_name} {{\n"

        # Add colors
        for color in colors:
            self.__add_color(color[0], color[1])

        self.__source_code += "\n"

        # begin array
        self.__source_code += f"{self.__indent}{self.__indent}public static let palette = [\n"
        for color in colors:
            self.__source_code += f"{self.__indent}{self.__indent}{self.__indent}Self.{color[0]},\n"
        # end array
        self.__source_code += f"{self.__indent}{self.__indent}]\n"

        # end struct {list_name}
        self.__source_code += f"{self.__indent}}}\n\n"

    def finish(self):
        # end struct FlatUIColors
        self.__source_code += "}\n"

    def __add_color(self, color_name, color):
        """
        :param color_name: A color name.
        :param color: rgb(r, g, b)
        """

        # rgb(r, g, b) -> rgb(red:, green:, blue:)
        comps = re.split(",", color.replace("rgb(", "rgb(red: "))
        comps[1] = "green:" + comps[1]
        comps[2] = "blue:" + comps[2]
        color = ", ".join(comps)
        self.__source_code += f"{self.__indent}{self.__indent}public static let {color_name} = {color}\n"
