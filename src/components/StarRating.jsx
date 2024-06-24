import React, { useState } from 'react';

const StarRating = ({ rating = 0, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(rating); // Tambahkan state untuk menyimpan rating terpilih
    const [hoverRating, setHoverRating] = useState(0);

    const handleClick = (newRating) => {
    setSelectedRating(newRating); // Perbarui rating terpilih saat diklik
    if (onRatingChange) {
        onRatingChange(newRating);
        }
    };

    return (
        <div>
        {Array(5)
            .fill(0)
            .map((_, index) => {
            const starClass = index < (hoverRating || selectedRating) ? "fas fa-star" : "far fa-star"; // Gunakan selectedRating
            return (
                <i
                key={index}
                className={starClass}
                style={{ color: '#FFD700', cursor: 'pointer', fontSize: 40}}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleClick(index + 1)}
                ></i>
            );
            })}
        </div>
    );
};

export default StarRating;
