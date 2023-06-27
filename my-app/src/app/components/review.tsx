import React from "react";
import { useRouter } from "next/navigation";
import { reviews } from "../../../../simple_api/api/mock";
import Image from "next/image";
import "../../app/styles/moviepage.css";

export default function Review({ params }: { params: { id: string } }) {
    const review = reviews.find((review) => review.id === params.id);

    if (!review) {
        return <div className="loading">Loading...</div>;
    }
    return (
        <div className="movie-review-item">
            <div className="review-card">
                <div className="review-pic">

                </div>
                <div className="review-item">
                    <label className="review-title">{review.name}</label>
                    <label className="review-text">{review.text}</label>
                </div>
                <div className="review-mark">Оценка: <div className="review-mark-content">{review.rating}</div></div>
            </div>
        </div>

    )
}