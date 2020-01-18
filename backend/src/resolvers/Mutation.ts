import argon2 from "argon2";
import jwt from "jsonwebtoken";

const Mutation = {
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    const password = await argon2.hash(args.password, { type: argon2.argon2id });

    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
      },
    }, info);

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET || "secret");

    ctx.res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    email = email.toLowerCase();

    const user = await ctx.db.query.user({ where: { email } });

    try {
      if (!await argon2.verify(user.password, password)) {
        throw new Error("Invalid password");
      }
    } catch (err) {
      throw new Error("Internal error");
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET || "secret");

    ctx.res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return user;
  },
};

export default Mutation;
