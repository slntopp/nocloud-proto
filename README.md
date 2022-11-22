# NoCloud API Proto

This repo containes protobuf files and Go generated code for the NoCloud APIs.

## Install

### Go

At your project(where go.mod is):

```shell
go get github.com/slntopp/nocloud-proto@latest
```

## How to use

### Generating

1. Clone [this repo](https://github.com/slntopp/nocloud-proto)
2. Navigate to cloned repo directory

#### Docker

Just run:

```shell
docker run -it \
  -v $(pwd):/go/src/github.com/slntopp/nocloud-proto \
  ghcr.io/slntopp/nocloud/buf:latest
```

#### Buf

Set up [`buf`](buf.build), follow Dockerfile for additional dependencies.

Run `buf generate`

## How to generate code for you language

Check according module for buf, add it to `buf.gen.yaml`, run `buf generate`.

If you're generating using Docker, you'd have to build image first.

### JavaScript/Typescript

`buf.gen.ts.yaml` as well as generated code can be found in this repo.
To regenerate code, you would need to have dependencies listed in `dependencies.json` installed, as well as `protoc-gen-js`, which can either be installed using `brew install protobuf@3` or [downloaded as binary from Releases here](https://github.com/protocolbuffers/protobuf-javascript).

### PHP

`buf.gen.php.yaml` as well as generated code can be found in this repo.
In order to regenerate code, you would need to have `grpc_php_plugin`.

### Dart/Flutter

`buf.gen.ts.yaml` can be found in this repo.
In order to regenerate code, you would need to have `protoc_gen_dart` which can be obtained with `dart pub`.
