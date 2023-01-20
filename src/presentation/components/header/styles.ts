import { styled } from '@mui/material'

export namespace HeaderStyles {
  export const Height = 65

  export const Container = styled('header')`
    height: ${Height}px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px calc((100% - 1500px) / 2);

    background-color: ${({ theme: { palette } }) => palette.background.paper};
    box-shadow: 0px 2px 2px rgba(31, 0, 2, 0.25);

    z-index: 10000;
  `

  export const LogoContainer = styled('div')`
    height: ${Height * 0.6}px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.5rem;

    a {
      font-weight: 600;
      font-size: 1.5em;
      text-transform: lowercase;
      text-decoration: none;
      color: white;
    }

    &::before {
      content: '';
      height: 30px;
      position: absolute;
      width: 10px;
      top: 6px;
      z-index: -1;
      left: 5px;
      background-color: ${({ theme }) => theme.palette.primary.main};

      transform: rotate(-45deg);
    }
  `

  export const NavContainer = styled('nav')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1.5rem;
  `

  export const NavLinkContainer = styled('a')`
    display: flex;
    height: min-content;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
    position: relative;
    text-decoration: none;

    &.last {
      margin-right: 0;
      padding-right: 0;
    }

    &::after {
      position: absolute;
      content: '';
      height: 2px;
      width: 0px;
      background: ${({ theme }) => theme.palette.primary.main};
      bottom: 4px;

      border-radius: 6px;
      margin: 0 auto;
      left: 0;
      right: 0;

      -o-transition: 0.5s;
      -ms-transition: 0.5s;
      -moz-transition: 0.5s;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }

    &:hover:after {
      width: 80%;
    }
  `

  export const NavLink = styled('p')`
    color: white;
    font-size: 1.25em;
    font-weight: 500;
    margin: 0;
    margin-left: 8px;
  `
}
