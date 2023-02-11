# Docker

Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This
allows us to easily manage Gyre's dependancies.

The basic command to run Gyre in Docker looks something like this:

```
docker run --gpus all -it -p 5000:5000 -p 50051:50051 \
  -e HF_API_TOKEN={your huggingface token} \
  -e SD_LISTEN_TO_ALL=1 \
  -v $HOME/.cache/huggingface:/huggingface \
  -v `pwd`/weights:/weights \
  ghcr.io/stablecabal/gyre:cuda118-xformers-latest
```

## Images & Tags

Pre-built docker images are available at [Github Container Registry](https://github.com/stablecabal/gyre/pkgs/container/gyre) or [Docker Hub](https://hub.docker.com/r/hafriedlander/gyre)

Docker images are provided as Cuda `11.6`, `11.7` and `11.8` based versions,
with `basic`, `xformers` and `xformers-training` options

Unless you have a specific reason to use another, cuda118-xformers is the recommended option.

#### basic

Just gyre on top of the nvidia runtime image for the selected cuda version. These are the fastest to build, so will be available very quickly after any release.

#### xformers

Basic + xformers. Faster and less vram used, but bigger docker image and slightly longer delay to be available.

#### xformers-training

Xformers + Bits & Bytes (for 8Bit Adam) + Deepspeed. Useful extras for running training via a shell into the image. Much bigger docker image.

## Volume mounts

This will share the weights and huggingface cache, but you can
mount other folders into the volume to do other things:

#### /huggingface

The huggingface cache, usually mapped to ~/.cache/huggingface in guest

#### /weights

Any local weights can be mapped to here

#### /config

Override the config by making a config directory,
putting the engines.yaml and other yaml in it, 
and mounting it to the image

  ```
   -v `pwd`/config:/config \
  ```

#### /gyre

You can check out the latest version of the server code and then
mount it into the Docker image to run the very latest code (including
any local edits you make)

  ```
    -v `pwd`/gyre:/gyre \
  ```

## Environment variables

#### Localtunnel

The docker image has built-in support for localtunnel, which
will expose the GRPC-WEB endpoint on an https domain. It will
automatically set an access token key if you don't provide one.
Check your Docker log for the values to use

```
  -e SD_LOCALTUNNEL=1 \
```

#### Server arguments

All the server arguments can be provided as environment variables, starting
with SD:

- SD_ENGINECFG
- SD_GRPC_PORT
- SD_HTTP_PORT
- SD_VRAM_OPTIMISATION_LEVEL
- SD_NSFW_BEHAVIOUR
- SD_WEIGHT_ROOT
- SD_HTTP_FILE_ROOT
- SD_ACCESS_TOKEN
- SD_LISTEN_TO_ALL
- SD_ENABLE_MPS
- SD_RELOAD
- SD_LOCALTUNNEL

## Building

Pytorch does not distribute official binaries that use Cuda 11.8. Therefore Gyre uses a two-step
build process

- Dockerfile.devbase, pytorch + torchvision built from source on top of the selected CUDA version and installed into a micromamba environment
- Dockerfile, the server images themselves

#### Building gyre-devbase

You can pass in a short CUDA ver (116, 117, 118) and a full CUDA ver (11.6.2, 11.7.1, 11.8.0) to target.
Default is Cuda 11.8.0

```
docker build . -f Dockerfile.devbase \
  --target devbase \
  --build-arg CUDA_VER=118 --build-arg CUDA_FULLVER=11.8.0 \
  --tag ghcr.io/stablecabal/gyre-dev:pytorch112-cuda118-latest
```

#### Building gyre

You can pass in github references to specific the exact version of dependancies to build.

```
docker build . -f Dockerfile --target xformers \
  --build-arg XFORMERS_REPO=https://github.com/hafriedlander/xformers.git \
  --build-arg XFORMERS_REF=53b7454 \
  --build-arg TRITON_REF=8650b4d \
  --tag ghcr.io/stablecabal/gyre:cuda118-xformers-latest
```
