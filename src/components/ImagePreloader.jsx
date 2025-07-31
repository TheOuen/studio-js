'use client'

import { useEffect } from 'react'

export function useImagePreloader(imageSources = []) {
  useEffect(() => {
    if (!imageSources.length) return

    const imagePromises = imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    // Preload images but don't block rendering
    Promise.allSettled(imagePromises).then((results) => {
      const failedImages = results
        .filter(result => result.status === 'rejected')
        .length
      
      if (failedImages > 0) {
        console.warn(`Failed to preload ${failedImages} images`)
      }
    })
  }, [imageSources])
}

export function ImagePreloader({ imageSources = [] }) {
  useImagePreloader(imageSources)
  return null
}