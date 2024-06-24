import styled from '@emotion/styled';
import Link from "next/link";
import { Table, TableHead, TableBody, TableTr, TableTd } from "@/components/common/table";
import { useGetBoard } from "@/queries/board/useBoard";
import { BOARD_COLUMNS, BoardDataType } from "@/constants/board";
import { BoardLayout } from "@/components/layout/BoardLayout";
import { Buttons } from "@/styles";


export default function BoardList() {
    const { data: boardData } = useGetBoard();

    return (
        <BoardLayout>
            <S.BoardTable>
                <S.MoveToCreate>
                    <S.MoveToCreateLink href="/board/create">게시글 생성</S.MoveToCreateLink>
                </S.MoveToCreate>
                <Table>
                    <TableHead columns={BOARD_COLUMNS} />
                    <TableBody>
                        { boardData &&
                            boardData.map((board: BoardDataType) => (
                            <TableTr key={ board.id }>
                                <TableTd>{ board.id }</TableTd>
                                <TableTd>{ board.title }</TableTd>
                                <TableTd>{ board.reg_date }</TableTd>
                            </TableTr>
                        )) }
                    </TableBody>
                </Table>
            </S.BoardTable>
        </BoardLayout>
    )
};

namespace S {
    export const BoardTable = styled.div`
        max-width: 960px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    `;

    export const MoveToCreate = styled.div`
        text-align: right;
    `;

    export const MoveToCreateLink = styled(Link)`
        display: inline-block;
        ${Buttons.default};
    `;
}
