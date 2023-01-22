import { styled } from '@mui/material'

export namespace BackdropSectionStyles {
  export const Container = styled('section')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
      color: ${({ theme }) => theme.palette.primary.contrastText};
      align-self: flex-start;
      margin: 0px 2rem 0px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 0px 1.5rem;
      z-index: 1;

      &::before {
        content: '';
        height: 40px;
        position: absolute;
        width: 4px;
        left: -10px;
        top: 4px;
        z-index: -1;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  `
}
