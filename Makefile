install:
	yarn

build:
	yarn build:js
	yarn build:css
	yarn purge:css
	yarn minify:css

run: build
	open index.html