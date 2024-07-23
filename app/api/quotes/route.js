import { quotes } from "@/data/quotes";

export async function GET() {
    return Response.json(quotes)
}