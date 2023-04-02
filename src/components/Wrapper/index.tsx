import React from 'react'

interface IType extends React.HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode
}

const Wrapper = ({ children }: IType) => <div className='wrapper'>{children}</div>

export default Wrapper
