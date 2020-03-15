install:
	yarn

build:
	yarn css:build
	yarn css:purge
	yarn css:minify

run: build
	open index.html