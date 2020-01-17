const Query = {
  async me(parent, args, ctx, info) {
    console.log("CTX:", ctx);
    if (!ctx.req.userId) {
      return null;
    }
    return await ctx.db.query.user({ where: { id: ctx.req.userId } }, info);
  },
  async users(parent, args, ctx, info) {
    return await ctx.db.query.users({}, info);
  },
  async transactions(parent, args, ctx, info) {
    return await ctx.db.query.transactions({}, info);
  },
};

export default Query;
