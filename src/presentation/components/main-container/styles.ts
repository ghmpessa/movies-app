import { styled } from '@mui/material'

import { HeaderStyles } from '../header/styles'
import { FooterStyles } from '../footer/styles'

export namespace MainContainerStyles {
  export const Container = styled('main')`
    margin-top: ${HeaderStyles.Height}px;
    width: 100%;
    min-height: calc(100vh - (${HeaderStyles.Height + FooterStyles.Height}px));
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.palette.background.default};
    padding: 0px calc((100% - 1460px) / 2);

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
}
