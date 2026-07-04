import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useScrollToSection() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const scroll = () => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      if (location.pathname === '/') {
        scroll()
      } else {
        navigate(`/#${sectionId}`)
        requestAnimationFrame(() => {
          setTimeout(scroll, 100)
        })
      }
    },
    [location.pathname, navigate],
  )

  return scrollToSection
}

export function useHashScroll() {
  const location = useLocation()

  if (location.hash) {
    const id = location.hash.replace('#', '')
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
  }
}
