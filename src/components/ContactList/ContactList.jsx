import PropTypes from "prop-types";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { getFilter, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import style from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleDelete = id => {
        localStorage.setItem('contacts', JSON.stringify(contacts.filter(contact => contact.id !== id)));
        dispatch(deleteContact(id));
    }
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
        {contacts.length === 0 ? (
            Report.info('Phonebook Info', 'Contact book is empty!',
              'Okay',
            )) : (
                <ul className={style.list}>
                        {filteredContacts.map(({id, name, number}) => (
                        <li className={style.item} key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={style.button} type="button" onClick={() => handleDelete(id)} value="delete">Delete contact</button>
                        </li>
                    ))}
                </ul>
            )}
    </>
    )    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    handleDelete: PropTypes.func,
};

