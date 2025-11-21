export interface DefaultResourceItem {
  type?: undefined
  id: string
  url: string
}

export interface TextureAtlasResourceItem {
  type: 'atlas'
  id: string
  jsonUrl: string
  textureUrl: string
}

export type ResourceItem = DefaultResourceItem | TextureAtlasResourceItem
