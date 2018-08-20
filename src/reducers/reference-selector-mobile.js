const initialState = [ {
	open: false,
	bookIndex: null,
	bookName: null,
}, {
	open: false,
	bookIndex: null,
	bookName: null,
} ];

const openState = {
	open: true,
	bookIndex: null,
	bookName: null,
};

const referenceSelectorMobile = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'CLOSE_REFERENCE_SELECTOR_MOBILE':
			return state.map( () => {
				return {
					open: false,
					bookIndex: null,
					bookName: null,
				};
			} );

		case 'TOGGLE_REFERENCE_SELECTOR_MOBILE':
			const newState = state.map( () => {
				return {
					open: false,
					bookIndex: null,
					bookName: null,
				};
			} );

			newState[ action.index ].open = ! state[ action.index ].open;
			return newState;

		case 'REFERENCE_SELECTOR_MOBILE_SET_BOOK':
			const setBookState = [ ...state ];
			setBookState[ action.index ].bookName = action.bookName;
			setBookState[ action.index ].bookIndex = action.bookIndex;

			return setBookState;

		case 'ADD_COLUMN':
			const addedState = [ ...state ];
			addedState.push( {
				open: false,
				bookIndex: null,
				bookName: null,
			} );
			return addedState;

		case 'REMOVE_COLUMN':
			const removedState = [ ...state ];
			removedState.pop();
			return removedState;

		default:
			return state;
	}
}

export default referenceSelectorMobile;
