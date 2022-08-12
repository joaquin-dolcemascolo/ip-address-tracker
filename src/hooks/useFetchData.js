import { useEffect, useState } from 'react';
import { getIpInformation } from '/src/services/ipInformation';

const useFetchData = () => {
    const [ipInformation, setIpInformation] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        searchIp();
    }, []);

    const searchIp = ipAddress => {
        setIsFetching(true);

        getIpInformation({ ipAddress })
            .then(data => setIpInformation(data))
            .finally(() => setIsFetching(false));
    };

    return { ipInformation, isFetching, searchIp };
};

export default useFetchData;
