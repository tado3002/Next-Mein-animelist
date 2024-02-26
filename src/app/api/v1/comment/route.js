import prisma from "@/libs/prisma";

export async function POST(request) {
  const { mal_id, user_email, username, comment, anime_title, user_image, rating } =
    await request.json();
  const data = { mal_id, user_email, username, comment, anime_title, user_image, rating};
  const createComment = await prisma.comment.create({ data });
  if (!createComment)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
