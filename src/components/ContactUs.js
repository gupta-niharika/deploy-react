import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h1>Contact</h1>
                <a href={resumeData.linkedinId}><h4>Linked in</h4></a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}