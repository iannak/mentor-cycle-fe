import { IUserSession } from "types/user.types";
import MentorDashboard from "./MentorDashboard";
import StudentDashboard from "./StudentDashboard";
import { TGET_EVENTS_queryResponseSchema as IEvents } from "services/apollo/queries/queries-properties";
import { IStatusOption } from "types/dashboard.types";

export type EmptyValueProps = {
  user?: IUserSession | undefined;
  statusOptions: IStatusOption[];
  selectedFilter: string;
  data?: IEvents | null | undefined;
};

const validateEmptyComponent = ({
  user,
  statusOptions,
  selectedFilter,
  data,
}: EmptyValueProps) => {
  if (user?.isMentor) {
    return (
      <MentorDashboard
        statusOptions={statusOptions}
        selectedFilter={selectedFilter}
        data={data}
      />
    );
  } else {
    return (
      <StudentDashboard
        statusOptions={statusOptions}
        selectedFilter={selectedFilter}
        data={data}
      />
    );
  }
};

export default validateEmptyComponent;
