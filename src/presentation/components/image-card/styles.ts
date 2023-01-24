import { keyframes, styled } from '@mui/material'

export namespace ImageCardStyles {
  export const Container = styled('div')`
    height: 300px;
    width: 533px;
    margin-right: 20px;

    border-radius: 8px;

    &.last {
      margin: 0px;
    }
  `

  const fadeIn = keyframes`
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  `

  export const Image = styled('img')`
    width: 533px;
    min-width: 533px;
    height: 300px;
    min-height: 300px;

    border-radius: 8px;

    animation: ${fadeIn} 0.6s;
  `
}
