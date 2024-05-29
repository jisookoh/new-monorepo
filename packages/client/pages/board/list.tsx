import styled from '@emotion/styled';
import { Colors, FontWeight, Typography } from "@/styles";
import {Table, TableHead, TableBody, TableTr, TableTd} from "@/components/common/table";

interface BoardDataType {
    id: number,
    title: string,
    writer: string,
    reg_dt: string
}

const BOARD_COLUMNS: string[] = ['번호', '제목', '작성자', '등록일'];

const BOARD_DUMMY_DATA: BoardDataType[] = [
    {
        id: 1,
        title: '게시판 더미 데이터',
        writer: '고지수',
        reg_dt: '2024-05-29'
    },
    {
        id: 2,
        title: '게시판 더미 데이터2',
        writer: '고지수2',
        reg_dt: '2024-05-29'
    },
]

export default function list() {
    return (
        <S.BoardListContainer>
            <S.BoardListWrapper>
                <S.BoardTitle>게시판</S.BoardTitle>
                <S.BoardTable>
                    <Table>
                        <TableHead columns={BOARD_COLUMNS} />
                        <TableBody>
                            { BOARD_DUMMY_DATA.map(data => (
                                <TableTr key={data.id}>
                                    <TableTd>{ data.id }</TableTd>
                                    <TableTd>{ data.title }</TableTd>
                                    <TableTd>{ data.writer }</TableTd>
                                    <TableTd>{ data.reg_dt }</TableTd>
                                </TableTr>
                            )) }
                        </TableBody>
                    </Table>
                </S.BoardTable>
            </S.BoardListWrapper>
        </S.BoardListContainer>
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
