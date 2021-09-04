import React from 'react'


export default function About(props) {
    return (
        <div className={`container bg-${props.mode==='dark'?'dark':'light'}`}>
           <div className="card mb-3">
  <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTYyOTk5MDQxNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" className="card-img-top" alt="..."/>
  <div className={`card-body bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='light'?'dark':'light'}`}>
    <h5 className="card-title">About Us</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, numquam. Veniam optio ad iusto cum fuga quasi quisquam accusantium laboriosam beatae ullam fugiat, corporis consequatur suscipit animi, sed officia expedita, facere consequuntur asperiores vitae reprehenderit nam tempore aliquam provident? Omnis dolores suscipit asperiores aliquid fugiat consequuntur nesciunt, facilis illo porro placeat illum iste, ipsa eligendi.</p>
  </div>
</div>
        </div>
    )
}
