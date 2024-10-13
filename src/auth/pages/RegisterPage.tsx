import { useContext, useState, useTransition } from "react";
import {
  // RegisterSignatureTab,
  AccountDataTab,
  PersonalDataTab,
} from "@/auth/components/";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useNavigate } from "react-router-dom";
import { FormValidation, useForm } from "@/hooks/useForm";
import { UserRegisterCredentials } from "@/interfaces/request";
import { useAuthStore } from "@/store/authStore";
import { AlertsContext } from "@/context/AlertsContext";

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
  address: [() => false, ""],
  city: [() => false, ""],
  country: [() => false, ""],
  dni: [() => false, ""],
  fullName: [() => false, ""],
  phoneNumber: [() => false, ""],
  email: [(value) => value.length > 0 && !value.includes('@'), "El email debe incluir una @"],
  password: [
    (value) => {
      const regExp = / d/
    }, 
    ""
  ],
  repeatPassword: [(value, formState) => value !== formState.password, "Las contraseñas no coinciden"]
}

export const RegisterPage = () => {

  const navigate = useNavigate()
  const registerUser = useAuthStore((state) => state.registerUser);
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


  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid === false) return;
    const { hasErrors, message } = await registerUser(formState);
    if (hasErrors == true) {
      newAlert({
        type: 'error',
        message: message
      });
      return;
    };
    navigate('/auth/login')
  };

  return (
    <ReturnLayout
      isPending={isPending}
      returnFunction={handleReturnTab}
      title="Registrate"
    >
      <form onSubmit={onFormSubmit}>

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
