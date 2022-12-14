import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"

const StyledButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.beige};
`

export const IconButton = styled(({ icon, ...rest }) => {
  let clone = React.cloneElement(icon, rest)
  return <StyledButton as={clone.type} {...rest} className={rest.className} />
})`
  //could add styles here
`
IconButton.defaultProps = {
  size: 24,
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.string,
}
