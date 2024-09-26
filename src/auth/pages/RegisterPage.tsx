import { PersonalDataTab } from "../components/PersonalDataTab"

export const RegisterPage = () => {
  return (
    <div className="h-dvh px-4 bg-secondary ">
      {/* < registrate */}
      
      <div >
        <h3 className="font-medium  pt-2 pb-1 text-lg">Completá con tus datos personales</h3>
        <PersonalDataTab></PersonalDataTab>
      </div>
    </div>
  )
}
