import React, { Component } from "react";

export class NewsUpdate extends Component {
  render() {
    let { title, newsUrl, ImageUrl,author,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "25rem" }}>
        <div class="card-header bg-warning">
          <b>
          {source}
          </b>
        </div>
          <img
            src={!ImageUrl?"https://www3.nhk.or.jp/news/html/20230720/K10014137091_2307201823_0720185540_01_02.jpg":ImageUrl}
            className="card-img-top"
            alt="..."
            height="200px"
            width="400px"
          />
          <div className="card-body">
            <div style={{height:"100px"}}>
            <h5 className="card-title">{title}...</h5>
            </div>
            
            <a ref="noreferrer" target="_blank" href={newsUrl} className="btn btn-primary">
              Read
            </a>
          </div>
          <div class="card-footer text-body-secondary">By : {!author?source:author}</div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
