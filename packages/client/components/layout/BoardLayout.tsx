import styled from "@emotion/styled";
import { FontWeight, Typography } from "@/styles";
import { ReactNode } from "react";

interface BoardLayoutProps {
    title?: string,
    children?: ReactNode,
}

export const BoardLayout = ({ title = '게시판', children }: BoardLayoutProps) => {
    return (
        <S.BoardListContainer>
            <S.BoardListWrapper>
                <S.BoardTitle>{ title }</S.BoardTitle>
                { children }
            </S.BoardListWrapper>
        </S.BoardListContainer>
    )

}

namespace S {
    export const BoardListContainer = styled.div`
        padding: 120px 0;
     `;

    export const BoardListWrapper = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
     `;

    export const BoardTitle = styled.h2`
        ${Typography.Large};
         font-weight: ${FontWeight.Bold};
         
     `
}
