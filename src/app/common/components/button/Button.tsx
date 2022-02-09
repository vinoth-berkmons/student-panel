import './Button.css';

import { FC } from 'react';
import styled from 'styled-components';

import { ButtonModel } from '../../models/Common';

/**
 * Styled Button
 * Custom button
 * @param param0 
 * @returns 
 */

const Button: FC<ButtonModel> = ({ clickEvent, formValue, width = '70', height = '50', bg = "#007d8d", color = "#FFF", style, disable }) => {
    return (

        <StyledButton
            type={formValue.type}
            className="button"
            width={width}
            height={height}
            onClick={clickEvent}
            bg={bg}
            color={color}
            disabled={disable}
            style={style}
        >
            <span className='pb-3px '>{formValue.name}</span>
        </StyledButton>

    )
}

const StyledButton = styled.button<any>`
width: ${props => props.width};
height: ${props => props.height};
background: ${props => props.bg};
color: ${props => props.color};
`


export default Button;