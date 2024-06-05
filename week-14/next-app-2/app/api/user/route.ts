import client from "@/db"

export async function GET() {
    const res = await client.user.findFirst({})
    return Response.json({
        username: res?.username,
        password: res?.password
    })
}