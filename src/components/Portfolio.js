import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1><b>Projects</b></h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  {/* <div className="item-wrap"> */}
                    <a href="#modal-01">
                      <a href={item.projectlink}><img src={`${item.imgurl}`} className="item-img"/></a>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h2>{item.name}</h2>
                          <h4>{item.description} <br/> {item.projectlink} </h4>
                        </div>
                      </div>
                    </a>
                  {/* </div> */}
                </div>
             )
            })
            
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}