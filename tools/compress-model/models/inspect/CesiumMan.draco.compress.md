
 OVERVIEW
 ────────────────────────────────────────────
| key                | value                 |
| ---                | ---                   |
| version            | 2.0                   |
| generator          | glTF-Transform v4.0.1 |
| extensionsUsed     | KHR_texture_basisu    |
| extensionsRequired | KHR_texture_basisu    |



 SCENES
 ────────────────────────────────────────────
| #   | name | rootName | bboxMin             | bboxMax                   | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---      | ---                 | ---                       | ---                | ---               | ---                    |
| 0   |      | Z_UP     | -0.56914, 0, -0.131 | 0.56912, 1.50655, 0.18092 | 14,016             | 3,572             | 3,572                  |

¹ Expected number of vertices processed by the vertex shader for one render
  pass, without considering the vertex cache.

² Expected number of vertices uploaded to GPU, assuming each Accessor
  is uploaded only once. Actual number uploaded may be higher, 
  dependent on the implementation and vertex buffer layout.

³ Expected number of vertices uploaded to GPU, assuming each Primitive
  is uploaded once, duplicating vertex attributes shared among Primitives.



 MESHES
 ────────────────────────────────────────────
| #   | name       | mode      | meshPrimitives | glPrimitives | vertices | indices | attributes                                                            | instances | size¹     |
| --- | ---        | ---       | ---            | ---          | ---      | ---     | ---                                                                   | ---       | ---       |
| 0   | Cesium_Man | TRIANGLES | 1              | 4,672        | 3,572    | u16     | JOINTS_0:u16, NORMAL:f32, POSITION:f32, TEXCOORD_0:f32, WEIGHTS_0:f32 | 1         | 228.06 KB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name              | instances | textures         | alphaMode | doubleSided |
| --- | ---               | ---       | ---              | ---       | ---         |
| 0   | Cesium_Man-effect | 1         | baseColorTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name | uri | slots            | instances | mimeType   | compression | resolution | size     | gpuSize⁵  |
| --- | ---  | --- | ---              | ---       | ---        | ---         | ---        | ---      | ---       |
| 0   |      |     | baseColorTexture | 1         | image/ktx2 | ETC1S       | 1024x1024  | 52.41 KB | 699.05 KB |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
| #   | name | channels | samplers | duration | keyframes | size     |
| --- | ---  | ---      | ---      | ---      | ---       | ---      |
| 0   |      | 57       | 57       | 1.958    | 2,736     | 36.67 KB |


