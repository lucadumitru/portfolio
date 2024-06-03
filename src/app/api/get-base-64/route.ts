import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { base64 } = await getPlaiceholder(data.src);

	return NextResponse.json({ base64 });
}
