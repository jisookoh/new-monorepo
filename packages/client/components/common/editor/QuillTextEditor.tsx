import { HTMLProps } from "react";
import dynamic from "next/dynamic";


const Quill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

interface QuillTextEditorProps extends HTMLProps<HTMLTextAreaElement> {
    editorValue: string;
    onChangeEditor: (value: string) => void;
}

export const QuillEditor = ({
      editorValue,
      onChangeEditor,
  }: QuillTextEditorProps) => {
    return (
        <Quill value={editorValue} onChange={onChangeEditor} />
    )
};
