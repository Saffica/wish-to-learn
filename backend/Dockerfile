FROM golang:1.18 AS build
WORKDIR /app
COPY ./ ./
RUN go mod tidy
RUN go build -o ./bin/app ./cmd/app/ && \
    chown -R nobody:nogroup ./bin
EXPOSE 8888
ENTRYPOINT ./bin/app