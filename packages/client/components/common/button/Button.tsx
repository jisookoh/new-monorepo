import styled from "@emotion/styled";
import { Colors } from "@/styles";

interface ButtonProps {
    label?: string,
    onClick?: () => void,
}

export const Button = ({ label = "확인", onClick }: ButtonProps) => {
    return (
        <S.Button onClick={onClick}>{ label }</S.Button>
    )
}

namespace S {
    export const Button = styled.button`
        padding: 12px 16px;
        background-color: ${Colors.Blue500};
        color: ${Colors.White};
        border-radius: 4px;
    `
}
