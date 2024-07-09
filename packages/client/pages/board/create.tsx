import styled from '@emotion/styled';
import Button from "@/components/common/button/Button";
import TextArea from "@/components/common/textarea/TextArea";
import { BoardLayout } from "@/components/layout/BoardLayout";
import { useCreateBoard } from "@/queries/board/useBoard";
import { useRouter } from "next/router";
import { useInputState } from "@/hooks/useInputState";

export default function CreateBoard() {
    const router = useRouter();
    const { inputState, setInputState, handleChange, handleSubmit } = useInputState({
        initialValues: {
            title: '',
            content: ''
        },
        onSubmit: () => {
            mutate({
                title: inputState.title,
                content: inputState.content
            })
        }
    });
    const { mutate } = useCreateBoard({
        onSuccess: () => {
            setInputState({
                title: '',
                content: ''
            });
            return router.push("/board/list");
        },
        onError: () => {
            alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
    });

    return (
        <BoardLayout title="게시글 등록">
            <S.CreateBoardFormWrapper onSubmit={handleSubmit}>
                <S.Input type="text" name="title" required value={inputState.title} onChange={handleChange} />
                <TextArea name="content" required value={inputState.content} onChange={handleChange} />
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
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 960px;
        width: 100%;
    `;

    export const Input = styled.input``;
}
