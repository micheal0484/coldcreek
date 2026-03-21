import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cold Creek Land Services',
    short_name: 'Cold Creek',
    description: 'Professional land clearing, debris removal, and property management services. Licensed & insured.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1b4332',
    theme_color: '#1b4332',
    icons: [
      {
        src: '/icon-192x192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-512x512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}