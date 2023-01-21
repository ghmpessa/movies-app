import { styled, Button as MUIButton } from '@mui/material'

export namespace MovieListStyles {
  export const Container = styled('div')`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1500px;
  `

  export const EmptyList = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h3 {
      font-size: 1.5rem;
      margin: 5px;
      font-weight: 500;
    }
  `

  export const Button = styled(MUIButton)`
    width: 200px;
    padding: 12px 24px;
    margin: 2rem;
  `
}
