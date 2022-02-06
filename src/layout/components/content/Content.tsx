
import React, { FC } from "react"

/**
 * Where all the details will be rendered inside content
 * @param param0 
 * @returns 
 */
const Content: FC = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export { Content }