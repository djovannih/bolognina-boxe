'use client'

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export default function YouTubeEmbed({ value }: { value: any }) {
  const { url } = value
  const id = getYouTubeId(url)!
  return <LiteYouTubeEmbed id={id} title="" />
}
