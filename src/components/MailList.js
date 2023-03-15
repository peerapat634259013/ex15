import React from 'react'


function MailList() {
  return (
    <div className="mailList">
      <center>
        <div className="mailListItem">
          <b>Save time,save money!</b>
          <p> Sign up we'll send best deals to you</p>
          <div className="inputMail">
            <input type="email" placeholder="Your Email" className="input" />{" "}
            <button className="btn1">
              <a>subscribe</a>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default MailList