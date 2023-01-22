import { FooterStyles } from '@/presentation/components/footer/styles'
import { HeaderStyles } from '@/presentation/components/header/styles'
import { styled, Button as MUIButton } from '@mui/material'

export namespace WathlistStyles {
  type ContainerProps = {
    isEmpty?: boolean
  }

  export const Container = styled('div')<ContainerProps>`
    flex: 1;
    min-height: calc(100vh - ${HeaderStyles.Height + FooterStyles.Height}px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `

  export const Title = styled('h2')`
    font-size: 2rem;
    font-weight: bold;
    line-height: 3rem;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    align-self: flex-start;
    margin: 3rem 0 0 0;
  `

  export const LoadingContainer = styled('div')`
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 115px - 7rem);
  `

  export const LoadMore = styled(MUIButton)`
    width: 150px;
    align-self: center;
    margin: 20px 0px 40px;
  `
}
