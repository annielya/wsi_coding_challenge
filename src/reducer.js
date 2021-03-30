import Data from './data.json'

const data = Data.groups;

const initialStage = {data, selectedItem: {}, }

const reducer = (state = initialStage, action) => {
    switch(action.type) {
        case "SELECT":
            let select = state.data.find(i => i.id === action.id)
            //let i = JSON.stringify(select)
            let copy = select
            let str_copy = JSON.stringify(copy)
            localStorage.setItem('select', JSON.stringify(str_copy))
            
            return {
                ...state,
                selectedItem : select
            }
        case "SEARCH":
            let search = data.filter(i => i.name.toLowerCase().includes(action.value.toLowerCase()))

            return {
                ...state,
                data: search
            }
        default:
            return state
    }

}

export default reducer;