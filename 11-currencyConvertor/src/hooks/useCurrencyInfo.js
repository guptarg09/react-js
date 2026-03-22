import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {

        if (!currency) return;

        const fetchCurrency = async () => {

            try {

                const response = await fetch(
                    `https://api.frankfurter.dev/v1/latest?base=${currency.toUpperCase()}`
                );

                // ✅ check response
                if (!response.ok) {
                    throw new Error("Failed to fetch currency data");
                }

                const result = await response.json();

                // ✅ make sure rates exist
                if (result && result.rates) {

                    setData(result.rates);

                    console.log("API Data:", result.rates);

                }

            } catch (error) {

                console.log("Error fetching currency:", error);

                // ✅ prevent crash
                setData({});

            }

        };

        fetchCurrency();

    }, [currency]);

    return data;

}

export default useCurrencyInfo;