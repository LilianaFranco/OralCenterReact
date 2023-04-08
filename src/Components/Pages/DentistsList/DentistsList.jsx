import { DentistCard } from "../../Common/DentistCard";

export const DentistsList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <DentistCard key={user.id} user={user} />;
      })}
    </div>
  );
};
