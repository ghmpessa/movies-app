import { styled } from '@mui/material'

export namespace FooterStyles {
  export const Height = 50
  export const Container = styled('footer')`
    height: ${Height}px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.common.white};

    font-weight: 500;

    a {
      margin: 0 5px;
      color: ${({ theme }) => theme.palette.common.white};
    }
  `
}
