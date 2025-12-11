import Link from 'next/link';

export default function PortfolioSection() {
    const projects = [
        { id: 1, title: 'Business Meeting', img: '/images/portfolio/1.jpg' },
        { id: 2, title: 'Business Meeting', img: '/images/portfolio/2.jpg' },
        { id: 3, title: 'Business Meeting', img: '/images/portfolio/3.jpg' },
        { id: 4, title: 'Business Meeting', img: '/images/portfolio/4.jpg' },
        { id: 5, title: 'Business Meeting', img: '/images/portfolio/5.jpg' },
        { id: 6, title: 'Business Meeting', img: '/images/portfolio/6.jpg' },
    ];

    return (
        <div className="our-case section-spacing">
            <div className="container">
                <div className="theme-title-one">
                    <h2>Our CASES</h2>
                    <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
                </div>
                <div className="wrapper">
                    <div className="row">
                        {projects.map((project) => (
                            <div key={project.id} className="col-lg-4 col-sm-6 col-12">
                                <div className="single-case-block">
                                    <img src={project.img} alt="" />
                                    <div className="hover-content">
                                        <div className="text clearfix">
                                            <div className="float-left">
                                                <h5><Link href="/project">{project.title}</Link></h5>
                                                <p>Explore strange new worlds</p>
                                            </div>
                                            <Link href="/project" className="details float-right">
                                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="view-all"><Link href="/project" className="theme-button-one">VIEW ALL</Link></div>
            </div>
        </div>
    );
}
