import client  from "@/db"

async function getUserDetails() {
  try {
    const response = await client.user.findFirst({})
	  return {
      username: response?.username,
      password: response?.password
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
                
                Password: {userData?.password}
            </div>
        </div>
    </div>
  );
}
