import React, { useState } from 'react'
import { HamburgerMenuStyles as Styled } from './styles'

import { useAppContext } from '@/presentation/contexts'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import { Menu, MenuItem, IconButton } from '@mui/material'

type Props = {
  isLogged: boolean
  handleLogout: () => void
  handleRequest: () => void
}

const HamburgerMenu: React.FC<Props> = ({
  isLogged,
  handleLogout,
  handleRequest,
}) => {
  const { getCurrentAccount } = useAppContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuRoundedIcon sx={{ width: 32, height: 32 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          zIndex: 10000,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Styled.MenuItem to='/'>
            <LocalMoviesRoundedIcon sx={{ color: 'white' }} />
            <Styled.MenuLabel>Movies</Styled.MenuLabel>
          </Styled.MenuItem>
        </MenuItem>
        {isLogged && (
          <MenuItem onClick={handleClose}>
            <Styled.MenuItem to={`/${getCurrentAccount?.().id}/watchlist`}>
              <BookmarkIcon sx={{ color: 'white' }} />
              <Styled.MenuLabel>Watchlist</Styled.MenuLabel>
            </Styled.MenuItem>
          </MenuItem>
        )}
        {isLogged && (
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              handleLogout()
            }}
          >
            <Styled.MenuItem to={''} onClick={e => e.preventDefault}>
              <ExitToAppRoundedIcon sx={{ color: 'white' }} />
              <Styled.MenuLabel>Logout</Styled.MenuLabel>
            </Styled.MenuItem>
          </MenuItem>
        )}
        {!isLogged && (
          <MenuItem
            sx={{
              alignSelf: 'flex-end',
            }}
            onClick={() => {
              setAnchorEl(null)
              handleRequest()
            }}
          >
            <ExitToAppRoundedIcon sx={{ color: 'white' }} />
            <Styled.MenuLabel>Login</Styled.MenuLabel>
          </MenuItem>
        )}
      </Menu>
    </>
  )
}

export default HamburgerMenu
