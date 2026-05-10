import { NextResponse } from "next/server";
import { DEFAULT_META_PIXEL_ID } from "@/lib/meta-pixel-default";

const GRAPH_API_VERSION = "v21.0";

type MetaCapiPayload = {
  data: Array<{
    event_name: string;
    event_time: number;
    event_id: string;
    action_source: string;
    event_source_url: string;
  }>;
  test_event_code?: string;
};

export async function POST(req: Request) {
  const accessToken = process.env.META_ACCESS_TOKEN;
  const pixelId =
    process.env.META_PIXEL_ID ??
    process.env.NEXT_PUBLIC_META_PIXEL_ID ??
    DEFAULT_META_PIXEL_ID;

  if (!accessToken) {
    return NextResponse.json(
      {
        ok: false as const,
        error: "Server is missing META_ACCESS_TOKEN.",
      },
      { status: 500 },
    );
  }

  if (!pixelId.trim()) {
    return NextResponse.json(
      {
        ok: false as const,
        error: "Server is missing a valid META_PIXEL_ID.",
      },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false as const, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const { eventId, pageUrl } = body as {
    eventId?: string;
    pageUrl?: string;
  };

  if (typeof eventId !== "string" || !eventId.trim()) {
    return NextResponse.json(
      { ok: false as const, error: "`eventId` must be a non-empty string." },
      { status: 400 },
    );
  }

  if (typeof pageUrl !== "string" || !pageUrl.trim()) {
    return NextResponse.json(
      { ok: false as const, error: "`pageUrl` must be a non-empty string." },
      { status: 400 },
    );
  }

  try {
    const url = new URL(pageUrl.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return NextResponse.json(
        { ok: false as const, error: "`pageUrl` must be http(s)." },
        { status: 400 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false as const, error: "`pageUrl` must be a valid URL." },
      { status: 400 },
    );
  }

  const event_time = Math.floor(Date.now() / 1000);
  const capiBody: MetaCapiPayload = {
    data: [
      {
        event_name: "Schedule",
        event_time,
        event_id: eventId.trim(),
        action_source: "website",
        event_source_url: pageUrl.trim(),
      },
    ],
  };

  const testCode = process.env.META_TEST_EVENT_CODE;
  if (testCode) {
    capiBody.test_event_code = testCode;
  }

  const graphUrl = new URL(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events`,
  );
  graphUrl.searchParams.set("access_token", accessToken);

  let metaJson: unknown;
  try {
    const res = await fetch(graphUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(capiBody),
    });
    metaJson = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false as const,
          error: "Meta Conversions API request failed.",
          meta: metaJson,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true as const,
      meta: metaJson,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to reach Meta Graph API.";
    return NextResponse.json(
      {
        ok: false as const,
        error: message,
      },
      { status: 502 },
    );
  }
}
