import { OutlineButton } from "@/ui/components";
import { BudgetContract } from "./";
import { DownloadIcon, ShareIcon } from "@/assets/icons";

export const BudgetViewDocumentTab = () => {
  return (
    <div>
      <h3 className="font-medium">Revisá el documento y envialo a tu cliente para confirmar el presupuesto.</h3>
      <BudgetContract />
      <div className="flex items-center gap-4">
        <OutlineButton className="">
          <ShareIcon />
          <span className="mx-3">

            Compartir
          </span>
        </OutlineButton>
        <OutlineButton >
          <DownloadIcon/>
          <span className="mx-3">

          Descargar
          </span>
        </OutlineButton>

      </div>
    </div>
  )
}
