import { IconBlueCircle } from "@/app/components";
import { PersonIcon, WhatsappIcon } from "@/assets/icons";
import { AddIcon } from "@/assets/icons/AddIcon";
import { Client } from "@/interfaces/client.interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useClientStore } from "@/store/clientStore";
import { FlotatingButton, } from "@/ui/components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



export const ClientInfoPage = () => {
    const navigate = useNavigate();
    const { clientId } = useParams();

    const getClientByid = useClientStore(state => state.getClientById);
    const [client, setClient] = useState<Client | null>(null);


    useEffect(() => {
        getClientByid(Number(clientId))
            .then(d => {
                setClient(d)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <ReturnLayout
            backgroundColor="bg-customOrange"
            returnFunction={() => navigate("/")}
            title="Cliente"
            canEdit={{
                isEditing: true,
                onClick: () => {}
            }}
            paddingContent={false}
        >
            <div className="bg-customOrange p-4 gap-4 flex shadow-sm">
                <IconBlueCircle icon={<PersonIcon />} />
                <div>
                    <div className="flex gap-2 items-center ">
                        <h4 className="font-medium text-lg">{client?.nombre}</h4>
                        <Link className="cursor-pointer" to={`https://wa.me/${client?.telefono}`} target="_blank">
                            <WhatsappIcon />
                        </Link>
                    </div>
                    <div className="text-gray-700 text-sm">
                        <div className="mt-1 flex gap-4 ">
                            <p>
                                <span>DNI:</span> <span>{client?.dni}</span>
                            </p>
                        </div>
                        <p>{client?.email}</p>
                        <p>
                            <span>{client?.direccion}, {client?.ciudad}, {client?.provincia}</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="p-6">
                <h4 className="font-medium text-2xl mb-2">Trabajos</h4>
                <div className="grid-cols-1 gap-2 grid">
                    {/* {draft.length === 0 ? (
                        <NotDataCreated text="Aún no creaste documentos" />
                    ) : (
                        draft.map((d, i) => <DocumentItem key={i} {...d} />)
                    )} */}
                </div>
                {/* <NotDataCreated  text="Aún no creaste documentos" /> */}
            </div>

            <FlotatingButton >
                <AddIcon />
            </FlotatingButton>

        </ReturnLayout>
    )
}
