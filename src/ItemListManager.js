import React, { useState } from 'react';
import hackerRankIcon from './HackerRank_Icon.png';

const Header = () => (
    <div className="bg-gray-900 p-4 flex items-center gap-2">
        <img
            src={hackerRankIcon}
            alt="HackerRank Icon"
            className="w-8 h-8"
        />
        <span className="text-green-500 text-xl">Item List Manager</span>
    </div>
);

const InputSection = ({ inputValue, setInputValue, handleAddItem }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter item"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
                onClick={handleAddItem}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                Add Item
            </button>
        </div>
    );
};

const ItemList = ({ items }) => (
    <ul className="space-y-2">
        {items.map((item, index) => (
            <li key={index} className="text-gray-700">
                {item}
            </li>
        ))}
    </ul>
);

const ItemListManager = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-normal text-gray-900 mb-8">Item List</h1>
                <InputSection
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleAddItem={handleAddItem}
                />
                <div className="mt-6">
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    );
};

export default ItemListManager;