import React, { PropsWithChildren } from 'react'

const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}

export default Box
