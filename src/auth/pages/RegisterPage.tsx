import React, { useContext, useState, useTransition } from "react";
import {
	// RegisterSignatureTab,
	AccountDataTab,
	PersonalDataTab,
} from "@/auth/components/";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useNavigate } from "react-router-dom";
import { FormValidation, useForm } from "@/hooks/useForm";
import { UserRegisterCredentials } from "@/interfaces/request";
import {  useAuthStore } from "@/store/authStore";
import { AlertsContext } from "@/context/AlertsContext";
import { FullScreenLoader } from "@/ui/components/spinner";

enum RegisterTabs {
	Initial = 1,
	// SignatureTab = 2,
	EndTab = 2,
}

const formInitialState: UserRegisterCredentials = {
	fullName: '',
	dni: '',
	address: '',
	country: '',
	city: '',
	phoneNumber: '',
	email: '',
	password: '',
	repeatPassword: ''
}

const formValidations: FormValidation<UserRegisterCredentials> = {
	address: [(value) => value.length < 3, "La dirección tiene que tener mas de 3 caracteres"],  
	city: [(value) => value.length < 3, "La ciudad tiene que tener mas de 3 caracteres"],
	country: [(value) => value.length < 2, "El país tiene que tener mas de 2 caracteres"],
	dni: [(value) => value.length < 3, "El DNI tiene que tener mas de 3 caracteres"],
	fullName: [(value)  => value.length <= 0, "Este campo no puede ser vacio"], 
	phoneNumber: [(value) => value.length < 3, "El teléfono tiene que tener mas de 3 caracteres"],
	email: [(value) => value.length > 0 && !value.includes('@'), "El email debe incluir una @"],
	password: [(value) => value.length < 8 || value.includes(' '), "La contraseña debe tener al menos 8 caracteres y no debe contener espacios"],
	repeatPassword: [(value, formState) => value !== formState.password, "Las contraseñas no coinciden"]
}

export const RegisterPage = () => {

	const navigate = useNavigate()
	const registerUser = useAuthStore(state => state.registerUser);  
	const [isLoading, setIsLoading] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState(RegisterTabs.Initial);
	const { formState, formValidation, onInputChange, isFormValid } = useForm(formInitialState, formValidations)
	const { newAlert } = useContext(AlertsContext);

	const handleNextTab = () => {
		const nextTab = tab == RegisterTabs.EndTab ? null : tab + 1;
		if (nextTab === null) return;
		startTransition(() => {
			setTab(nextTab);
		});
	};
	const handleReturnTab = () => {
		const tabToChange = tab == RegisterTabs.Initial ? tab : tab - 1;
		if (tabToChange == tab) return navigate("register");
		startTransition(() => {
			setTab(tabToChange);
		});
	};

	
	const onFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isFormValid === false) return;
		setIsLoading(true)
		const { hasErrors, message } = await registerUser(formState, navigate)
		if ( hasErrors ) {
			newAlert({
				type: 'error',
				message: message
			});
			setIsLoading(false)
			return;

		};
		setIsLoading(false);
		newAlert({
			type: 'success',
			message: message
		});





	};

	if ( isLoading ) return <FullScreenLoader isVisible={true} />

	return (
		<ReturnLayout
			isPending={isPending}
			returnFunction={handleReturnTab}
			title="Registrate"
		>
			<form  onSubmit={onFormSubmit}>

				{
					tab === RegisterTabs.Initial && (
						<PersonalDataTab
							formValidations={formValidation}
							formState={formState}
							onInputChange={onInputChange}
							handleContinue={handleNextTab}
						/>
					)
				}
				{/* {tab === RegisterTabs.SignatureTab && (
              <RegisterSignatureTab handleContinue={handleNextTab} />
            )} */}
				{
					tab === RegisterTabs.EndTab && (
						<AccountDataTab
							formValidations={formValidation}
							formState={formState}
							onInputChange={onInputChange}
						/>
					)
				}
			</form>
		</ReturnLayout>
	);
};
