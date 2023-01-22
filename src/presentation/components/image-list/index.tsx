import React from 'react'
import { ImageListStyles as Styled } from './styles'

import { Image } from '@/domain/models'
import ImageCard from '../image-card'

type Props = {
  images: Array<Image.Model>
}

const ImageList: React.FC<Props> = ({ images }) => {
  const prefix = 'https://image.tmdb.org/t/p/w500'
  console.log(`${prefix}${images[0].file_path}`)
  return (
    <Styled.Container>
      {images.map((image, index) => (
        <ImageCard
          src={`${prefix}${image.file_path}`}
          isLast={index === images.length - 1}
          key={image.file_path + Math.random()}
        />
      ))}
    </Styled.Container>
  )
}

export default ImageList
