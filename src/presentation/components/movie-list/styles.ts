import { styled, Button as MUIButton } from '@mui/material'

export namespace MovieListStyles {
  type ContainerProps = {
    isEmpty?: boolean
  }
  export const Container = styled('div')<ContainerProps>`
    flex-grow: 1;
    margin: auto;
    width: 100%;
    max-width: 1500px;
    display: ${({ isEmpty }) => (isEmpty ? 'flex' : 'grid')};
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'space-between')};
    margin-top: 3rem;

    @media (max-width: 760px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `

  export const EmptyList = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-self: flex-start;
    text-align: center;

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
