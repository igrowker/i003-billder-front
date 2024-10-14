// import { CameraIcon } from "@/assets/icons";
import { FormCheckedValues, onInputChangeFunc } from "@/hooks/useForm";
import { UserRegisterCredentials } from "@/interfaces/request";
import { /* ProfileCircle */ InputText, ReusableButton } from "@/ui/components/";
import React from "react";

interface PersonalDataTabProps {
  handleContinue: () => void;
  formState: UserRegisterCredentials,
  onInputChange: onInputChangeFunc;
  formValidations: FormCheckedValues<UserRegisterCredentials>

}

export const PersonalDataTab = React.memo(({ handleContinue, formState, onInputChange, formValidations }: PersonalDataTabProps) => {

  return (
    <div className="h-full flex-grow flex    flex-col gap-4">
      <div className="flex-grow mb-10" >
        <h3 className="font-medium  pt-2 pb-1 text-lg text-customOrange">
          Completá con tus datos personales
        </h3>
        {/* <ProfileCircle middleIcon={<CameraIcon />} /> */}
        <div className="flex flex-col gap-9 mt-2">
          <InputText
            autoFocus
            required
            hasErrors={formValidations.isFullNameValid !== null}
            name="fullName"
            value={formState.fullName}
            onChange={onInputChange}
            id="fullname"
            labelText="Nombre y apellido"
            supportText={formValidations.isFullNameValid ?? ''}
          />
          <InputText
            name="dni"
            required
            value={formState.dni}
            onChange={(e) => onInputChange(e, true)}
            id="dni"
            labelText="DNI"
            supportText={formValidations.isDniValid ?? ''}
          />
          <InputText
            name="address"
            required
            value={formState.address}
            onChange={onInputChange}
            id="adress"
            labelText="Dirección"
            supportText={formValidations.isAddressValid ?? ''}
          />
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 ">
            <InputText
              name="country"
              value={formState.country}
              onChange={onInputChange}
              id="country"
              labelText="País"
              supportText={formValidations.isCountryValid ?? ''}
            />
            <InputText
              name="city"
              required
              value={formState.city}
              onChange={onInputChange}
              id="city"
              labelText="Ciudad"
              supportText={formValidations.isCityValid ?? ''}
            />
          </div>
          <InputText
            required
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={(e) => onInputChange(e, true)}
            id="phone"
            labelText="Teléfono"
            supportText={formValidations.isPhoneNumberValid ?? ''}
          />
        </div>

      </div>

      <ReusableButton  type="button" onClick={handleContinue}>Continuar</ReusableButton>
    </div>
  );
});
