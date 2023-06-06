import { ref } from "vue";

export const useFetch = () => {
    const serverUrl = import.meta.env.VITE_API_URL;
    const error = ref<Error | null>(null);
    const loading = ref<boolean>(false)


    const sendRequest = async <T>(endpoint: string, options: { method: string, data?: T }) => {
        const { method, data } = options
        try {
            loading.value = true;

            const body = data ? JSON.stringify(data) : undefined;

            const res = await fetch(`${serverUrl}/${endpoint}`, {
                method, body, headers: {
                    'Content-Type': 'application/json'
                },
            });
            const jsonResult = await res.json();

            loading.value = false;
            error.value = null;

            return jsonResult;
        } catch (e) {
            error.value = e as Error
        }
        finally {
            loading.value = false;
        }
    }

    return { sendRequest, error, loading }
}