import styled from '@emotion/styled';
import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableContainer>
            { children }
        </S.TableContainer>
    )
};

namespace S {
    export const TableContainer = styled.table``;
}
