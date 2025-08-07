
import {client} from '@repo/db/client' 


export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      This is production server. hello there Nishant!
      {user?.username}
      {user?.password}
    </div>
  );
}
