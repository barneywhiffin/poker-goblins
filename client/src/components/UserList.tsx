import { gql } from '@apollo/client';
import type { TypedDocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

type User = {
    id: string,
    username: string,
    elo: number
};

type GetAllUsers = {
  getAllUsers: User[];
};

const GetUsersSchema: TypedDocumentNode<GetAllUsers> = gql`
  query GetAllUsers {
    getAllUsers {
      id
      username
      elo
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GetUsersSchema);

  console.log({loading, error, data});

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div>
      {data?.getAllUsers.map((user) => (
        <div key={user.id}>
          <p>User: {user.username}</p> 
          <p>ELO: {user.elo}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;