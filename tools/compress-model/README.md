# compress-model tool

## Setup
1. CLI install
> npm install --global @gltf-transform/cli
2. KTX Software install & pathを通す
https://github.com/KhronosGroup/KTX-Software/releases/tag/v4.4.0


## model素材元
- https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/CesiumMan

### CesiumMan(bone animation付き)をテストで圧縮した結果
- 圧縮率 → meshopt(level=high) > draco > meshopt(level=medium)
- meshoptだと何故かweight?が壊れた
- dracoだと何故かktx2圧縮した方が容量が増えた
→ 実ファイルを両方の圧縮形式で確認してみる