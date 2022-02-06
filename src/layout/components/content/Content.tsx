
import React, { FC } from "react"

/**
 * Where all the details will be rendered inside content
 * @param param0 
 * @returns 
 */
const Content: FC = ({ children }) => {
    return (
        <div className="mt-6 ml-6 mr-6">
            {children}
        </div>
    )
}

export { Content }