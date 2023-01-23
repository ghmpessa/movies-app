import {
  styled,
  Button as MUIButton,
  OutlinedInput as MUITextField,
  Fab as MUIFab,
} from '@mui/material'

export namespace TopRatedStyles {
  export const Container = styled('div')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `

  export const LoadingContainer = styled('div')`
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 115px);
  `

  export const LoadMore = styled(MUIButton)`
    width: 150px;
    align-self: center;
    margin: 20px 0px 40px;
  `

  export const SearchContainer = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    margin-top: 3rem;

    @media (max-width: 750px) {
      align-self: center;
    }
  `

  export const Input = styled(MUITextField)`
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.background.paper};
  `

  export const SearchFab = styled(MUIFab)`
    margin-left: 10px;
    width: 52px;
    height: 52px;

    &.Mui-disabled {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  `
}
