import { styled } from '@mui/material'

export namespace MoviePageStyles {
  export const Container = styled('div')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 3rem 0px;
  `

  export const LoadingContainer = styled('div')`
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 115px);
  `
}
