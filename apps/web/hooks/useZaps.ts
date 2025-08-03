import { ZapType } from "@zapier/types";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const useZaps = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [zaps, setZaps] = useState<ZapType[]>([]);

    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            const res = await axios.get(`${BACKEND_URL}/api/v1/zap`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            });
            setZaps(res.data.zaps);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    return { isLoading, zaps };
};

export default useZaps;