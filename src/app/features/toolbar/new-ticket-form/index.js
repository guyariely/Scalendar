import React from "react";
import { useInput } from "../../../hooks";
import { Form, SubmitButton } from "./style";
import Input from "../../../components/input";

function NewTicketForm({ addNewTicket }) {
  const { input, onChangeInput, onSubmitInput } = useInput("");

  return (
    <Form>
      <Input
        type="text"
        value={input}
        onChange={onChangeInput}
        placeholder="Add new ticket ..."
      />
      <SubmitButton
        onClick={e => onSubmitInput(e, addNewTicket)}
        disabled={!input}
      >
        +
      </SubmitButton>
    </Form>
  );
}

export default NewTicketForm;