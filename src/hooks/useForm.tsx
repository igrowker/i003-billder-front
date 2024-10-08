import { ChangeEvent, useEffect, useState } from "react";


type FormCheckedValues<T> = {
    [key in keyof T as `is${Capitalize<string & key>}Valid`]: string | null;
}

export type FormValidation<T> = {
    [key in keyof T]: [(value: T[key]) => boolean, string]
}


export const useForm = <T,>(initialState: T, formValidations: FormValidation<T>) => {

    const [formState, setFormState] = useState<T>(initialState);
    const [formValidation, setFormValidation] = useState<FormCheckedValues<T>>({} as FormCheckedValues<T>)




    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, maxLenght?: number) => {
        const { value, name } = e.target;

        if (maxLenght && value.length <= maxLenght) {
            setFormState({
                ...formState,
                [name]: value
            })
        };

    };

    const resetFormValues = () => {
        setFormState(initialState);
    };





    const createValidators = () => {
        const formCheckedValues = {} as FormCheckedValues<T>;

        for (const formField of Object.keys(formValidations!)) {
            const [fn, errorMessage] = formValidations[formField as keyof T];
            const capitalizedFormField = formField.charAt(0).toUpperCase() + formField.slice(1);
            formCheckedValues[(`is${capitalizedFormField}Valid`)] = fn(formState[formField as keyof T]) ? errorMessage : null;
        }

        setFormValidation(formCheckedValues);
    };

    useEffect(() => {
        createValidators();
    }, [formState]);


    return {
        ...formState,
        formState,
        formValidation,
        resetFormValues,
        onInputChange,
    }


}