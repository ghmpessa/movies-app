import { styled } from '@mui/material'

export namespace ActorCard {
  export const Container = styled('div')`
    height: 350px;
    width: 200px;
    flex: 1 0 auto;

    margin-right: 20px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background-color: ${({ theme }) => theme.palette.background.paper};

    border-radius: 8px;

    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows[1]};

    &.last {
      margin: 0;
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

  export const Title = styled('p')`
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

  export const NoPhoto = styled('div')`
    flex: 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  `
}
