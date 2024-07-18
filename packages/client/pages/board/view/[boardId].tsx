import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { BoardLayout } from "@/components/layout/BoardLayout";
import { Buttons, Colors, Typography } from "@/styles";
import { useGetBoard } from "@/queries/board/useBoard";
import { defaultDateFormat } from "@/utils/date";

export default function BoardView() {
    const router = useRouter();
    const id = router.query.boardId;

    const { data } = useGetBoard(id);

    if (!data) return;

    return (
        <BoardLayout title="게시글">
            <S.ViewBoardWrapper>
                <S.ContentTitleArea>
                    <S.ContentTitle>{data.title}</S.ContentTitle>
                    <S.ContentDateArea>
                        <S.ContentDate>등록일: {defaultDateFormat(data.reg_date)}</S.ContentDate>
                        <S.ContentDate>수정일: {defaultDateFormat(data.mod_date)}</S.ContentDate>
                    </S.ContentDateArea>
                </S.ContentTitleArea>
                <S.ContentArea>
                    {data.content}
                </S.ContentArea>
                <S.GoBackLink href="/board/list">뒤로가기</S.GoBackLink>
            </S.ViewBoardWrapper>
        </BoardLayout>
    )
}

namespace S {
    export const ViewBoardWrapper = styled.section`
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 960px;
        width: 100%;
    `;

    export const ContentTitleArea = styled.article`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid ${Colors.Grey300};
        padding: 20px 0;
    `;

    export const ContentTitle = styled.h3`
        ${Typography.XXLarge};
    `;

    export const ContentDateArea = styled.aside``;

    export const ContentDate = styled.p`
        color: ${Colors.Grey500};
    `;

    export const ContentArea = styled.article`
        padding: 20px 16px;
    `;

    export const GoBackLink = styled(Link)`
        display: inline-block;
        ${Buttons.LinkDefault};
    `;
}
