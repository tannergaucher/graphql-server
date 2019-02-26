const { getUserId } = require('../utils/getUserId')

const Query = {
  me: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return {
      user: await context.prisma.user({ id: userId }),
    }
  },
}

module.exports = {
  Query,
}
