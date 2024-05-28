import styled from '@emotion/styled';
import { ReactNode } from "react";

export const TableBody = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableBodyContainer>
            { children }
        </S.TableBodyContainer>
    )
};

namespace S {
    export const TableBodyContainer = styled.tbody``;
}
