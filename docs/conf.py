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
html_theme = "sphinx_rtd_theme"
html_title = f"LumiSTEM Docs · {release}"
html_short_title = "LumiSTEM Docs"
html_static_path = ["_static"]
html_css_files = ["colors.css"]
html_show_sourcelink = False
html_show_sphinx = False
html_show_copyright = False
html_copy_source = False
html_domain_indices = False
html_use_index = False
html_search_language = "en"
html_theme_options = {"style_nav_header_background": "#ffd332"}
pygments_style = "bw"
