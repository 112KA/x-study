import { assertIsDefined } from '@112ka/x'
import {
  AssetPlugin,
  OrbitControlsPlugin,
  StatsGLPlugin,
} from 'x3/application'
import { Application } from './Application'

async function setup() {
  const wrapper = document.getElementById('canvas-wrapper') as HTMLDivElement
  assertIsDefined(wrapper)

  const app = new Application(wrapper, {
    renderer: {
      type: 'webgpu',
    },
  })

  app.plugin.register(
    new AssetPlugin([
      {
        id: 'checker',
        url: '/studies/assets/CustomUVChecker_byValle_2K.webp',
      },
      { id: 'model', url: '/studies/assets/SimpleTexture.gltf' },
    ]),
  )
  app.plugin.register(new OrbitControlsPlugin())
  app.plugin.register(new StatsGLPlugin())

  await app.initialize()
  app.start()
}

setup()
