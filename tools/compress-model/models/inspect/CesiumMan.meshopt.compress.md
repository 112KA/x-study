
 OVERVIEW
 ────────────────────────────────────────────
| key                | value                                     |
| ---                | ---                                       |
| version            | 2.0                                       |
| generator          | glTF-Transform v4.0.1                     |
| extensionsUsed     | KHR_mesh_quantization, KHR_texture_basisu |
| extensionsRequired | KHR_mesh_quantization, KHR_texture_basisu |



 SCENES
 ────────────────────────────────────────────
| #   | name | rootName | bboxMin                | bboxMax             | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---      | ---                    | ---                 | ---                | ---               | ---                    |
| 0   |      | Z_UP     | -0.75561, -1, -0.20704 | 0.75561, 1, 0.20704 | 14,016             | 3,273             | 3,273                  |

¹ Expected number of vertices processed by the vertex shader for one render
  pass, without considering the vertex cache.

² Expected number of vertices uploaded to GPU, assuming each Accessor
  is uploaded only once. Actual number uploaded may be higher, 
  dependent on the implementation and vertex buffer layout.

³ Expected number of vertices uploaded to GPU, assuming each Primitive
  is uploaded once, duplicating vertex attributes shared among Primitives.



 MESHES
 ────────────────────────────────────────────
| #   | name       | mode      | meshPrimitives | glPrimitives | vertices | indices | attributes                                                                             | instances | size¹    |
| --- | ---        | ---       | ---            | ---          | ---      | ---     | ---                                                                                    | ---       | ---      |
| 0   | Cesium_Man | TRIANGLES | 1              | 4,672        | 3,273    | u16     | JOINTS_0:u8, NORMAL:i8_norm, POSITION:i16_norm, TEXCOORD_0:u16_norm, WEIGHTS_0:u8_norm | 1         | 96.77 KB |

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
| 0   |      | 57       | 57       | 1.958    | 2,736     | 29.38 KB |


