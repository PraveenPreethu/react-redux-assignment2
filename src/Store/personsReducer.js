import * as actiontypes from './actions';

const initialState = {
    persons: []
}

const personsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actiontypes.ADDPERSON: {
            let modifiedPersons = [...state.persons];
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
            modifiedPersons = modifiedPersons.concat(newPerson);

            return {
                ...state,
                persons: modifiedPersons
            }

        }
        case actiontypes.DELETEPERSON: {
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== actions.personId)
            }
        }
        default: return state;
    };
}

export default personsReducer;