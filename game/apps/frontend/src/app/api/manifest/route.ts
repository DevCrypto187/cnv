import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    url: process.env.NEXT_PUBLIC_APP_URL,
    name: "YBDBD",
    iconUrl: `${process.env.NEXT_PUBLIC_APP_URL}/images/vector/symbol.webp`,
    termsOfUseUrl: "",
    privacyPolicyUrl: "",
  };

  return NextResponse.json(manifest);
}
