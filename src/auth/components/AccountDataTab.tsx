import { FormCheckedValues, onInputChangeFunc } from "@/hooks/useForm";
import { UserRegisterCredentials } from "@/interfaces/request";
import { InputText, ReusableButton } from "@/ui/components/";
import React from "react";



interface AccountDataTabProps {
  formState: UserRegisterCredentials,
  onInputChange: onInputChangeFunc;
  formValidations: FormCheckedValues<UserRegisterCredentials>
}

export const AccountDataTab = React.memo(({ formState, onInputChange, formValidations }: AccountDataTabProps) => {
  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="flex-grow">
        <h3 className="font-medium  pt-2 pb-1 text-lg text-customOrange">
          Completá los datos de la cuenta
        </h3>
        <div className="flex flex-col gap-10 mt-4">
          <InputText
            required
            name="email"
            id="email"
            supportText={formValidations.isEmailValid ?? ''}
            labelText="E-mail"
            value={formState.email}
            onChange={onInputChange}
          />
          <InputText
            required
            name="password"
            type="password"
            id="contraseña"
            supportText={formValidations.isPasswordValid ?? ''}
            value={formState.password}
            labelText="Contraseña"
            onChange={onInputChange}
          />

          <div className="mt-4">

            <InputText
              required
              id="repeatpassword"
              type="password"
              name="repeatPassword"
              value={formState.repeatPassword}
              labelText="Repetí la contraseña"
              supportText={formValidations.isRepeatPasswordValid ?? ''}
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
      <ReusableButton className="mt-7" type="submit">Crear cuenta</ReusableButton>
    </div>
  );
});
