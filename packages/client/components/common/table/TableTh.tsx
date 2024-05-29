import styled from '@emotion/styled';
import { ReactNode } from "react";
import { Typography } from "@/styles";

export const TableTh = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableThContainer>
            { children }
        </S.TableThContainer>
    )
};

namespace S {
    export const TableThContainer = styled.th`
        text-align: left;
        padding: 12px 16px;
        ${Typography.XSmall};
    `;
}
