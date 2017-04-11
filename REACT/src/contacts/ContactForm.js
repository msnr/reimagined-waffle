import React from 'react';
import './ContactForm.css';

export default class ContactForm extends React.Component {

	render() {
		let {contact, isNew, onSaveContact, onCancel, onDeleteContact, onValueChanged, onDeleteFrom, onAddTo} = this.props;
		return (
			<div className="column is-8">
				<div className="card">
					<form onSubmit={onSaveContact}>
						<header className="card-header">
							<h1 className="card-header-title"> {isNew ? 'Add new' : 'Edit'} Contact </h1>
						</header>
						<div className="card-content">
							<div className="columns">
								<div className="column auto ">

									<label htmlFor="firstName" className="label">First name</label>
									<p className="control">
										<input id="firstName"
													 name="firstName"
													 className="input"
													 type="text"
													 value={contact.firstName}
													 onChange={(e) => onValueChanged(e)}
										/>
									</p>

									<label htmlFor="lastName" className="label">Last name</label>
									<p className="control">
										<input id="lastName"
													 name="lastName"
													 className="input"
													 type="text"
													 value={contact.lastName}
													 onChange={(e) => onValueChanged(e)}
													 required
										/>
									</p>

									<label htmlFor="birthday" className="label">Birthday</label>
									<p className="control">
										<input id="birthday"
													 name="birthday"
													 className="input"
													 type="date"
													 value={contact.birthday}
													 onChange={(e) => onValueChanged(e)}
										/>
									</p>

									<label htmlFor="company" className="label">Company</label>
									<p className="control">
										<input id="company"
													 name="company"
													 className="input"
													 type="text"
													 placeholder=""
													 value={contact.company}
													 onChange={(e) => onValueChanged(e)}
										/>
									</p>

									<label htmlFor="photoUrl" className="label">Photo URL</label>
									<p className="control">
										<input id="photoUrl"
													 name="photoUrl"
													 className="input"
													 type="text"
													 placeholder=""
													 value={contact.photoUrl}
													 onChange={(e) => onValueChanged(e)}
										/>
									</p>


									<label htmlFor="emails" className="label">Email</label>
									{contact.emails.map((email, index) => {
										return (<div key={index}>
											<p className="control has-addons">
												<span className="select">
													<select name="type" value={email.type} onChange={(e) => onValueChanged(e, 'emails', index)}>
														<option value="Home">Home</option>
														<option value="Office">Office</option>
														<option value="Other">Other</option>
													</select>
												</span>
												<input name="address"
															 type="email"
															 className="input is-expanded"
															 placeholder="Email address"
															 required
															 value={email.address}
															 onChange={(e) => onValueChanged(e, 'emails', index)}/>

												<a className="button is-danger is-outlined" title="Remove"
													 onClick={() => onDeleteFrom('emails', index)}>
													<span className="icon"><i className="fa fa-times"></i></span>
												</a>
											</p>
										</div>);
									})}
									<a type="button" className="button is-primary is-outlined" onClick={() => onAddTo('emails')}>
										<span className="icon">	<i className="fa fa-plus-square-o"> </i> </span> &nbsp; Add an email
										address
									</a>

									<br /><br />
									<label htmlFor="phones" className="label">Phone</label>
									{contact.phones.map((phone, index) => {
										return (<div key={index}>
											<p className="control has-addons">
												<span className="select">
													<select name="type" value={phone.type} onChange={(e) => onValueChanged(e, 'phones', index)}>
														<option value="Home">Home</option>
														<option value="Office">Office</option>
														<option value="Mobile">Mobile</option>
														<option value="Other">Other</option>
													</select>
												</span>
												<input name="number"
															 type="text"
															 className="input is-expanded"
															 placeholder="Phone number"
															 required
															 value={phone.number}
															 onChange={(e) => onValueChanged(e, 'phones', index)}/>

												<a className="button is-danger is-outlined" title="Remove"
													 onClick={() => onDeleteFrom('phones', index)}>
													<span className="icon"><i className="fa fa-times"></i></span>
												</a>
											</p>
										</div>);
									})}
									<a type="button" className="button is-primary is-outlined" onClick={() => onAddTo('phones')}>
										<span className="icon">	<i className="fa fa-plus-square-o"> </i> </span> &nbsp; Add a phone number
									</a>

									<br /><br />
									<label htmlFor="socialProfile" className="label">Social Profiles</label>
									{contact.socialProfiles.map((profile, index) => {
										return (<div key={index}>
											<p className="control has-addons">
												<span className="select">
													<select name="type" value={profile.type}
																	onChange={(e) => onValueChanged(e, 'socialProfiles', index)}>
														<option value="GitHub">GitHub</option>
														<option value="Xing">Xing</option>
														<option value="LinkedIn">LinkedIn</option>
														<option value="Facebook">Facebook</option>
														<option value="Twitter">Twitter</option>
														<option value="Google">Google</option>
													</select>
												</span>
												<input name="username"
															 type="text"
															 className="input is-expanded"
															 placeholder="username"
															 required
															 value={profile.username}
															 onChange={(e) => onValueChanged(e, 'socialProfiles', index)}/>

												<a className="button is-danger is-outlined" title="Remove"
													 onClick={() => onDeleteFrom('socialProfiles', index)}>
													<span className="icon"><i className="fa fa-times"></i></span>
												</a>
											</p>
										</div>);
									})}
									<a type="button" className="button is-primary is-outlined" onClick={() => onAddTo('socialProfiles')}>
										<span className="icon">	<i className="fa fa-plus-square-o"> </i> </span> &nbsp; Add a social
										profile
									</a>

									<br /><br />
									<label htmlFor="address" className="label">Address</label>
									{contact.addresses.map((address, index) => {
										return (<div key={index}>
											<p className="control has-addons">
												<span className="select">
													<select name="type" value={address.type}
																	onChange={(e) => onValueChanged(e, 'addresses', index)}>
														<option value="Home">Home</option>
														<option value="Office">Office</option>
														<option value="Other">Other</option>
													</select>
												</span>
												<input name="address"
															 type="text"
															 className="input is-expanded"
															 placeholder="address"
															 required
															 value={address.address}
															 onChange={(e) => onValueChanged(e, 'addresses', index)}/>

												<a className="button is-danger is-outlined" title="Remove"
													 onClick={() => onDeleteFrom('addresses', index)}>
													<span className="icon"><i className="fa fa-times"></i></span>
												</a>
											</p>
										</div>);
									})}
									<a type="button" className="button is-primary is-outlined" onClick={() => onAddTo('addresses')}>
										<span className="icon">	<i className="fa fa-plus-square-o"> </i> </span> &nbsp; Add an address
									</a>


									<label htmlFor="note" className="label">Note</label>
									<p className="control">
										<textarea id="note"
															name="note"
															className="textarea"
															placeholder="Textarea"
															value={contact.note}
															onChange={(e) => onValueChanged(e)}
										></textarea>
									</p>
								</div>
							</div>
						</div>
						<footer className="card-footer">
							<button type="submit" className="card-footer-item">Save</button>
							{isNew ? '' : <a className="card-footer-item" onClick={onDeleteContact}>Delete</a>}
							<a className="card-footer-item" onClick={onCancel}>Cancel</a>
						</footer>
					</form>
				</div>
			</div >
		);
	}
}