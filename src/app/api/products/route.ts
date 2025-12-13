import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

//get all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        seller: {
          select: { id: true, name: true, email: true, image: true },
        },
        purchases: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /products error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

//create product
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: "You must be logged in to create a product" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, description, price, thumbnail, features, fileUrl } = body;

    if (!title || !price || !fileUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price: Number(price),
        thumbnail,
        features,
        fileUrl,
        sellerId: session.user.id,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
