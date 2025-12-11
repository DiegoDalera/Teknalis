import Link from 'next/link';

export default function LatestNews() {
    const news = [
        {
            id: 1,
            image: '/images/blog/3.jpg',
            date: 'Feb 06, 2018',
            title: 'Trouble with the law since to eastern side of yellow mint'
        },
        {
            id: 2,
            image: '/images/blog/4.jpg',
            date: 'Mar 30, 2018',
            title: 'Kind of torture to have to watch the show the one day'
        },
        {
            id: 3,
            image: '/images/blog/5.jpg',
            date: 'Apr 14, 2018',
            title: 'Make the best of things its an uphill climb long time'
        }
    ];

    return (
        <div className="our-blog latest-news section-spacing">
            <div className="container">
                <div className="theme-title-one">
                    <h2>Latest News</h2>
                    <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
                </div>
                <div className="wrapper">
                    <div className="clearfix">
                        <div className="row">
                            {news.map((item) => (
                                <div key={item.id} className="col-lg-4 col-12">
                                    <div className="single-blog">
                                        <div className="image-box">
                                            <img src={item.image} alt="" />
                                            <div className="overlay"><Link href="/blog" className="date">{item.date}</Link></div>
                                        </div>
                                        <div className="post-meta">
                                            <h5 className="title"><Link href="/blog">{item.title}</Link></h5>
                                            <Link href="/blog" className="read-more">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
