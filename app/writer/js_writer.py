# -*- coding: utf-8 -*-

class JsWriter:
    """
    JavaScript code writer.
    """

    def __init__(self, indent="    "):
        self.__list_names = []
        self.__indent = indent
        self.__source_code = """export class FlatUIColor {
    /**
     * @param {number} red Red. The range of its value is 0 to 255.
     * @param {number} green Green. The range of its value is 0 to 255.
     * @param {number} blue Blue. The range of its value is 0 to 255.
     */
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * Returns rgb(r, g, b).
     */
    rgbAsCSS() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    /**
     * Returns rgba(r, g, b, a).
     * @param {number} alpha Alpha. The range of its value is 0 to 1.0.
     */
    rgbaAsCSS(alpha) {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${alpha})`;
    }
}

const rgb = (r, g, b) => new FlatUIColor(r, g, b);\n\n"""

    def filename(self):
        return "flat_ui_colors.js"

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

        # begin object {list_name}
        self.__source_code += f"const {list_name} = {{\n"

        # Add colors
        for color in colors:
            self.__add_color(color[0], color[1])

        self.__source_code += "\n"

        # begin array
        self.__source_code += f"{self.__indent}palette: [\n"
        for color in colors:
            self.__source_code += f"{self.__indent}{self.__indent}{list_name}.{color[0]},\n"
        # end array
        self.__source_code += f"{self.__indent}]\n"

        # end object {list_name}
        self.__source_code += "};\n\n"

        self.__list_names.append(list_name)

    def finish(self):
        # begin export default object
        self.__source_code += "const FlatUIColors = {\n"

        for name in self.__list_names:
            self.__source_code += f"{self.__indent}{name},\n"

        # end export default object
        self.__source_code += "};\n"
        self.__source_code += "export default FlatUIColors;\n"

    def __add_color(self, color_name, color):
        """
        :param color_name: A color name.
        :param color: rgb(r, g, b)
        """

        self.__source_code += f"{self.__indent}{color_name}: {color},\n"
