import { styled, Fab as MUIFab } from '@mui/material'

export namespace FabStyles {
  export const Fab = styled(MUIFab)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    transition: opacity 0.3s ease-in-out;
  `
}
