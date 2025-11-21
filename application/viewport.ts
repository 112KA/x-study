import { EventDispatcher } from 'three'

export interface TViewportEventMap {
  resize: { width: number, height: number, aspectRatio: number }
}

/**
 * @class Viewport
 * @classdesc Represents the viewport of an HTML element and dispatches resize events.
 * @extends EventDispatcher
 * @template TViewportEventMap
 */
export class Viewport extends EventDispatcher<TViewportEventMap> {
  public width: number
  public height: number
  public aspectRatio: number

  constructor($element: HTMLElement) {
    super()

    this.width = $element.clientWidth
    this.height = $element.clientHeight
    this.aspectRatio = this.width / this.height

    const resizeObserver = new ResizeObserver(this.handleResize)
    resizeObserver.observe($element)
  }

  private handleResize = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      this.width = entry.contentRect.width
      this.height = entry.contentRect.height
      this.aspectRatio = this.width / this.height
      this.dispatchEvent({
        type: 'resize',
        width: this.width,
        height: this.height,
        aspectRatio: this.aspectRatio,
      })
    }
  }
}
