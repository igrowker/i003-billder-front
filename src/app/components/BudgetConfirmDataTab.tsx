import { DateTimeInput, ClientInfoCard } from "@/ui/components/";
import { UserInfoCard } from "@/ui/components/others/UserInfoCard";
import { useAuthStore } from "@/store/authStore";
import { Client } from "@/interfaces";

export const BudgetConfirmDataTab = ({ client }) => {
  const { data: user } = useAuthStore(state => state.user);

  return (
    <div className="flex flex-col gap-4">
      <ClientInfoCard data={client as Client} />
      <UserInfoCard data={user!} />
      <DateTimeInput labelText="Fecha de expiracion" />
    </div>
  );
};
