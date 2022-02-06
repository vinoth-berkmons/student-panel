
import React, { FC } from "react"

/**
 * Where all the details will be rendered inside content
 * @param param0 
 * @returns 
 */
const Content: FC = ({ children }) => {
    return (
        <div className="pt-6 pl-6 pr-6">
            {children}
        </div>
    )
}

export { Content }