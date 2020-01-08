const Query = {
  async users(parent, args, ctx, info) {
    return await ctx.db.query.users({}, info);
  },
};

export default Query;
