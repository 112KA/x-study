import { assertIsDefined } from 'x'
import {
  AssetPlugin,
  DebugShaderPlugin,
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
      { id: 'roboto', url: '/studies/assets/Roboto-Medium.ttf' },
    ]),
  )
  app.plugin.register(new OrbitControlsPlugin())
  app.plugin.register(new StatsGLPlugin())
  app.plugin.register(new DebugShaderPlugin())

  await app.initialize()
  app.shaderInfo()
  app.start()
}

setup()
