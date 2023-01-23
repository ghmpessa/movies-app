import { styled } from '@mui/material'

export namespace MovieCardStyles {
  export const Container = styled('div')`
    height: 400px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.palette.background.paper};

    border-radius: 8px;

    margin-bottom: 3rem;

    overflow: hidden;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadows[1]};

    transition: transform 0.2s cubic-bezier(0.095, 0.79, 0.88, 1.535),
      all 0.4s ease-in;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  `

  type ImageProps = {
    src: string
  }

  export const Image = styled('div')<ImageProps>`
    flex: 1;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    width: 100%;
  `

  export const InfosContainer = styled('div')`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
  `

  export const Title = styled('h2')`
    font-size: 1rem;
    font-weight: 500;
    text-align: start;
    margin: 0;
    font-family: Poppins;
    color: ${({ theme }) => theme.palette.common.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;

    &:before {
      content: '';
      height: 20px;
      width: 2px;
      margin-right: 8px;
      margin-top: 2px;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  `

  export const Label = styled('label')`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.secondary.light};
    margin-left: 10px;
    margin-top: 4px;

    &:hover {
      cursor: pointer;
    }
  `

  type RateProps = {
    rateColor?: 'red' | 'yellow' | 'green'
  }

  export const Rate = styled('div')<RateProps>`
    height: 35px;
    width: 35px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 10px;
    top: -20px;

    background-color: #212529;
    border: 1px solid ${({ rateColor }) => rateColor};
    box-shadow: ${({ theme }) => theme.shadows[2]};

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${({ theme }) => theme.palette.secondary.light};
      font-family: 'Raleway';
      position: absolute;
      top: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  `
}
