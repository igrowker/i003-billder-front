import { DateTimeInput, ClientInfoCard } from "@/ui/components/"
import { useLocation } from "react-router-dom"
import { UserInfoCard } from '../../ui/components/others/UserInfoCard';

export const BudgetConfirmDataTab = () => {
  const location = useLocation()
  console.log(location.state);

  return (
    <div className="flex flex-col gap-4">
      <ClientInfoCard
        data={{
          ciudad: 'San fernando',
          direccion: 'Peron 840',
          dni: '3881028',
          email: 'mateomartinez@gmail.com',
          owner: 'Mateo Martinez',
          pais: 'Argentina',
          status: 'Pendiente',
          title: 'Cliente',
          id: 1,
        }}
      />
      <UserInfoCard
        data={{
          name: 'Joaquin Ariel Feola',
          dni: '48432175',
          email: 'joacoarielfeola@gmail.com',
          pais: 'Argentina',
          direccion: 'Catamarca 2744',
          ciudad: 'San bernardo',
        }}
      />
      <DateTimeInput />
    </div>
  )
}
