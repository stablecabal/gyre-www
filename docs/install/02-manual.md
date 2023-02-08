# Manual install 

## Prerequisites

- You need an Nvidia GPU with 4GB+ VRAM
- You will need to install [Miniconda](https://docs.conda.io/en/latest/miniconda.html)

## Install

In a Conda console:

```
git clone https://github.com/stablecabal/gyre.git
cd gyre
git submodule init --update --recursive
conda env create -f environment.yaml
conda activate gyre
```

Then for Windows:

```
set PIP_EXTRA_INDEX_URL=https://download.pytorch.org/whl/cu116 
flit install --pth-file
```

Or for Linux

```
export PIP_EXTRA_INDEX_URL=https://download.pytorch.org/whl/cu116
flit install --pth-file
```

:::caution

Setting the PIP_EXTRA_INDEX_URL is essential to install a pytorch version
that has CUDA installed. If you forget, you will need to delete your
conda environment and re-install

:::

## Running

```
python ./server.py
```

See [Command line arguments](/docs/cli-arguments) for more
