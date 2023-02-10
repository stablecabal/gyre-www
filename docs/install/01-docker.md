# Docker

Gyre can be run in Docker, either locally or on a cloud host like vast.ai. This
allows us to easily manage Gyre's dependancies.

The default Docker images come compiled with Cuda 11.8, giving better
performance on RTX4080 & 4090 cards than using the manual installation.

The basic command to run Gyre in Docker looks something like this:

```
docker run --gpus all -it -p 5000:5000 -p 50051:50051 \
  -e HF_API_TOKEN={your huggingface token} \
  -e SD_LISTEN_TO_ALL=1 \
  -v $HOME/.cache/huggingface:/huggingface \
  -v `pwd`/weights:/weights \
  hafriedlander/gyre:cuda118-xformers-latest
```

#### Localtunnel

The docker image has built-in support for localtunnel, which
will expose the GRPC-WEB endpoint on an https domain. It will
automatically set an access token key if you don't provide one.
Check your Docker log for the values to use

```
  -e SD_LOCALTUNNEL=1 \
```

#### Volume mounts

This will share the weights and huggingface cache, but you can
mount other folders into the volume to do other things:

- You can check out the latest version of the server code and then
mount it into the Docker image to run the very latest code (including
any local edits you make)

  ```
    -v `pwd`/gyre:/gyre \
  ```

- Or override the engines.yaml config by making a config directory,
putting the engines.yaml in there, and mounting it to the image

  ```
   -v `pwd`/config:/config \
  ```

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

#### Building Cuda 11.8 support

For RTX 40xx performance, we want to use Cuda 11.8. Pytorch 1.12.1 only comes with Cuda 11.6
binaries. So there is also a Dockerfile that builds a Pytorch from source to support Cuda 11.8.

```
docker build . -f Dockerfile.cuda118 --target xformers \
    --build-arg XFORMERS_REPO=https://github.com/hafriedlander/xformers.git \
    --build-arg XFORMERS_REF=53b7454 \
    --build-arg TRITON_REF=8650b4d \
    --tag hafriedlander/gyre:cuda118-xformers-1.0.0
```

#### Building on default pytorch

Building pytorch takes a long time, so you can build on the default pytorch (which uses Cuda 11.6)
if you prefer.

```
docker build --target main .
```

Or to build (slowly) with xformers

```
docker build --target xformers .
```
