# Parin MindMap bundled local AI

Parin MindMap uses two local models as one supervised Copilot pipeline.

**Harrier OSS v1 0.6B**
- Role: semantic retrieval, relevance scoring, map-memory layer
- GGUF: Q4_K_M
- Source: https://huggingface.co/mradermacher/harrier-oss-v1-0.6b-GGUF
- License: MIT

**Gemma 3 1B**
- Role: task interpretation, concise assistance, reasoning, supervised Agent plans
- Requested checkpoint lineage: https://huggingface.co/ishu-newaz/Gemma3-1B-FP16-bnb-4bit
- Repository-declared license: Apache-2.0
- Deployment format: GGUF Q4_K_M generated during the build for llama.cpp
- Gemma terms: https://ai.google.dev/gemma/terms

The requested Gemma repository uses BitsAndBytes/NF4 safetensors and is not a llama.cpp-native GGUF. The build first attempts CPU dequantization of that exact checkpoint; when the build environment cannot dequantize BnB, it uses the author's matching FP16 sibling checkpoint before producing the GGUF deployment artifact.

**Runtime**
- llama.cpp, MIT
- Source: https://github.com/ggml-org/llama.cpp

Assistant behavior:
1. Harrier finds the most relevant nodes from the current map.
2. Gemma receives only the relevant context and interprets the user's task.
3. Normal requests receive concise task-oriented help, not open-ended chatbot conversation.
4. Requests that change the map produce a supervised Agent plan.
5. The application applies structural changes only after explicit user approval.

Review all upstream licenses and terms before commercial redistribution.
