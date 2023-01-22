import { styled, Button as MUIButton } from '@mui/material'
import { Link } from 'react-router-dom'

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
    padding: 0px calc((100% - 1460px) / 2);

    background-color: ${({ theme: { palette } }) => palette.background.paper};
    box-shadow: 0px 2px 2px rgba(31, 0, 2, 0.25);

    z-index: 10000;

    @media (max-width: 1500px) {
      padding: 0px 20px;
    }

    @media (max-width: 1280px) {
      padding: 0px 80px;
    }

    @media (max-width: 859px) {
      padding: 0px 100px;
    }

    @media (max-width: 500px) {
      padding: 0px 20px;
    }

    @media (max-width: 281px) {
      padding: 0px 10px;
    }
  `

  export const LogoContainer = styled('div')`
    height: ${Height * 0.6}px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

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
}
