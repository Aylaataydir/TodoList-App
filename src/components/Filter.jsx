import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const Filter = () => {

    const [filter, setFilter] = useState("All");
    const [isOpen, setIsOpen] = useState(false);

    const options = ["All", "Completed", "Active"];


    return (
        <div className="custom-select">
            {/* Seçili olan filtre - Buna tıklayınca menü açılır/kapanır */}
            <button className="select-selected" onClick={() => setIsOpen(!isOpen)}>
                {filter}
                <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
            </button>

            {/* Eğer isOpen true ise seçenekleri göster */}
            {isOpen && (
                <div className="select-items">
                    {options.map((opt) => (
                        <button
                            key={opt}
                            className="option"
                            onClick={() => {
                                setFilter(opt);
                                setIsOpen(false); // Seçince kapat
                            }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Filter