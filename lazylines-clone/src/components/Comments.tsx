import React from 'react';
import './Comments.css';
import testimonial1 from './images/testimonial-1.png';
import testimonial2 from './images/testimonial-2.png';
import testimonial3 from './images/testimonial-3.png';

interface Testimonial {
    name: string;
    title: string;
    image: string;
    text: string;
    rotation: number;
  }

  const commentsData: Testimonial[] = [
    {
      name: 'Mark Patrick',
      title: '24K+ Followers / Personal Brand',
      image: testimonial3,
      text: '"Excellent tool! I have been using LazyLines for a few months now and it has helped me create videos that got over 40k views."',
      rotation: -4.82,
    },
    {
      name: 'Kenny Nwokoye',
      title: '100K+ Followers / Affiliate Marketer',
      image: testimonial2,
      text: '"This tool is revolutionary. It has completely changed the way I make short-form videos. The ideas are unique, the hooks are attention-grabbing, and the scripts have that viral flair."',
      rotation: -2.33,
    },
    {
      name: 'Create Content Club',
      title: '180K+ Followers / Creators',
      image: testimonial1,
      text: '"We found LazyLines really useful and most definitely an interesting tool. The features of LazyLines have great potential."',
      rotation: 0.66,
    },
    
  ];

  const Comments: React.FC = () => {
    return (
      <div className="comments-container">
        <div className="comments-wrapper">
            <div className="comments-header">
                <h2>What Our Lazy Customers Say</h2>
            </div>

            <div className="comments-track">
                {commentsData.map((testimonial, index) => (
                    <div
                        className="comment-card"
                        key={index}
                        style={{ transform: `rotate()` }}
                    >
                        <div className="comment-header">
                            <div
                                className="testimonial-image-container"
                                style={{ backgroundImage: `url(${testimonial.image})` }}
                            ></div>
                            <div className="comment-info">
                                <h3 className="comment-name">{testimonial.name}</h3>
                                <h3 className="comment-title">{testimonial.title}</h3>
                            </div>
                        </div>
                        <div className="comment-text">{testimonial.text}</div>
                    </div>
                ))}

                {commentsData.map((testimonial, index) => (
                <div
                    className="comment-card duplicated"
                    key={`duplicated-${index}`}
                    style={{ transform: `rotate()` }}
                >
                <div className="comment-header">
                    <div
                        className="testimonial-image-container"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                    <div className="comment-info">
                        <h3 className="comment-name">{testimonial.name}</h3>
                        <h3 className="comment-title">{testimonial.title}</h3>
                    </div>
                </div>
                    <div className="comment-text">{testimonial.text}</div>
                </div>
                ))}

                
            </div>
        </div>
      </div>
    );
};

  export default Comments;