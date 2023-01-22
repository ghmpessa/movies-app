import React from 'react'
import { ImageCardStyles as Styled } from './styles'

type Props = {
  src: string
  title?: string
}

const ImageCard: React.FC<Props> = ({ src, title }) => {
  return (
    <Styled.Container>
      <Styled.Image src={src} alt={title} />
    </Styled.Container>
  )
}

export default ImageCard
