# Bundled AI notice

Parin MindMap's packaged Windows build includes a local AI runtime and model.

- Model: **Ministral 3 3B Instruct 2512 GGUF**, Q4_K_M
- Model license: **Apache 2.0**
- Model source: https://huggingface.co/mistralai/Ministral-3-3B-Instruct-2512-GGUF
- Runtime: **llama.cpp**
- Runtime license: **MIT**
- Runtime source: https://github.com/ggml-org/llama.cpp

The GitHub Actions build downloads the model at build time and places it into the generated installer resources. The model is not stored in the Git repository.

Commercial redistribution is subject to the licenses and notices of all bundled third-party components.