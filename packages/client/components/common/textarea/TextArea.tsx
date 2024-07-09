import { InputHTMLAttributes, memo } from "react";
import styled from "@emotion/styled";
import { Colors } from "@/styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({
    ...rest
}: TextAreaProps) => {
    return (
        <S.TextAreaContainer
            {...rest}
        />
    )
};

export default memo(TextArea);

namespace S {
    export const TextAreaContainer = styled.textarea`
        width: 100%;
        height: 360px;
        border: 1px solid ${Colors.Grey300};
        padding: 16px;
        resize: none;
        border-radius: 8px;
        
        &:focus {
            border-color: ${Colors.Grey600};
        }
    `;
}
