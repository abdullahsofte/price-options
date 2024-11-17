import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const [priceOptions, setPriceOption] = useState([]);

    useEffect(() => {
        fetch('./priceOption.json')
            .then(res => res.json())
            .then(data => setPriceOption(data))
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-6">
            Best Reasonable Price in This City
            </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">

                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;