'use strict';

const mongoose = require('mongoose');

const _pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const _mailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;

const userSchema = new mongoose.Schema({
  mail: {
    type: String,
    unique: true,
    validate: (value) => {
      return value.match(_mailRegex); //_mailRegex.test(value);
    },
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    /*
    validate: (value) => {
      return value.match(_pwdRegex);
    }*/
  },
  //錯誤次數
  errorCount: {
    type: Number
  },
  //密碼到期日
  pwdExpiredDate: {
    type: Date
  },
  //歷代密碼
  pwdHistory: {
    type: Array
  },
  //重覆登入
  canMultilogin: {
    type: Boolean
  },
});

/* Model static method*/
userSchema.statics.pwdPatternCheck = function (input) {
  return input.match(_pwdPattern);
};

module.exports = mongoose.model('User', userSchema);