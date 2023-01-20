import { styled } from '@mui/material'

import { HeaderStyles } from '../header/styles'
import { FooterStyles } from '../footer/styles'

export namespace MainContainerStyles {
  export const Container = styled('main')`
    margin-top: ${HeaderStyles.Height}px;
    min-height: calc(100vh - (${HeaderStyles.Height + FooterStyles.Height}));
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.background.default};
    padding: 0px calc((100% - 1300px) / 2);
  `
}
