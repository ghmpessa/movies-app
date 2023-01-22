import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export namespace HamburgerMenuStyles {
  export const MenuItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    margin: 0;
    text-decoration: none;
  `

  export const MenuLabel = styled('p')`
    color: white;
    font-weight: 500;
    margin: 0;
    margin-left: 8px;
  `
}
