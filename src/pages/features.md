# Features

## Server

- Full-featured GRPC and GRPC-WEB interface based on api.stability.ai standard, but with additional fields for extra features
- Full-featured HTTP REST interface which uses the JSON-encoded form of the GRPC messages for use in situations where you can't use GRPC
- Simple HTTP REST interface based on api.stability.ai for quick integrations when you don't need total control over the generation process
- Both syncronous and asyncronous generation methods
- Supports multiple GPUs
- Supports queueing request across available GPUs to allow multiple simultaneous users
- Rapidly switch between all the configured models 
- Requests can be aborted immediately via any API

## Model manager

- Load Diffusers models and Stable Diffusion Checkpoint models
- Mix models to produce blends or add inpaint support
- Load from HuggingFace, locally, or custom URL
- Load and export safetensor versions of models
- Custom VRAM and RAM manager to load large numbers of models in limited GPU

## Generation

- Stable Diffusion V1.x and V2.x support
- Text to image, image to image, depth to image and image inpainting support
- CLIP guidance to improve image coherence to the prompt
- Prompt component weighting and long prompt support
- A unique grafting mode that provides:
  - The ability to use depth to image and inpaint modes with any model
  - A unique hires fix that reduces artifcats when producing hi-resolution images
- A full set of samplers (supporting k_diffusion and Diffusers samplers)
- LORA support for use custom concepts
- Batch stable (except for some slight variance with CLIP guidance)

## Performance

- FP16, attention slicing and module management allow useage on cards with 4GB VRAM
- Heavily optimised CLIP guidance to minimise memory and performance impact (but it's still a lot slower)
- Enables xformers, even on cards where backwards mode isn't supported
