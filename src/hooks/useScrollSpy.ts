import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 96) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    const ids = idsKey ? idsKey.split('|') : []
    if (ids.length === 0) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0.15, 0.35, 0.55],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey, offset])

  return activeId
}
