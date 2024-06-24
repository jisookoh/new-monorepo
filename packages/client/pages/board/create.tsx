import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from '@emotion/styled';
import Button from "@/components/common/button/Button";
import TextArea from "@/components/common/textarea/TextArea";
import { BoardLayout } from "@/components/layout/BoardLayout";
import { useCreateBoard } from "@/queries/board/useBoard";
import { useRouter } from "next/router";

interface FormData {
    [key: string]: string;
}

export default function CreateBoard() {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const { mutate } = useCreateBoard({
        onSuccess: () => {
            setTitle('');
            setContent('');
            return router.push("/board/list");
        },
        onError: () => {
            alert("저장에 실패하였습니다. 다시 시도해 주세요.");
        }
    });

    const changeTitleValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    const changeContentsValue = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }, []);

    const validateForm = (requiredData: FormData): boolean => {
        let isValid = true;

        Object.entries(requiredData).forEach(([key, value]) => {
            if (!value) {
                console.error(`${key} is invalid`);

                isValid = false;
            }
        });

        return isValid;
    }

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const requiredValue: FormData = {};

        Array.from(form.elements).forEach((element) => {
            if (element instanceof HTMLInputElement && element.required) {
                requiredValue[element.name] = element.value;
            }
        });

        if (validateForm(requiredValue)) {
            mutate({ title, content });
        } else {
            console.error(`폼이 유효하지 않습니다. 입력하지 않은 값이 있는지 확인해주세요!`);
        }

    }, [title, content, mutate]);

    return (
        <BoardLayout title="게시글 등록">
            <S.CreateBoardFormWrapper onSubmit={onSubmit}>
                <S.Input type="text" name="title" required value={title} onChange={changeTitleValue} />
                <TextArea name="content" required value={content} onChange={changeContentsValue} />
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
