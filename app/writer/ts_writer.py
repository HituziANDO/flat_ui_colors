# -*- coding: utf-8 -*-

class TsWriter:
    """
    TypeScript code writer.
    """

    def __init__(self, indent="    "):
        self.__list_names = []
        self.__indent = indent
        self.__source_code = """export class FlatUIColor {
    /**
     * Red. The range of its value is 0 to 255.
     */
    readonly red: number
    /**
     * Green. The range of its value is 0 to 255.
     */
    readonly green: number
    /**
     * Blue. The range of its value is 0 to 255.
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
     * @param alpha Alpha. The range of its value is 0 to 255.
     */
    rgbaAsCSS(alpha: number): string {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${alpha})`
    }
}

const rgb = (r: number, g: number, b: number) => new FlatUIColor(r, g, b)\n\n"""

    def filename(self):
        return "FlatUIColors.ts"

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
        self.__source_code += "/**\n"
        for author in authors:
            self.__source_code += f" * {author}\n"
        self.__source_code += f" * {url}\n"
        self.__source_code += " */\n"

        # begin class {list_name}
        self.__source_code += f"class {list_name} {{\n"

        # Add colors
        for color in colors:
            self.__add_color(color[0], color[1])

        self.__source_code += "\n"

        # begin array
        self.__source_code += f"{self.__indent}static readonly palette = [\n"
        for color in colors:
            self.__source_code += f"{self.__indent}{self.__indent}{list_name}.{color[0]},\n"
        # end array
        self.__source_code += f"{self.__indent}]\n"

        # end class {list_name}
        self.__source_code += "}\n\n"

        self.__list_names.append(list_name)

    def finish(self):
        # begin export default class
        self.__source_code += "export default class FlatUIColors {\n"

        for name in self.__list_names:
            self.__source_code += f"{self.__indent}static readonly {name} = {name}\n"

        # end export default class
        self.__source_code += "}\n"

    def __add_color(self, color_name, color):
        """
        :param color_name: A color name.
        :param color: rgb(r, g, b)
        """

        self.__source_code += f"{self.__indent}static readonly {color_name} = {color}\n"
