import { Dish } from "../types";
import { useFetch } from "./useFetch";

export const useApi = () => {
    const { loading: getAllLoading, error: getAllError, sendRequest: getAllRequest } = useFetch();
    const { loading: clearLoading, error: clearError, sendRequest: clearRequest } = useFetch();
    const { loading: addLoading, error: addError, sendRequest: addRequest } = useFetch();
    const { loading: removeLoading, error: removeError, sendRequest: removeRequest } = useFetch();

    const getAll = async () => {
        const res = await getAllRequest<{ data: Dish[] }>('dishes', { method: 'GET' })
        return res?.data ?? [];
    }

    const clear = async () => {
        return clearRequest('dishes/clear', { method: 'GET' })
    }

    const add = async (data: Dish) => {
        return addRequest<{ status: 'OK' | 'Failed', message?: string, data?: Dish }>('dishes', { method: 'PUT', data })
    }

    const remove = async (id: string) => {
        return removeRequest(`dishes/${id}`, { method: 'DELETE' })
    }

    return {
        getAll,
        clear,
        add,
        remove,
        getAllLoading,
        getAllError,
        clearLoading,
        clearError,
        addLoading,
        addError,
        removeLoading,
        removeError
    }
}