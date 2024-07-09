import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { BoardLayout } from "@/components/layout/BoardLayout";
import { Buttons } from "@/styles";
import { useGetBoard } from "@/queries/board/useBoard";

export default function BoardView() {
    const router = useRouter();
    const id = router.query.boardId;

    const { data } = useGetBoard(id);

    return (
        <BoardLayout title="게시글">
            <S.GoBackLink href="/board/list">뒤로가기</S.GoBackLink>
        </BoardLayout>
    )
}

namespace S {
    export const GoBackLink = styled(Link)`
        display: inline-block;
        ${Buttons.LinkDefault};
    `;
}
