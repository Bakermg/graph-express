import { useQuery } from "@apollo/client";

// Components
import { ClientRow } from "./ClientRow";
import { Spinner } from "./Spinner";

// Query
import { GET_CLIENTS } from "../queries/clientQueries";


export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />; 
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {!loading && (
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        )}
      ,
    </>
  );
};
