FROM bufbuild/buf:latest as buf

FROM golang:1.21-alpine AS builder

COPY --from=buf /usr/local/bin/buf /usr/local/bin/buf

WORKDIR /go/bin

RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest \
    github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

WORKDIR /go/src/github.com/slntopp/nocloud-proto/
COPY go.mod go.sum ./
RUN go mod download

COPY buf.* ./

RUN buf mod update

LABEL org.opencontainers.image.source https://github.com/slntopp/nocloud-proto

ENTRYPOINT [ "buf", "generate" ]