import { useEffect, useState } from 'react'

export type ReturnType = [boolean, () => void]

export const useScrollToTop = (): ReturnType => {
  const [isFabVisible, setIsFabVisible] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const fabListener = () => {
      if (window.scrollY > window.innerHeight && !isFabVisible) {
        setIsFabVisible(true)
      } else if (window.scrollY < window.innerHeight && isFabVisible) {
        setIsFabVisible(false)
      }
    }

    window.addEventListener('scroll', fabListener)

    return () => {
      window.removeEventListener('scroll', fabListener)
    }
  }, [isFabVisible])

  return [isFabVisible, handleScrollToTop]
}
