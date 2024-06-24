import { HTMLProps, memo } from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";


const Quill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

interface QuillTextEditorProps extends HTMLProps<HTMLTextAreaElement> {
    editorValue: string;
    onChangeEditor: (value: string) => void;
}

export const QuillEditor = memo(({
      editorValue,
      onChangeEditor,
  }: QuillTextEditorProps) => {
    return (
        <S.StyledQuillEditor value={editorValue} onChange={onChangeEditor} />
    )
});

namespace S {
    export const StyledQuillEditor = styled(Quill)`
        width: 100%;
        height: 360px;

        > .ql-container {
            height: calc(360px - 42px);
        }
    `;
}
