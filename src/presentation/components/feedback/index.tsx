import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export type FeedbackType = {
  message: string
  type?: 'success' | 'error'
  open?: boolean
}

type Props = {
  message: string
  type?: 'success' | 'error'
  open?: boolean
  closeFeedback: () => void
}

const Feedback: React.FC<Props> = ({
  message,
  type = 'success',
  open = false,
  closeFeedback,
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    closeFeedback()
  }

  return (
    <Snackbar
      sx={{
        zIndex: 10000,
      }}
      onClose={handleClose}
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
}

export default Feedback
