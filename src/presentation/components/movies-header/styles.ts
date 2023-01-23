import {
  styled,
  Fab as MUIFab,
  OutlinedInput as MUITextField,
} from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'

export namespace MoviesHeaderStyles {
  export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  `
  export const HeaderContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 3rem;
    position: relative;

    @media (max-width: 880px) {
      flex-direction: column-reverse;
    }
  `

  export const LinksContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  export const Link = styled(RouterLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    margin-right: 20px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 16px;
    font-weight: 500;

    z-index: 2;

    &.last {
      margin-right: 0;
    }

    &:after {
      position: absolute;
      content: '';
      height: 2px;
      width: 0px;
      background: ${({ theme }) => theme.palette.primary.main};
      bottom: 4px;

      border-radius: 6px;
      margin: 0 auto;

      -o-transition: 0.5s;
      -ms-transition: 0.5s;
      -moz-transition: 0.5s;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    &:hover:after {
      width: 100%;
    }

    transition: all 0.4s cubic-bezier(0.095, 0.79, 0.88, 1.535);

    @media (max-width: 600px) {
      font-size: 14px;
    }

    &.selected {
      &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        height: 2px;
        right: -2px;
        width: 50px;
        z-index: -1;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  `

  export const SearchContainer = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 880px) {
      margin-bottom: 2rem;
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
