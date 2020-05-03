import express from 'express';
import find from 'lodash/find';
import shortid from 'shortid';
import db from '../db.js';

const users = [
  { name: 'dương', age: 69 },
  { name: 'phôn', age: 96 },
];

export const searchUser = (req, res) => {
  const params = req.query;
  const userData = { name: String(params.name), age: Number(params.age) };
  !!find(users, userData) && res.send(`<div><p>My name is ${params.name}</p><p>My age is ${params.age}</p></div>`);

  !find(users, userData) && res.send('<h1>Not Found</h1>');
};

const listUser = db.get('user').value(); // đọc dữ liệu từ db ra
export const showAllUser = (req, res) => {
  res.render('user/allUser', {
    listUser: listUser,
  });
};

export const detailUser = (req, res) => {
  const id = req.params.id;
  const user = db.get('user').find({ id: id }).value();
  res.render('user/detail', {
    id: user.id,
    name: user.name,
  });
};

export const createUser = (req, res) => {
  res.render('user/createUser');
};

export const addUser = (req, res) => {
  req.body.id = shortid.generate();
  let errors = [];
  !req.body.name && errors.push('Name is Required');
  !req.body.age && errors.push('Age is Required');
  if (!!errors.length) {
    res.render('user/createUser', {
      errors: errors,
    });
    return;
  }
  db.get('user').push(req.body).write(); // ghi thêm vào db
  res.redirect('/users');
};
