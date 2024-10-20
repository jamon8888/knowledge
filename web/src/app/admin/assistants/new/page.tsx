import { AssistantEditor } from "../AssistantEditor";
import { ErrorCallout } from "@/components/ErrorCallout";
import { RobotIcon } from "@/components/icons/icons";
import { BackButton } from "@/components/BackButton";
import { Card } from "@tremor/react";
import { AdminPageTitle } from "@/components/admin/Title";
import { fetchAssistantEditorInfoSS } from "@/lib/assistants/fetchPersonaEditorInfoSS";
import { SuccessfulPersonaUpdateRedirectType } from "../enums";

export default async function Page() {
  const [values, error] = await fetchAssistantEditorInfoSS();

  let body;
  if (!values) {
    body = (
      <ErrorCallout errorTitle="Something went wrong :(" errorMsg={error} />
    );
  } else {
    body = (
      <Card>
        <AssistantEditor
          {...values}
          admin
          defaultPublic={true}
          redirectType={SuccessfulPersonaUpdateRedirectType.ADMIN}
        />
      </Card>
    );
  }

  return (
    <div className="w-full">
      <BackButton />
      <AdminPageTitle
        title="Create a New Assistant"
        icon={<RobotIcon size={32} />}
      />
      {body}
    </div>
  );
}
