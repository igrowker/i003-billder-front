import { useState, useTransition } from "react";
import {
  RegisterSignatureTab,
  AccountDataTab,
  PersonalDataTab,
} from "@/auth/components/";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useNavigate } from "react-router-dom";

enum RegisterTabs {
  Initial = 1,
  SignatureTab = 2,
  EndTab = 3,
}

export const RegisterPage = () => {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const [tab, setTab] = useState(RegisterTabs.Initial);

  const handleNextTab = () => {
    const nextTab = tab == RegisterTabs.EndTab ? null : tab + 1;
    if (nextTab === null) return;
    startTransition(() => {
      setTab(nextTab);
    });
  };
  const handleReturnTab = () => {
    const tabToChange = tab == RegisterTabs.Initial ? tab : tab - 1;
    if (tabToChange == tab) return navigate("register");
    startTransition(() => {
      setTab(tabToChange);
    });
  };

  return (
    <ReturnLayout
      isPending={isPending}
      returnFunction={handleReturnTab}
      title="Registrate"
    >
      {/* tabs */}
      {tab === RegisterTabs.Initial && (
        <PersonalDataTab handleContinue={handleNextTab} />
      )}
      {tab === RegisterTabs.SignatureTab && (
        <RegisterSignatureTab handleContinue={handleNextTab} />
      )}
      {tab === RegisterTabs.EndTab && <AccountDataTab />}
    </ReturnLayout>
  );
};
