import React from 'react';
import './Comments.css';

interface Testimonial {
    name: string;
    title: string;
    image: string;
    text: string;
  }

  const commentsData: Testimonial[] = [
    {
      name: 'Mark Patrick',
      title: '24K+ Followers / Personal Brand',
      image: '',
      text: '"Excellent tool! I have been using LazyLines for a few months now and it has helped me create videos that got over 40k views."',
    },
    {
      name: 'Kenny Nwokoye',
      title: '100K+ Followers / Affiliate Marketer',
      image: '',
      text: '"This tool is revolutionary. It has completely changed the way I make short-form videos. The ideas are unique, the hooks are attention-grabbing, and the scripts have that viral flair."',
    },
    {
      name: 'Create Content Club',
      title: '180K+ Followers / Creators',
      image: '',
      text: '"We found LazyLines really useful and most definitely an interesting tool. The features of LazyLines have great potential."',
    },
    
  ];

  const Comments: React.FC = () => {
    return (
      <div className="comments-container">
        
      </div>
    );
};

  export default Comments;