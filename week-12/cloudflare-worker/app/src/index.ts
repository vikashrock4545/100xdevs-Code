import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        try {
            console.log('Function invoked');
            const databaseUrl = env.DATABASE_URL;
            if (!databaseUrl) {
                throw new Error('DATABASE_URL not found in the environment variables');
            }
            const prisma = new PrismaClient({
                datasources: {
                    db: {
                        url: databaseUrl,
                    },
                },
            }).$extends(withAccelerate());
            const result = await prisma.user.create({
                data: {
                    email: 'elsa@prisma5.io',
                    name: 'Elsa Prisma5',
                },
            });
            console.log('User created successfully:', result);
            return new Response('User creation success');
        } catch (error) {
            console.error('Error during database operation:', error);
            return new Response(`Error during execution:`, { status: 500 });
        }
    },
};
