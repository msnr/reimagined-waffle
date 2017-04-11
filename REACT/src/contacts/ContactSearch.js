import React from 'react';

export default function ContactSearch({ searchText, onSearch }) {

	return (
		<div className="control is-grouped">
			<p className="control is-expanded">
				<input className="input"
					type="text"
					name="searchText"
					value={searchText}
					placeholder="Search for a name or company"
					onChange={(e) => onSearch(e.target.value)} />
			</p>
		</div>
	);
}

ContactSearch.propTypes = {
	searchText: React.PropTypes.string,
	onSearch: React.PropTypes.func.isRequired
}