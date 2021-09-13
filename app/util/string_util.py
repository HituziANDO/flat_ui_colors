# -*- coding: utf-8 -*-

import re


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
