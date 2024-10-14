import { UserCircleIcon, BellIcon, PersonAddIcon } from "@/assets/icons";
import { ActionCard, ClientInfoSkeletonCard, IngresosPendientes, /* SearchInput */ } from "@/ui/components/";
import { useNavigate } from "react-router-dom";
import { NotDataCreated } from "@/app/components";
import React, { useEffect } from "react";
import { useClientStore } from "@/store/clientStore";
import { useShallow } from "zustand/shallow";
import { ClientCard } from "@/ui/components/others/ClientCard";
import { useAuthStore } from "@/store/authStore";

export const HomePage = React.memo(() => {
  const navigate = useNavigate();
  const { getClients, clients, isClientsLoading } = useClientStore(
    useShallow(state => ({
      getClients: state.getClients,
      clients: state.clients,
      isClientsLoading: state.isLoading
    }))
  );
  const user = useAuthStore(state => state.user);

  const createNewClient = () => {
    navigate("/new-client");
  };

  useEffect(() => {
    getClients();
  }, []);

  if (user.data === null) return;
  return (
    <div className="  p-4 flex flex-col  ">
      <header className="bg-white h-20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-customOrange rounded-full w-10 h-10 flex justify-center items-center text-white text-xl">
            <UserCircleIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Hola</h2>
            <span className="text-xl font-semibold">
              {user?.data.fullName ?? ""}!
            </span>
          </div>
        </div>
        <div>
          <button className="text-yellow-500">
            <BellIcon />
          </button>
        </div>
      </header>
      <IngresosPendientes />

      {/* <SearchInput /> */}

      <div className="flex justify-between flex-grow mb-8">
        <ActionCard
          fullWidth
          icon={<PersonAddIcon />}
          label="Nuevo cliente"
          onClick={createNewClient}
        />
      </div>

      <div className="">
        <h2 className="font-medium text-2xl mb-2">Mis clientes</h2>
        {
          (isClientsLoading)
            ? [1, 2].map((_, i) => <ClientInfoSkeletonCard key={i} />)
            : (clients.length > 0)
              ? (
                clients.map(client => (
                  <ClientCard
                    onClick={() => navigate(`client/${client.id}`)}
                    client={client}
                    key={client.id}
                  />
                ))
              )
              : <NotDataCreated text="Aún no tenés ningun cliente" />
        }
      </div>
    </div>
  );
});
