const Query = {
  async me(parent, args, ctx, info) {
    if (!ctx.req.userId) { return null; }
    return await ctx.db.query.user({ where: { id: ctx.req.userId } }, info);
  },

  async users(parent, args, ctx, info) {
    return await ctx.db.query.users({}, info);
  },

  async transactions(parent, args, ctx, info) {
    return await ctx.db.query.transactions({ where: { account: { owner: { id: ctx.req.userId } } } }, info);
  },
};

export default Query;
