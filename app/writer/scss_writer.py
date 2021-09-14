# -*- coding: utf-8 -*-

from util.string_util import to_camel
from util.string_util import to_snake


class ScssWriter:
    """
    SCSS code writer.
    """

    def __init__(self, indent="  "):
        self.__indent = indent
        self.__source_code = "// Flat UI Colors\n\n"

    def filename(self):
        return "flat_ui_colors.scss"

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
        self.__source_code += "/*!\n"
        for author in authors:
            self.__source_code += f" * {author}\n"
        self.__source_code += f" * {url}\n"
        self.__source_code += " */\n"

        list_name = to_camel(list_name, False)

        # Add colors
        for color in colors:
            self.__add_color(list_name, color[0], color[1])

        self.__source_code += "\n"

    def finish(self):
        pass

    def __add_color(self, list_name, color_name, color):
        """
        :param list_name: A list name.
        :param color_name: A color name.
        :param color: rgb(r, g, b)
        """

        self.__source_code += f"$fuc_{list_name}_{to_snake(color_name)}: {color};\n"
