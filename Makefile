.PHONY: dev build css-watch css-build

dev:
	@echo "Starting dev server and Tailwind watch..."
	@air & npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch

build:
	go build -o bin/server ./cmd/server
	npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --minify

css-watch:
	npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch

css-build:
	npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --minify
