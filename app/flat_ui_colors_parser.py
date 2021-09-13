# -*- coding: utf-8 -*-

import os
import re
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver import Chrome
# from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from util.string_util import to_camel


class FlatUiColorsParser:
    """
    This class scrapes https://flatuicolors.com/ and parses the html to create color objects in Swift and TypeScript.
    """

    @classmethod
    def exec(cls, url, writers):
        """
        Executes.

        :param url: The flatuicolors.com page.
        :param writers: Writers.
        """

        # Extract the list name.
        list_name = to_camel(url.rsplit('/', 1)[-1], True)

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

        # Take a screenshot.
        os.makedirs("tmp/screenshots", exist_ok=True)
        driver.save_screenshot(f"tmp/screenshots/{list_name}.png")

        driver.quit()

        soup = BeautifulSoup(html, 'html.parser')

        # print(soup.prettify())

        # Extract authors.
        authors = []
        elements = soup.select(".author")
        for element in elements:
            author = element.text.replace("\n", "").strip()
            authors.append(author)

        # Extract colors.
        colors = []
        elements = soup.select(".color")
        for element in elements:
            color_name = element.text \
                .replace('\'', '') \
                .replace('-', ' ') \
                .replace('!', '') \
                .replace('?', '') \
                .replace('=', '') \
                .strip()

            color_name = to_camel(color_name, False)

            # If first letter is numeric, '_' as the prefix is appended.
            if re.match(r'^\d.*$', color_name):
                color_name = '_' + color_name

            color_name = color_name \
                .replace('á', 'a') \
                .replace('ó', 'o') \
                .replace('è', 'e') \
                .replace('ā', 'a') \
                .replace('â', 'a')

            # rgb(r, g, b)
            color = element.get("style").replace('background: ', '').replace(';', '').strip()

            colors.append((color_name, color))

        for writer in writers:
            writer.add_color_list(url, authors, list_name, colors)
