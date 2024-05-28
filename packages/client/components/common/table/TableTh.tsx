import styled from '@emotion/styled';
import { ReactNode } from "react";

export const TableTh = ({ children }: { children: ReactNode }) => {
    return (
        <S.TableThContainer>
            { children }
        </S.TableThContainer>
    )
};

namespace S {
    export const TableThContainer = styled.th``;
}
