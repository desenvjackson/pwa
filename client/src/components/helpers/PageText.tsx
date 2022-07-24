import React from 'react'

interface Props{
    className?: string;
    fontSize?: any;
    color?: string;
    bold?: boolean;
    children: React.ReactNode; // 
}
export const PageText:React.FC <Props> = ({className, children}) => {
    return (
       <span className={className}>{children}</span>
    )
}