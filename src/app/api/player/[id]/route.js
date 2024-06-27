import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = parseInt(params.id);
  try {
    const result = await prisma.player.findFirst({
      where: { id: id },
    });
    if (!result) {
      return new NextResponse(`Jugador con ID ${id} no encontrado`, {
        status: 404,
      });
    }
    return NextResponse.json(result);
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const id = parseInt(params.id);
  try {
    const result = await prisma.player.delete({
      where: { id: id },
    });
    if (!result) {
      return new NextResponse(`Jugador con ID ${id} no encontrado`);
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  console.log(params)
  const id = parseInt(params.id);
  const data = await req.json();
  try {
    const result = await prisma.player.update({
      where: { id: id },
      data: data,
    });
    if (!result) {
      return new NextResponse(`Jugador con ID ${id} no encontrado`);
    }
    return NextResponse.json({ message: result }, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
