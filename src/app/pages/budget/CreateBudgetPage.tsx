import { BudgetCalcTab, BudgetConfirmDataTab, BudgetViewDocumentTab } from "@/app/components"
import { ReturnLayout } from "@/layouts/ReturnLayout"
import { ReusableButton } from "@/ui/components"
import { useState, useTransition } from "react"
import { useNavigate } from "react-router-dom"


const enum CreateBudgetTabs {
  Initial = 1,
  Payment = 2,
  End = 3
};
const phases = [
  {
    phase: 1,
    title: 'Confirmá los datos',
    component: <BudgetConfirmDataTab />
  },
  {
    phase: 2,
    title: 'Realizá el cálculo',
    component: <BudgetCalcTab />
  },
  {
    phase: 3,
    title: '¡Todo listo!',
    component: <BudgetViewDocumentTab />
  },

]


export const CreateBudgetPage = () => {

  const navigate = useNavigate();
  const [tab, setTab] = useState(phases.find((phase) => phase.phase == CreateBudgetTabs.Initial)!);
  const [isPending, startTransition] = useTransition()

  const handleChangeTab = () => {
    if (tab.phase == CreateBudgetTabs.End) return;
    startTransition(() => {
      setTab(phases[tab.phase])

    });
    if (isPending) return;
  }
  const handleGoBack = () => {

    if (tab.phase === CreateBudgetTabs.Initial) {
      startTransition(() => {
        setTab(phases.find((phase) => phase.phase == CreateBudgetTabs.Initial)!);
        navigate(-1)

      })
      return;
    };
    startTransition(() => {
      setTab(phases.find(phase => phase.phase === tab.phase - 1)!)

    })
  }

  return (
    <ReturnLayout
      returnFunction={() => handleGoBack()}
      title="Crear presupuesto"

    >
      <div className="">
        <h4 className="font-medium text-customOrange text-xl mt-4 mb-2">Paso {tab.phase}: {tab.title}</h4>
        {tab.component}
      </div>
      {
        (tab.phase !== CreateBudgetTabs.End)
        && (
          <ReusableButton onClick={handleChangeTab} className="mt-8">
            Continuar
          </ReusableButton>

        )
      }
    </ReturnLayout>
  )
}
