import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { validateInputForm } from "@/utils/validate";

interface InitialStateType {
    [key: string]: string
}

interface UseInputStateProps {
    initialValues: InitialStateType,
    onSubmit: () => void,
}

export const useInputState = ({ initialValues, onSubmit }: UseInputStateProps) => {
    const [inputState, setInputState] = useState<InitialStateType>(initialValues);

    /**
     * @function handleChange
     * @param (e) input 값 변경 시 전달되는 input event 값
     * */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement, HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setInputState((prev: InitialStateType) => ({ ...prev, [name]: value }));
    }, []);

    /**
     * @function handleSubmit
     * @param (e) onSubmit 시 전달 되는 form event 값
     * @description 1. form 태그 안에 input 중에서 required 값을 찾아서 requiredValue 로 저장
     *              2. requiredValue 를 validateInputForm 의 인자로 전달 후 boolean 값으로 리턴
     * */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const requiredValue: InitialStateType = {};

        Array.from(form.elements).forEach((element) => {
            if (element instanceof HTMLInputElement && element.required) {
                requiredValue[element.name] = element.value;
            }
        });

        if (validateInputForm(requiredValue)) {
            onSubmit();
        } else {
            throw Error ('폼이 유효하지 않습니다. 입력하지 않은 값이 있는지 확인해주세요!');
        }

    };

    return { inputState, setInputState, handleChange, handleSubmit };
}
