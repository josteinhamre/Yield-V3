const Query = {
  async me(parent, args, ctx, info) {
    if (ctx.request.userId) {
      return null;
    }
    return await ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  },
  async transactions(parent, args, ctx, info) {
    return await ctx.db.query.transactions({}, info);
  },
};

export default Query;
