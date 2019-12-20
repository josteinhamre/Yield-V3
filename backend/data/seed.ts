import csv from "csv-parser";
import dotenv from "dotenv";
import fs from "fs";
import db from "../src/db";
dotenv.config();

async function seed() {
  // 16 Base Icons
  const icons = [{ name: "Groceries", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/groceries_u6b5hp.png" },
  { name: "Food & Drinks", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/food_yrgvtw.png" },
  { name: "Travel", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/travel_vzwdxf.png" },
  { name: "Rent & Loans", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/loan_ty1uqj.png" },
  { name: "Sports & Activities", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/sports_l2z7kv.png" },
  { name: "Transport", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/transport_xdgszi.png" },
  { name: "Savings", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/saving_kz7jxw.png" },
  { name: "Clothing", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/shirt_xpc9x6.png" },
  { name: "Bills & Fees", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/bills_chkytz.png" },
  { name: "Gifts", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/gifts_tk6zlw.png" },
  { name: "Entertainment", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/entertainment_hqjy7b.png" },
  { name: "Hygiene & Beauty", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/beauty_gxftvd.png" },
  { name: "Home & Interior", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/home_gzvxtt.png" },
  { name: "Gadgets", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/gadgets_c2c9yg.png" },
  { name: "Income", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/income_iuru1x.png" },
  { name: "No Category", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/no-cat-qmb_npqck7.png" }];
  // Creates a user, and stores it in a variable
  const user = await db.mutation.createUser({
    data: {
      email: "josteinhamre@gmail.com" + Date.now().toString().slice(10, 13),
      firstName: "Jostein",
      lastName: "Hamre",
      password: "qwerty",
    },
  });
  // Creates an account and a bank for that account, stores the account in a variable
  const account = await db.mutation.createAccount({
    data: {
      balance: 0,
      bank: {
        create: {
          name: "Sbanken",
        },
      },
      bankAccountId: "D3852F20B2C77A7D381F7ECA541619B4",
      name: "brukskonto",
      number: "97135581139",
      owner: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  // Loops over the 16 base icons and creates a category each icon for the user
  for (const icon of icons) {
    await db.mutation.createCategory({
      data: {
        budgets: {
          create: {
            amount: Math.floor(Math.random() * 100000),
            endDate: "2019-12-31T23:59:59.999Z",
            startDate: "2019-12-01T00:00:00.000Z",
          },
        },
        color: Math.floor(Math.random() * 16777215).toString(16),
        icon: {
          create: icon,
        },
        name: icon.name,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  }
  // Parses the seed_helper CSV file, containing 248 transactions.

  fs.createReadStream(__dirname + "/seed_helper.csv")
    .pipe(csv({ separator: ";" }))
    .on("data", async (row) => {
      const date = new Date(row.Dato.split(".").reverse().join("-") + " 12:00 GMT+1");
      const info = row.Forklaring;
      const out = parseFloat(row.Uttak.replace(",", ".")) * 100;
      const inn = parseFloat(row.Innskudd.replace(",", ".")) * 100;
      const amount = out ? - out : inn;
      const categoryName = row.Category;
      // Finds the right category(Based on a custom field in the CSV)
      const category = await db.query.categories({
        where: {
          name: categoryName,
          AND: {
            user: {
              id: user.id,
            },
          },
        },
      });
      // Creates a transaction x 248
      db.mutation.createTransaction({
        data: {
          account: {
            connect: {
              id: account.id,
            },
          },
          accountingDate: date,
          amount,
          category: {
            connect: {
              id: category[0].id,
            },
          },
          info,
          isReservation: false,
        },
      });
    })
    .on("end", () => {
      return "";
    });

}

seed();
