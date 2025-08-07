import { AppCategoryType } from "@zapier/types";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const useApps = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [app, setApps] = useState<AppCategoryType[]>([]);

    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            const res = await axios.get(`${BACKEND_URL}/api/v1/app/all`);
            setApps(res.data.appCategories);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    return { isLoading, app };
};

export default useApps;