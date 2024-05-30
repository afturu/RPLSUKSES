import React, { useState, useEffect } from 'react';

class LayananaduanModel {
  constructor() {
    this.text1 = '';
    this.text2 = '';
    this.text3 = '';
    this.text4 = '';
    this.text5 = '';
    this.text6 = '';

    this.setText1 = this.setText1.bind(this);
    this.setText2 = this.setText2.bind(this);
    this.setText3 = this.setText3.bind(this);
    this.setText4 = this.setText4.bind(this);
    this.setText5 = this.setText5.bind(this);
    this.setText6 = this.setText6.bind(this);

    this.textController1Validator = this.textController1Validator.bind(this);
    this.textController2Validator = this.textController2Validator.bind(this);
    this.textController3Validator = this.textController3Validator.bind(this);
    this.textController4Validator = this.textController4Validator.bind(this);
    this.textController5Validator = this.textController5Validator.bind(this);
    this.textController6Validator = this.textController6Validator.bind(this);
  }

  setText1(text) {
    this.text1 = text;
  }

  setText2(text) {
    this.text2 = text;
  }

  setText3(text) {
    this.text3 = text;
  }

  setText4(text) {
    this.text4 = text;
  }

  setText5(text) {
    this.text5 = text;
  }

  setText6(text) {
    this.text6 = text;
  }

  textController1Validator(context, text) {
    // implement validation logic here
    return null;
  }

  textController2Validator(context, text) {
    // implement validation logic here
    return null;
  }

  textController3Validator(context, text) {
    // implement validation logic here
    return null;
  }

  textController4Validator(context, text) {
    // implement validation logic here
    return null;
  }

  textController5Validator(context, text) {
    // implement validation logic here
    return null;
  }

  textController6Validator(context, text) {
    // implement validation logic here
    return null;
  }
}

export default LayananaduanModel;