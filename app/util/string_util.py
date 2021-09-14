# -*- coding: utf-8 -*-

import re


def to_camel(string, capitalize):
    """
    Converts to camel case.

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


def to_snake(string):
    """
    Converts to snake case.

    :param string: A target string.
    :return: Converted string.
    """

    return re.sub(r'(?<!^)(?=[A-Z])', '_', string).lower()
