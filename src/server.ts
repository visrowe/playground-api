import * as trpc from '@trpc/server';
const appRouter = trpc.router();

appRouter.query('getItem', {
    input: (val: unknown) => {
        if (typeof val === 'string') {
            return val;
        }
        throw new Error(`Invalid input: ${typeof val}`)
    },
    async resolve(req) {
        req.input;
        return { id: req.input, name: 'Test' };
    }
});

export type AppRouter = typeof appRouter;