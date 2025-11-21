import { assertIsDefined } from 'x'
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
      antialias: true,
    },
  })

  app.plugin.register(
    new AssetPlugin([
      {
        id: 'FloorsCheckerboard_S_Diffuse',
        url: '/studies/assets/floors/FloorsCheckerboard_S_Diffuse.jpg',
      },
      {
        id: 'FloorsCheckerboard_S_Normal',
        url: '/studies/assets/floors/FloorsCheckerboard_S_Normal.jpg',
      },
    ]),
  )
  app.plugin.register(new OrbitControlsPlugin())
  app.plugin.register(new StatsGLPlugin())

  await app.initialize()

  app.start()
}

setup()
