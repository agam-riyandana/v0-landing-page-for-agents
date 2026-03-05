'use client'

import { useEffect } from 'react'

interface AdSenseProps {
  clientId?: string
  slotId: string
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
}

export function AdSense({
  clientId = 'ca-pub-xxxxxxxxxxxxxxxx',
  slotId,
  format = 'auto',
  responsive = true,
  className = '',
}: AdSenseProps) {
  useEffect(() => {
    try {
      if ((window as any).adsbygoogle === undefined) {
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + clientId
        script.crossOrigin = 'anonymous'
        document.head.appendChild(script)
      } else {
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.error('[v0] AdSense error:', error)
    }
  }, [clientId])

  return (
    <div className={`flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: format === 'auto' ? 'block' : 'inline-block',
          textAlign: 'center',
        }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}
