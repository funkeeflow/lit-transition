import { CSSTransitionOptions } from '../interfaces';
import { instantiateDefault, mergeObjects } from '../utils';

interface CSSLandOptions extends CSSTransitionOptions  {
  // duration in ms (default: 500 )
  duration?: number
  // css easing options (default: ease-out)
  ease?: string,
  // opactiy to fade from and to (default: 0)
  opacity?: number
}

export const land = instantiateDefault('land',
  function land(opts:CSSLandOptions = {}) {
    const {
      duration = 500,
      ease = 'ease-out',
      opacity = 0
    } = opts;
    return mergeObjects({
      enter: {
        active: 'land1-enter-active',
        from: 'land1-enter-from',
        to: 'land1-enter-to',
      },
      leave: {
        active: 'land1-leave-active',
        from:  'land1-leave-from',
        to: 'land1-leave-to'
      },
      mode: 'both',
      css:`
      .land1-enter-active {
        transform-origin: 50% 50%;
        transition: transform ${duration}ms ${ease}, opacity ${duration}ms ${ease};
      }
      .land1-leave-active {
        transform-origin: 50% 50%;
        position: absolute;
        transition: transform ${duration}ms ${ease}, opacity ${duration}ms ${ease};
      }
      .land1-enter-from {
        opacity: ${opacity};
        transform: translate(0px, 0px) scale(3);
      }
      .land1-leave-to {
        transform: translate(0px, 100px);
        opacity: ${opacity};
      }`,
    }, opts)
  });