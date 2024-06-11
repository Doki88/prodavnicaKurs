import { setProducts, setLoading, setError, setPagination} from "../slices/product"
import axios from 'axios'

export const getProducts = (page, favouriteToggle) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const { data } = await axios.get(`/api/products`)
        const { products, pagingation } = data;
        dispatch(setProducts(products))
        dispatch(setPagination(pagingation))
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An expected error has occured. Please try agian later.'
        ))
    }
}