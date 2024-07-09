import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Colors } from "@/styles";

interface TableTrProps {
    children: ReactNode,
    onClick?: () => void
}

export const TableTr = ({ children, onClick }: TableTrProps) => {
    return (
        <S.TableTrContainer onClick={onClick}>
            { children }
        </S.TableTrContainer>
    )
};

namespace S {
    export const TableTrContainer = styled.tr`
    cursor: pointer;
    
    &:not(:last-child) {
      td {
        border-bottom: 1px solid ${Colors.Grey100};
      }
    }
  `;
}
