import React from 'react'

export const Catalogue = ({ posts }) => {
    return (
        <div>
            <div className="container catalogue__card-container">
                {posts.map(post => (
                    <div className="catalogue__card" >
                        <img src={post.img} className="card-img-top" alt={post.id} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">
                                {post.description}
                            </p>
                        </div>

                        <div className="card-body d-flex align-items-center">
                            <a className="btn btn-primary" href={post.link}> Ver prueba </a>
                            <i
                                className="far fa-clock"
                                style={{ fontSize: '1.1rem', marginLeft: '1.2rem' }}
                            >
                                {post.date}
                            </i>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
