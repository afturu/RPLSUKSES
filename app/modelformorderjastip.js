import React, { useState, useEffect, useRef } from 'eact';

class FormorderjastipModel {
  constructor() {
    this.unfocusNode = React.createRef();
    this.textFieldFocusNode1 = React.createRef();
    this.textController1 = React.createRef();
    this.textController1Validator = null;

    this.textFieldFocusNode2 = React.createRef();
    this.textController2 = React.createRef();
    this.textController2Validator = null;

    this.textFieldFocusNode3 = React.createRef();
    this.textController3 = React.createRef();
    this.textController3Validator = null;
  }

  initState() {}

  dispose() {
    this.unfocusNode.current?.blur();
    this.textFieldFocusNode1.current?.blur();
    this.textController1.current?.clear();

    this.textFieldFocusNode2.current?.blur();
    this.textController2.current?.clear();

    this.textFieldFocusNode3.current?.blur();
    this.textController3.current?.clear();
  }
}

export default FormorderjastipModel;