import styled from '@emotion/styled';
import { ReactNode } from "react";
import { Colors } from "@/styles";

export const Table = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableContainer>
            { children }
        </S.TableContainer>
    )
};

namespace S {
    export const TableContainer = styled.table`
        width: 100%;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    `;
}
