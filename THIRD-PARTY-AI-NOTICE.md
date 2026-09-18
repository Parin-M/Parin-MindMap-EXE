# Bundled AI notice

Parin MindMap's packaged Windows build includes a local AI runtime and a quantized GGUF model.

- Base model: **Microsoft Phi-3-mini-4k-instruct**
- Quantization: **Q3_K_S**
- Quantized GGUF: **bartowski/Phi-3-mini-4k-instruct-GGUF**
- Model license: **MIT**
- Original model: https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
- Quantized model: https://huggingface.co/bartowski/Phi-3-mini-4k-instruct-GGUF
- Runtime: **llama.cpp**
- Runtime license: **MIT**
- Runtime source: https://github.com/ggml-org/llama.cpp

The GitHub Actions build downloads the quantized GGUF at build time and embeds it in the generated Windows installer resources. The model is not stored in the Git repository.

Commercial redistribution is subject to the licenses and notices of all bundled third-party components.