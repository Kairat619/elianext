import { FarzaaContext } from '@/context/FarzaaContext';
import { allProductList } from '@/data/Data';
import React, { useContext, useState } from 'react';

const categories = [
    { name: null, label: 'All Door' },
    { name: 'Anti-Aging', label: 'Anti-Aging' },
    { name: 'Beauty Oils', label: 'Beauty Oils' },
    { name: 'Cleansing', label: 'Cleansing' },
    { name: 'Moisturisers', label: 'Moisturisers' },
    { name: 'Eye Care', label: 'Eye Care' },
    { name: 'Self-Tanners', label: 'Self-Tanners' },
    { name: 'Face Serum', label: 'Face Serum' },
    { name: 'Toners & Mists', label: 'Toners & Mists' }
];

const ProductCategoryList = () => {
    const { handleCategoryFilter } = useContext(FarzaaContext);
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    };

    return (
        <section className="sidebar-single-area product-categories-area">
            <h3 className="sidebar-single-area__title">Product categories</h3>
            <ul className="product-categories">
                {categories.map(categoryObj => (
                    <li
                        key={categoryObj.name}
                        onClick={() => handleCategoryClick(categoryObj.name)}
                        className={activeCategory === categoryObj.name ? 'active' : ''}
                    >
                        {categoryObj.label} ({categoryObj.name === null ? allProductList.length : allProductList.filter(product => product.category === categoryObj.name).length})
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductCategoryList;
