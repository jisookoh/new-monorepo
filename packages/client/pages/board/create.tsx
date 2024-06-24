import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css';
import { BoardLayout } from "@/components/layout/BoardLayout";
import { useCreateBoard } from "@/queries/board/useBoard";
import { Button } from "@/components/common/button";
import {QuillEditor} from "@/components/common/editor/QuillTextEditor";

export default function CreateBoard() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const { mutate } = useCreateBoard();

    const changeTitleValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    const changeContentsValue = useCallback((value: string) => {
        setContent(value);
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({ title, content });
    };

    return (
        <BoardLayout title="게시글 등록">
            <S.CreateBoardFormWrapper onSubmit={onSubmit}>
                <S.Input type="text" value={title} onChange={changeTitleValue} />
                <QuillEditor editorValue={content} onChangeEditor={changeContentsValue} />
                <Button 
                    type="submit"
                    label="저장하기"
                />
            </S.CreateBoardFormWrapper>
        </BoardLayout>
    )
}

namespace S {
    export const CreateBoardFormWrapper = styled.form`
        
    `;

    export const Input = styled.input``;
}
