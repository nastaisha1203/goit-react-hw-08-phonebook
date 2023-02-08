import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

import { Button, Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(response => {
        toast.success(`Welcome ${response.user.name}!`);
      })
      .catch(() => toast.error(`Oops, something went wrong. Try again.`));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
      <Button type="submit">Log In</Button>
    </Form>
  );
};
