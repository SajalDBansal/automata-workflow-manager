import { prisma } from "./client";

async function main() {
  // 1. Create Available Triggers
  const availableTriggers = await prisma.availableTrigger.createMany({
    data: [
      { name: 'webhooks', image: 'https://img.com/email.png' },
    ],
  })

  const triggers = await prisma.availableTrigger.findMany();

  // 2. Create Available Actions
  const availableActions = await prisma.availableAction.createMany({
    data: [
      { name: 'email', image: 'https://img.com/slack.png' },
      { name: 'solana_send', image: 'https://img.com/trello.png' },
    ],
  })

  const actions = await prisma.availableAction.findMany();

  // 3. Create Users
  const user = await prisma.user.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      password: 'securepassword123',
    },
  })

  // 4. Create a Zap for the user
  const zap = await prisma.zap.create({
    data: {
      userId: user.id,
      triggerId: triggers[0].id,
      trigger: {
        create: {
          triggerId: triggers[0].id,
          metadata: {
            inbox: 'Webhooks data here',
          },
        },
      },
      actions: {
        create: [
          {
            actionId: actions[0].id,
            sortingOrder: 1,
            metadata: {
              channel: '#alerts',
              message: 'New email received!',
            },
          },
          {
            actionId: actions[1].id,
            sortingOrder: 2,
            metadata: {
              board: 'Project X',
              list: 'To Do',
              cardTitle: 'Follow up on new email',
            },
          },
        ],
      },
    },
    include: {
      trigger: true,
      actions: true,
    },
  })

  console.log('🌱 Seed completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
