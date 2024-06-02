import styled from '@emotion/styled';
import { FontWeight, Typography } from "@/styles";
import { Table, TableHead, TableBody, TableTr, TableTd } from "@/components/common/table";
import { useGetBoard } from "@/queries/board/useBoard";
import { BOARD_COLUMNS, BoardDataType } from "@/constants/board";
import { BoardLayout } from "@/components/layout/BoardLayout";

export default function BoardList() {
    const { data: boardData } = useGetBoard();

    return (
        <BoardLayout>
            <S.BoardTable>
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

    export const BoardTable = styled.div`
        max-width: 960px;
        width: 100%;
    `;
}
