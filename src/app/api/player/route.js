import  prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const data = await req.json()
    const player = await prisma.player.create(({
      data: data
    }))
    return new NextResponse(JSON.stringify(player), {
      headers: { "Content-Type": "application/json"},
      status: 201
    })
  } catch (error) {
    return new NextResponse(error.message, { status: 500 })
  }
}

export async function GET() {
  try {
    const players = await prisma.player.findMany()
    return NextResponse.json({ data: players }, { status: 200 })
  } catch(error) {
    return new NextResponse(error.message, { status: 500 })
  }

}