import React from 'react'

const Navbar = ({ setCategory }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'><span className='text-danger'>DM</span> News</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("technology")}>Technology</a>
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("sports")}>Sports</a>
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("health")}>Health</a>
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("science")}>Science</a>
                            <a className="nav-link text-white" href="#" onClick={() => setCategory("business")}>Business</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
