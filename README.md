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

Once you're all set up, run:

```shell
buf generate --template buf.gen.ts.yaml
```

### How to Use

See [`examples/ts`](examples/ts) for Example in TypeScript.

### PHP

`buf.gen.php.yaml` as well as generated code can be found in this repo.
In order to regenerate code, you would need to have `grpc_php_plugin`.

#### PHP gRPC

Follow the [offical manual](https://cloud.google.com/php/grpc) from Google to install all the necessary tools

#### grpc_php_plugin

You need the `grpc_php_plugin` to generate the PHP client stub classes. This plugin works with the main protoc binary to generate classes that you can import into your project.

You can build `grpc_php_plugin` with cmake (mind that you have to replace `RELEASE_TAG_HERE`):

```shell
git clone -b RELEASE_TAG_HERE https://github.com/grpc/grpc
cd grpc
git submodule update --init
mkdir -p cmake/build
cd cmake/build
cmake ../..
make protoc grpc_php_plugin
```

Put `grpc_php_plugin` to `/usr/local/bin` or another directory

> It is necessary to change the `path` option in `buf.gen.php.yaml` if `grpc_php_plugin` location differs from `/usr/local/bin`

[Source](https://grpc.github.io/grpc/php/md_src_php__r_e_a_d_m_e.html)

### Dart/Flutter

`buf.gen.ts.yaml` can be found in this repo.
In order to regenerate code, you would need to have `protoc_gen_dart` which can be obtained with `dart pub`.
