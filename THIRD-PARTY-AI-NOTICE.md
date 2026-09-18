# Bundled AI notice

Parin MindMap's packaged Windows build includes a local AI runtime and model.

- Model: **Microsoft Phi-3-mini-4k-instruct**, GGUF Q4_K_M
- Model license: **MIT**
- Model source: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct-gguf
- Runtime: **llama.cpp**
- Runtime license: **MIT**
- Runtime source: https://github.com/ggml-org/llama.cpp

The GitHub Actions build downloads the model at build time and places it into the generated installer resources. The model is not stored in the Git repository.

Commercial redistribution is subject to the licenses and notices of all bundled third-party components.