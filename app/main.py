# -*- coding: utf-8 -*-

import os
from flat_ui_colors_parser import FlatUiColorsParser
from writer.js_writer import JsWriter
from writer.scss_writer import ScssWriter
from writer.swift_writer import SwiftWriter
from writer.ts_writer import TsWriter

if __name__ == '__main__':
    writers = [SwiftWriter(), JsWriter(), TsWriter(), ScssWriter()]

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
        FlatUiColorsParser.exec(url, writers)

    for writer in writers:
        writer.finish()

    # Make output directory if not exists.
    DIST_DIR = "dist"
    os.makedirs(DIST_DIR, exist_ok=True)

    for writer in writers:
        f = open(f"{DIST_DIR}/{writer.filename()}", "w", encoding="UTF-8")
        f.write(writer.source_code())
        f.close()
