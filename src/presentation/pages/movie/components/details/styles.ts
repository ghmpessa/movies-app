import { keyframes, styled, Fab as MUIFab } from '@mui/material'

export namespace DetailsSectionStyles {
  export const Container = styled('section')`
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: ${({ theme }) => theme.shadows[2]};
    margin: 0px 0px 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  export const Poster = styled('img')`
    max-height: 100%;
    max-width: 100%;
    margin: 10px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadows[4]};

    @media (max-width: 768px) {
      align-self: center;
    }
  `

  export const HeaderContainer = styled('div')`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  `

  export const TitleContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0px;
      color: ${({ theme }) => theme.palette.common.white};
    }

    h6 {
      font-style: italic;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.palette.secondary.light};
      margin: 0px 0px 20px;
    }

    @media (max-width: 992px) {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.6;
      }
    }
  `

  export const HeaderButtonsContainer = styled('div')`
    display: flex;

    @media (max-width: 992px) {
      align-self: flex-end;
      margin-bottom: 10px;
    }
  `

  const grow = keyframes`
    from {
        width: 56px;
        align-items: center;
        border-radius: 50%;
      } to {
        width: 200px;
        align-items: flex-start;
        border-radius: 8px;
      }
  `

  const appear = keyframes`
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  `

  type ButtonProps = { isOnWatchList?: boolean }

  export const Button = styled(MUIFab)<ButtonProps>`
    display: flex;
    flex-direction: column;
    max-width: 56px;
    border-radius: 50%;
    overflow: hidden;

    position: relative;

    &:hover {
      max-width: 200px;
      animation: ${grow} 0.4s forwards;
    }

    &:hover:after {
      content: ${({ isOnWatchList }) =>
        isOnWatchList ? '"Remove from watchlist"' : '"Add to watchlist"'};
      align-self: center;
      margin-left: 24px;
      position: absolute;
      width: 200px;

      color: ${({ theme }) => theme.palette.common.white};

      animation: ${appear} 0.4s forwards;
    }

    @media (max-width: 992px) {
      max-width: 42px;
      max-height: 42px;
    }
  `

  export const InfosContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding: 1rem 2.5rem;
  `

  export const MainInfosContainer = styled('div')`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-bottom: 20px;

    h3 {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 0.8rem;
      margin: 0px 0px 8px;
      display: flex;
      position: relative;

      &:before {
        content: '';
        height: 0.8rem;
        width: 2px;
        margin-right: 8px;
        margin-top: 2px;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    p {
      margin: 0px;
      font-size: 1.2rem;
      line-height: ${1.2 * 1.4}rem;
      font-family: 'Roboto';
      font-weight: 400;
    }

    @media (max-width: 992px) {
      h3 {
        font-size: 0.7rem;
      }
      p {
        font-size: 1rem;
      }
    }
  `

  export const GenresContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
  `

  export const GenresCard = styled('span')`
    padding: 8px;
    margin: 0px 8px 8px 0px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadows[1]};
    background-color: #212529;
    font-weight: 500;

    @media (max-width: 992px) {
      font-size: 0.8rem;
    }
  `

  export const FooterInfosContainer = styled('div')`
    display: flex;
    flex-shrink: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  `

  export const FooterInfoContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 0px 2rem 1rem 0rem;

    label {
      margin-left: 8px;
      font-size: 18px;
      font-weight: 500;
    }

    @media (max-width: 992px) {
      label {
        font-size: 14px;
      }
    }
  `

  type RateProps = {
    rateColor?: 'red' | 'yellow' | 'green'
  }

  export const Rate = styled('div')<RateProps>`
    height: 56px;
    width: 56px;
    border-radius: 50%;

    margin: 0px 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #212529;
    border: 1px solid ${({ rateColor }) => rateColor};
    box-shadow: ${({ theme }) => theme.shadows[4]};

    label {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.palette.secondary.light};
      font-family: 'Raleway';
    }

    @media (max-width: 992px) {
      height: 42px;
      width: 42px;

      label {
        font-size: 1rem;
      }
    }
  `
}
