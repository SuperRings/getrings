import { Env } from './env-types';

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        // DB=env.DB;

        const url = new URL(request.url);
        const pathname = url.pathname;
        return new Response('', { status: 404 });
    },


// 错误响应辅助函数
errorResponse(status: number, message: string): Response {
    return new Response(JSON.stringify({ 
        success: false, 
        message: message 
    }), { 
        status: status,
        headers: { 'Content-Type': 'application/json' }
    });
}
};
