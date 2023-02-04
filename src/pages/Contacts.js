import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts, Container, Title } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>
      <div>
        <Contacts>Contacts</Contacts>
        {error && <b>{error}</b>}
        {contacts.length > 0 && <Filter />}
        {isLoading && <Loader />}
        {filter.length > 0 && <ContactList />}
      </div>
    </Container>
  );
};

export default ContactsPage;
