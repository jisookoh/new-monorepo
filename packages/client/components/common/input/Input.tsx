import { InputHTMLAttributes, memo } from "react";
import styled from "@emotion/styled";
import {Colors} from "@/styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: "text" | "password";
}

const Input = ({
    inputType = "text",
    ...rest
}: InputProps) => {
    return (
        <S.InputContainer
            type={inputType}
            {...rest}
        />
    )
}

export default memo(Input);

namespace S {
    export const InputContainer = styled.input`
        display: block;
        width: 100%;
        padding: 10px 16px;
        border-radius: 8px;
        border: 1px solid ${Colors.Grey300};
        
        &:focus {
            border-color: ${Colors.Grey600};
        }
    `;
}
