import { NextResponse } from "next/server";

export default function middleware(req) {
  let jwt = req.cookies.get("jwt");
  let url = req.url;

  if (!jwt && url.includes("/appointments")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (!jwt && url.includes("/home")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (!!jwt && url == "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/home");
  }

  if (!!jwt && url.includes("crear-cuenta")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
