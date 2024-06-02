import { useState } from "react";
import styled from '@emotion/styled';
import { FontWeight, Typography } from "@/styles";
import { BoardLayout } from "@/components/layout/BoardLayout";
import {CreateBoardDataType} from "@/constants/board";


export default function CreateBoard() {
    const [createBoardData, setCreateBoardData] = useState<CreateBoardDataType>({
        title: '',
        contents: ''
    });


    return (
        <BoardLayout title="게시글 등록">
            <S.CreateBoardFormWrapper>

            </S.CreateBoardFormWrapper>
        </BoardLayout>
    )
}

namespace S {
    export const CreateBoardFormWrapper = styled.form`
        
    `;
}
