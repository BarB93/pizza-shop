import { useEffect, useRef } from 'react'

export const useIntersectionObserver = ({ ref, canLoad, isLoading, currentPage, callback }) => {
  const observer = useRef()

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    const options = {
      root: document,
      rootMargin: '0px',
      threshold: 0,
    }

    const cb = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }

    observer.current = new IntersectionObserver(cb, options)
    observer.current.observe(ref.current)
    //eslint-disable-next-line
  }, [isLoading, currentPage])
}
