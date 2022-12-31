import React from 'react';
import { connect } from 'react-redux';
import Contact from "./Contact";
import { deleteAction } from '../actions/contactActions';


const ContactsList = (props) => {
    const { contacts } = props;

    const handleDeleteContact = (id) => {
        props.dispatch(deleteAction(id))
    }

    return <div className='contact-table'>
        {contacts.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => {
                            const { id, firstName, lastName, phone } = contact;
                            return (
                                <Contact
                                    key={id}
                                    firstName={firstName}
                                    lastName={lastName}
                                    phone={phone}
                                    id={id}
                                    handleDeleteContact={handleDeleteContact}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        ) : (
            <p>No contacts found.</p>
        )}
    </div>;
};

const mapSateToProps = (state) => {
    return {
        contacts: state
    }
}
export default connect(mapSateToProps)(ContactsList);