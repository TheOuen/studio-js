'use client'

import { useState } from 'react'
import Image from 'next/image'

// Default fallback placeholder image (base64 encoded small image)
const FALLBACK_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNCAyNkg0NlYzOEgzNFYyNloiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI2IDQySDU0VjU0SDI2VjQyWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'

export function SafeImage({ 
  src, 
  alt = '', 
  fallbackSrc, 
  className = '', 
  showPlaceholder = true,
  priority = false,
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    
    // Try fallback image first, then placeholder
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
    } else if (showPlaceholder) {
      setImgSrc(FALLBACK_PLACEHOLDER)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  return (
    <div className="relative">
      {/* Loading state */}
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Error state when no fallback available */}
      {hasError && !showPlaceholder && (
        <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
          <div className="text-center text-gray-500 p-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        {...props}
      />
    </div>
  )
}

// Regular img element version for non-Next.js Image usage
export function SafeImg({ 
  src, 
  alt = '', 
  fallbackSrc, 
  className = '', 
  showPlaceholder = true,
  loading = 'lazy',
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    
    // Try fallback image first, then placeholder
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
    } else if (showPlaceholder) {
      setImgSrc(FALLBACK_PLACEHOLDER)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  return (
    <div className="relative">
      {/* Loading state */}
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Error state when no fallback available */}
      {hasError && !showPlaceholder && (
        <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
          <div className="text-center text-gray-500 p-4">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        {...props}
      />
    </div>
  )
}