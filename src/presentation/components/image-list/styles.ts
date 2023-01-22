import { styled } from '@mui/material'

export namespace ImageListStyles {
  export const Container = styled('div')`
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    flex: 1;

    padding: 0;
    margin: 0;

    scrollbar-width: thin;
    scrollbar-color: #6969dd #e0e0e0;
    ::-webkit-scrollbar {
      width: 12px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.palette.secondary.dark};
      border-radius: 1000px;
    }
  `
}
