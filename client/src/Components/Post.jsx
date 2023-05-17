import React from 'react'

const Post = () => {
    return (
        <div className="post">
            <div className="post-image">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="post-image" />
            </div>
            <div className="post-content">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in fugit eius.</h2>
                <p className="post-content-info">
                    <a href="#" className="author">Shreyansh Jain</a>
                    <time>2023-05-17 23:43</time>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates explicabo qui dolorum temporibus iusto doloremque! Soluta minima est dolores explicabo non expedita illum neque, perspiciatis animi tenetur rerum esse nesciunt aperiam velit magnam!</p>
            </div>
        </div>
    )
}

export default Post
