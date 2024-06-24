import styled from "@emotion/styled";
import { Buttons, Colors } from "@/styles";
import { ButtonColor } from "@/constants/button";
import { ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    onClick?: () => void,
    theme?: ButtonColor
}

export const Button = memo(({
    label = "확인",
    onClick,
    theme,
    ...rest
}: ButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            theme={theme}
            {...rest}
        >
            { label }
        </S.Button>
    )
});

namespace S {
    export const Button = styled.button<{ theme?: ButtonColor }>`
        color: ${Colors.White};
        
        ${({ theme }) => {
            switch (theme) {
                case ButtonColor.Blue:
                    return `
                        background-color: ${Colors.Blue500};
                        
                        :hover {
                            background-color: ${Colors.Blue400};
                        }
                    `;
                case ButtonColor.Yellow:
                    return `
                        background-color: ${Colors.Yellow500};
                        
                        :hover {
                            background-color: ${Colors.Yellow400};
                        }
                    `;
                case ButtonColor.Green:
                    return `
                        background-color: ${Colors.Green700};
                        
                        :hover {
                            background-color: ${Colors.Green600};
                        }
                    `;
                case ButtonColor.Red:
                    return `
                        background-color: ${Colors.Red500};
                        
                        :hover {
                            background-color: ${Colors.Red400};
                        }
                    `;
                case ButtonColor.Purple:
                    return `
                        background-color: ${Colors.Purple500};
                        
                        :hover {
                            background-color: ${Colors.Purple400};
                        }
                    `;
                default:
                    return `
                        background-color: ${Colors.Green700};
                        
                        :hover {
                            background-color: ${Colors.Green600};
                        }
                    `;
            }
        }};

        ${Buttons.Default};
    `;
}
