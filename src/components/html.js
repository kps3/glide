import { warn } from '../utils/log'
import { define } from '../utils/object'
import { isString } from '../utils/unit'

const TRACK_SELECTOR = '[data-glide-el="track"]'

export default function (Glide, Components) {
  const Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount () {
      this.root = Glide.selector
      this.track = this.root.querySelector(TRACK_SELECTOR)
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter((slide) => {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide)
      })
    }
  }

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get () {
      return Html._r
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set (r) {
      if (isString(r)) {
        r = document.querySelector(r)
      }

      Html._r = r
    }
  })

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get () {
      return Html._t
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set (t) {
      Html._t = t
    }
  })

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get () {
      return Html.track.children[0]
    }
  })

  return Html
}
