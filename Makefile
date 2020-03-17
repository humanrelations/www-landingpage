install:
	yarn

build:
	yarn build:js
	yarn build:css
	yarn prefix:css
	yarn purge:css
	yarn minify:css

run: build
	yarn serve

