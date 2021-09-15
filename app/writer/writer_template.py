# -*- coding: utf-8 -*-

class Writer:
    """
    Writer template.
    """

    def __init__(self, indent="  "):
        self.__indent = indent
        # TODO: impl
        self.__source_code = ""

    def filename(self):
        # TODO: impl
        return "file name"

    def source_code(self):
        return self.__source_code

    def add_color_list(self, url, authors, list_name, colors):
        """
        :param url: URL of the color list page.
        :param authors: Authors.
        :param list_name: The color list name.
        :param colors: (color_name, color)[]. color_name: A color name. color: 'rgb(r, g, b)'
        """
        # TODO: impl
        pass

    def finish(self):
        # TODO: impl
        pass
