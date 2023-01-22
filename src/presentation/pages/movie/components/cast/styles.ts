import { styled } from '@mui/material'

export namespace CastSectionStyles {
  export const Container = styled('section')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 0px 3rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
      color: ${({ theme }) => theme.palette.primary.contrastText};
      align-self: flex-start;
      margin: 0px 0px 1.5rem;
    }
  `
}
