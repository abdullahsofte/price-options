import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow my-5 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-lg font-bold text-gray-800 mb-4">${price} / Month</p>
      <ul className="list-disc list-inside text-gray-600  flex-grow">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
        Choose Plan
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
