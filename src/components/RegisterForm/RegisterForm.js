import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register } from 'redux/auth/operations';

import { Button, Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .then(response => {
        toast.success(`Welcome! You have successfully registered!`);
      })
      .catch(() => toast.error(`Oops, something went wrong. Try again.`));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          minLength="3"
          maxLength="34"
        />
      </Label>
      <Label>
        Email
        <input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          required
          minLength={7}
          maxLength={15}
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
