const express = require("express");
const path = require("path");
const Expense = require("../models/userExpense");

const rootDir = path.dirname(require.main.filename);

exports.getExpensesPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((expenses) => {
      console.log(expenses);
      res.json(expenses);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};

exports.postExpense = (req, res, next) => {
  const { expAmt, expDesc, Price, Quantity, expCat } = req.body;

  Expense.create({
    amount: expAmt,
    description: expDesc,
    Price: Price,
    Quantity: Quantity,
    category: expCat,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};

exports.deleteExpense = (req, res, next) => {
  const id = req.query.id;
  Expense.findByPk(id)
    .then((expense) => {
      if (expense) {
        return expense.destroy();
      }
      throw new Error("Expense not found.");
    })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};

exports.editExpense = (req, res, next) => {
  const id = req.query.id;
  const { amount, description, Price, Quantity, category } = JSON.parse(
    req.query.expenseItem
  );
  Expense.findByPk(id)
    .then((expense) => {
      if (expense) {
        expense.amount = amount;
        expense.description = description;
        expense.Price = Price;
        expense.Quantity = Quantity;
        expense.category = category;
        return expense.save();
      }
      throw new Error("Expense not found.");
    })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred." });
    });
};