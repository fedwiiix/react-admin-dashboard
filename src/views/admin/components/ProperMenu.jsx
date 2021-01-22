import React from 'react'
import { IconButton, Popover } from '@material-ui/core'
import PropTypes from 'prop-types'

const ProperMenu = ({ icon, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {children}
      </Popover>
    </div>
  )
}

ProperMenu.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node
}

export default ProperMenu
