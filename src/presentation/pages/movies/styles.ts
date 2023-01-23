import { styled, Button as MUIButton } from '@mui/material'

export namespace HomePageStyles {
  export const Container = styled('div')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `

  export const LoadMore = styled(MUIButton)`
    width: 150px;
    align-self: center;
    margin: 20px 0px 40px;
  `
}
