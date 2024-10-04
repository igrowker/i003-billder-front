import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useState, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectAgreementTab1, ProjectAgreementTab2, ProjectAgreementTab3, ProjectAgreementTab4 } from "@/app/pages/project";

enum ProjectTabs {
  Initial = 1,
  paymentMethod = 2,
  paymentTerms = 3,
  EndTab = 4,
}

export const ProjectAgreementTabs = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const [tab, setTab] = useState(ProjectTabs.Initial);
  
  const location = useLocation();
  const projectData = location.state;
  
  const handleNextTab = () => {
    const nextTab = tab == ProjectTabs.EndTab ? null : tab + 1;
    if (nextTab === null) return;
    startTransition(() => {
      setTab(nextTab);
    });
  };
  const handleReturnTab = () => {
    const tabToChange = tab == ProjectTabs.Initial ? tab : tab - 1;
    if (tabToChange == tab) return navigate("/home");
    startTransition(() => {
      setTab(tabToChange);
    });
  };

  return (
    <ReturnLayout
      isPending={isPending}
      title="Crear acuerdo de obra"
      returnFunction={handleReturnTab}
    >
      {/* tabs */}
      {tab === ProjectTabs.Initial && (
        <ProjectAgreementTab1
          handleContinue={handleNextTab}
          projectData={projectData}
        />
      )}
      {tab === ProjectTabs.paymentMethod && (
        <ProjectAgreementTab2 /* handleContinue={handleNextTab} */ />
      )}
      {tab === ProjectTabs.paymentTerms && (
        <ProjectAgreementTab3 /* handleContinue={handleNextTab} */ />
      )}
      {tab === ProjectTabs.EndTab && <ProjectAgreementTab4 />}
    </ReturnLayout>
  );
};

