import React, { Component } from 'react'
export class Newsitem extends Component {
  render() {
    let {title, description,Url,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
       <div className="card" style={{width: "370px",height: "600px", objectFit: "cover"}}>
            <img src={!Url?"https://unsplash.com/photos/a-bunch-of-balloons-that-are-shaped-like-email-7NT4EDSI5Ok":Url} className="card-img-top" style={{ width: "100%", height: "200px", objectFit: "cover" }} alt="..."/>
       <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTDString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className ="btn btn-sm btn-dark">Read More</a>
       </div>
       </div>
      </div>
    )
  }
}
export default Newsitem
