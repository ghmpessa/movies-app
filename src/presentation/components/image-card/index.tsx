import React from 'react'
import { ImageCardStyles as Styled } from './styles'

type Props = {
  src: string
  title?: string
  isLast?: boolean
}

const ImageCard: React.FC<Props> = ({ src, title, isLast }) => {
  return (
    <Styled.Container className={isLast ? 'last' : ''}>
      <Styled.Image src={src} alt={title} />
    </Styled.Container>
  )
}

export default ImageCard
