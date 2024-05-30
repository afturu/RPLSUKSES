import React, { useState, useEffect, useRef } from 'eact';
import { TextInput, FocusNode } from 'eact-native';

const ChatroomCustomerModel = () => {
  const [unfocusNode, setUnfocusNode] = useState(new FocusNode());
  const [textFieldFocusNode, setTextFieldFocusNode] = useState(null);
  const [textController, setTextController] = useState(null);
  const [textControllerValidator, setTextControllerValidator] = useState(
    (context, value) => value?.trim() !== '' || 'Message is required'
  );

  useEffect(() => {
    setTextFieldFocusNode(new FocusNode());
  }, []);

  useEffect(() => {
    setTextController(new TextEditingController());
  }, []);

  const dispose = () => {
    unfocusNode.dispose();
    textFieldFocusNode?.dispose();
    textController?.dispose();
  };

  return {
    unfocusNode,
    textFieldFocusNode,
    textController,
    textControllerValidator,
    dispose,
  };
};

export default ChatroomCustomerModel;