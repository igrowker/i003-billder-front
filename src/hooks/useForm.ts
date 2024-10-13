import { ChangeEvent, useEffect, useMemo, useState } from "react";


export type FormCheckedValues<T> = {
    [key in keyof T as `is${Capitalize<string & key>}Valid`]: string | null;
}

export type FormValidation<T> = {
    [key in keyof T]: [(value: T[key], formState: T) => boolean, string]
}

export type onInputChangeFunc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, numberInputType?: boolean, maxLenght?: number) => void;

export const useForm = <T,>(initialState: T, formValidations: FormValidation<T>) => {

    const [formState, setFormState] = useState<T>(initialState);
    const [formValidation, setFormValidation] = useState<FormCheckedValues<T>>({} as FormCheckedValues<T>)

    const isFormValid = useMemo(() => Object.values(formValidation).every(value => value === null), [formValidation]);

    useEffect(() => {
        createValidators();

    }, [formState]);

    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, numberInputType?: boolean,maxLenght?: number) => {
        const { value, name } = e.target;

        
        if (maxLenght && value.length <= maxLenght) {
            setFormState({
                ...formState,
                [name]: value
            })
        };
        if (numberInputType) {
            const numbersRegex = /^[0-9]+$/;
            if (!numbersRegex.test(value)) {
                return;
            }
            setFormState({
                ...formState,
                [name]: value
            })
            return;
        };

        setFormState({ ...formState, [name]: value });

    };

    const resetFormValues = () => {
        setFormState(initialState);
    };





    const createValidators = () => {
        const formCheckedValues = {} as FormCheckedValues<T>;

        for (const formField of Object.keys(formValidations!)) {
            const [fn, errorMessage] = formValidations[formField as keyof T];
            const capitalizedFormField = formField.charAt(0).toUpperCase() + formField.slice(1);
            formCheckedValues[(`is${capitalizedFormField}Valid`)] = fn(formState[formField as keyof T], formState) ? errorMessage : null;
        }

        setFormValidation(formCheckedValues);
    };




    return {
        ...formState,
        formState,
        formValidation,
        resetFormValues,
        onInputChange,
        isFormValid
    }


}