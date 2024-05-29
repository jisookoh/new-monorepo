import styled from '@emotion/styled';
import { ReactNode } from "react";
import {Typography} from "@/styles";

export const TableTd = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableTdContainer>
            { children }
        </S.TableTdContainer>
    )
};

namespace S {
    export const TableTdContainer = styled.td`
        padding: 16px;
        ${Typography.XXSmall};
    `;
}
