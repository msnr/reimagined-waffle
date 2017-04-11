import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function ContactListItem({contact}) {

	return (
		<tr>
			<td>{contact.firstName} </td>
			<td>{contact.lastName}</td>
			<td>{contact.company}</td>
			<td>{contact.emails[0] ? contact.emails[0].address : ''}</td>
			<td>{contact.phones[0] ? contact.phones[0].number: ''}</td>
			<td>
				<Link to={'/contacts/' + contact._id}> <span className="icon"><i className="fa fa-info-circle"></i></span></Link>
			</td>
		</tr>
	)
}


ContactListItem.propTypes = {
	contact: React.PropTypes.object.isRequired
}