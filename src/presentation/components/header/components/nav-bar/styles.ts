import { styled, Button as MUIButton } from '@mui/material'
import { Link } from 'react-router-dom'

export namespace NavBarStyles {
  export const NavContainer = styled('nav')`
    display: flex;
    align-items: center;
  `

  export const NavLinkContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    margin: 0;
    margin-left: 40px;
    position: relative;
    text-decoration: none;

    &.last {
      padding-right: 0;
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
  `

  export const NavLink = styled('p')`
    color: white;
    font-size: 1.25em;
    font-weight: 500;
    margin: 0;
    margin-left: 8px;
  `

  export const Button = styled(MUIButton)`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    font-family: 'Raleway';
  `
}
