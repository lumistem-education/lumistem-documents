import os
from datetime import date

project = "LumiSTEM"
author = "LumiSTEM Education"
copyright = f"{date.today().year}, {author}"
release = os.environ.get("DOCS_VERSION", "dev")
version = release
language = "vi"
root_doc = "index"
extensions = ["sphinx.ext.githubpages"]
exclude_patterns = []
templates_path = ["_templates"]
html_theme = "sphinx_rtd_theme"
html_title = f"LumiSTEM Docs · {release}"
html_short_title = "LumiSTEM Docs"
html_favicon = "_static/brand.svg"
html_static_path = ["_static"]
html_css_files = ["styles/tokens.css", "styles/layout.css", "styles/content.css"]
html_js_files = [("scripts/docs.js", {"defer": "defer"})]
html_show_sourcelink = False
html_show_sphinx = False
html_show_copyright = False
html_copy_source = False
html_domain_indices = False
html_use_index = False
html_search_language = "en"
html_theme_options = {
    "collapse_navigation": False,
    "sticky_navigation": False,
    "navigation_depth": 2,
    "titles_only": True,
    "includehidden": True,
    "style_nav_header_background": "#ffffff",
    "prev_next_buttons_location": "bottom",
}
html_context = {"docs_release": release}
pygments_style = "friendly"
