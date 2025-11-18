// import { Env } from './env-types';

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        // DB=env.DB;

        console.log("111");
        const url = new URL(request.url);
        const pathname = url.pathname;
        // return new Response('', { status: 404 });
        return new Response(JSON.stringify({ message: "Hello World" }), {
  headers: { 'Content-Type': 'application/json' },
});
    },
};
