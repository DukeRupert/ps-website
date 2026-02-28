# Stage 1: Build Tailwind CSS
FROM node:22-alpine AS css
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY tailwind.config.js ./
COPY templates/ templates/
COPY static/css/input.css static/css/input.css
RUN npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --minify

# Stage 2: Build Go binary
FROM golang:1.25-alpine AS build
WORKDIR /src
COPY go.mod ./
RUN go mod download
COPY cmd/ cmd/
COPY internal/ internal/
RUN CGO_ENABLED=0 go build -o /server ./cmd/server

# Stage 3: Runtime
FROM alpine:3.21
RUN apk add --no-cache ca-certificates
WORKDIR /app
COPY --from=build /server .
COPY --from=css /src/static/ static/
COPY static/ static/
COPY templates/ templates/

EXPOSE 80
ENV PORT=80
CMD ["./server"]
