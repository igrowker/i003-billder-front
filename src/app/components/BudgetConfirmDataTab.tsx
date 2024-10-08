import { DateTimeInput, ClientInfoCard } from "@/ui/components/";
import { UserInfoCard } from "@/ui/components/others/UserInfoCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "@/app/types";
import { projects, user } from "@/mock";

export const BudgetConfirmDataTab = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState<Project | undefined>();

  useEffect(() => {
    setProject(projects.find(p => p.id === Number(projectId)));
  }, [projectId]);

  return (
    <div className="flex flex-col gap-4">
      <ClientInfoCard data={project} />
      <UserInfoCard data={user} />
      <DateTimeInput />
    </div>
  );
};
