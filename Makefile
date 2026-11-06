PYTHON ?= python3
SPHINXOPTS ?= -n -W --keep-going

.PHONY: html serve clean

html:
	$(PYTHON) -m sphinx $(SPHINXOPTS) -b html docs _build/html

serve: html
	$(PYTHON) -m http.server 8000 --bind 127.0.0.1 --directory _build/html

clean:
	$(PYTHON) -c "import shutil; shutil.rmtree('_build', ignore_errors=True)"
