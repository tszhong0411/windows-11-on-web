import React from 'react'

export const useClickOutside = <T extends HTMLElement>(
  fn: () => void,
  nodes?: Array<HTMLElement | null>
) => {
  const ref = React.useRef<T | null>(null)

  React.useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement) ?? {}

      if (Array.isArray(nodes)) {
        const shouldIgnore =
          target?.hasAttribute('data-ignore-outside-clicks') ||
          (!document.body.contains(target) && target.tagName !== 'HTML')
        const shouldTrigger = nodes.every(
          (node) => !!node && !event.composedPath().includes(node)
        )

        shouldTrigger && !shouldIgnore && fn()
      } else if (ref.current && !ref.current.contains(target as Node)) {
        fn()
      }
    }

    document.addEventListener('mousedown', clickOutsideHandler)

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler)
    }
  }, [fn, nodes])

  return ref
}
