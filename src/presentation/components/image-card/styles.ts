import { styled } from '@mui/material'

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

  export const Image = styled('img')`
    width: 533px;
    min-width: 533px;
    height: 300px;
    min-height: 300px;

    border-radius: 8px;
  `
}
