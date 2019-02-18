import { combineReducres } from 'redux'
import todos from './TodoReducer'
import visibilityFilter from './FilterReducer'

export default combineReducres({
    todos,
    visibilityFilter
})