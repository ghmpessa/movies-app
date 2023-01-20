import { styled } from '@mui/material'
import { Button as MUIButton } from '@mui/material'
export namespace ErrorStyles {
  export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 116px);

    h2 {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.palette.primary.contrastText};
    }
  `

  export const Button = styled(MUIButton)`
    width: 200px;
    padding: 12px 24px;
    margin: 10px;
    letter-spacing: 1.5;
  `
}
