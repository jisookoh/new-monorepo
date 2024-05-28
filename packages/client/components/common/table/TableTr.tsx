import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Colors } from "@/styles";

export const TableTr = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableTrContainer>
            { children }
        </S.TableTrContainer>
    )
};

namespace S {
    export const TableTrContainer = styled.tr`
    &:not(:last-child) {
      td {
        border-bottom: 1px solid ${Colors.Grey100};
      }
    }
  `;
}
