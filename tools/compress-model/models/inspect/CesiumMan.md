
 OVERVIEW
 ────────────────────────────────────────────
| key                | value        |
| ---                | ---          |
| version            | 2.0          |
| generator          | COLLADA2GLTF |
| extensionsUsed     | none         |
| extensionsRequired | none         |



 SCENES
 ────────────────────────────────────────────
| #   | name | rootName | bboxMin             | bboxMax                   | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---      | ---                 | ---                       | ---                | ---               | ---                    |
| 0   |      | Z_UP     | -0.56914, 0, -0.131 | 0.56914, 1.50655, 0.18095 | 14,016             | 3,273             | 3,273                  |

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
| 0   | Cesium_Man | TRIANGLES | 1              | 4,672        | 3,273    | u16     | JOINTS_0:u16, NORMAL:f32, POSITION:f32, TEXCOORD_0:f32, WEIGHTS_0:f32 | 1         | 211.32 KB |

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
| #   | name | uri | slots            | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---  | --- | ---              | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   |      |     | baseColorTexture | 1         | image/jpeg |             | 1024x1024  | 209.91 KB | 5.59 MB  |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
| #   | name | channels | samplers | duration | keyframes | size     |
| --- | ---  | ---      | ---      | ---      | ---       | ---      |
| 0   |      | 57       | 57       | 1.958    | 2,736     | 40.13 KB |


