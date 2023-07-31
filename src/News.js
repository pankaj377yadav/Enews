import React, { Component } from "react";
import NewsUpdate from "./NewsUpdate";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defaultProps ={
    category : "general",
  }
  static propTypes ={
    category: PropTypes.string,
  }
  // articles= [
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Carly Page",
  //   "title": "Chinese hackers raided US government email accounts by exploiting Microsoft cloud bug",
  //   "description": "The White House confirmed that unclassified U.S. government email accounts were accessed in the raids by Chinese hackers.",
  //   "url": "https://techcrunch.com/2023/07/12/chinese-hackers-us-government-microsoft-email/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1169993942.jpg?resize=1200,831",
  //   "publishedAt": "2023-07-12T12:32:12Z",
  //   "content": "Chinese hackers exploited a flaw in Microsofts cloud email service to gain access to the email accounts of U.S. government employees, the technology giant has confirmed.\r\nThe hacking group, tracked a… [+2220 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Paul Sawers",
  //   "title": "Proton brings its encrypted cloud storage service to desktop",
  //   "description": "Proton, the Swiss company behind various privacy-focused online services, has brought its encrypted cloud storage service to desktop.",
  //   "url": "https://techcrunch.com/2023/07/12/proton-brings-its-encrypted-cloud-storage-service-to-desktop/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/Proton-Drive-for-Windows-3-1-e1689164597537.png?resize=1200,675",
  //   "publishedAt": "2023-07-12T12:27:04Z",
  //   "content": "Proton, the Swiss company behind various privacy-focused online services, has brought its end-to-end encrypted (E2EE) cloud storage service to desktop for the first time.\r\nFollowing an extended beta … [+1409 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Kate Park",
  //   "title": "Kakao ups its game in generative AI with Karlo 2.0, an AI image generator",
  //   "description": "Kakao Brain, an AI unit of Korean tech firm Kakao, launched Karlo 2.0, an AI-powered tool that can produce images from prompts.",
  //   "url": "https://techcrunch.com/2023/07/12/kakao-ups-its-game-in-generative-ai-with-karlo-2-0-an-ai-image-generator/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/이미지-카카오브레인-초거대-AI-이미지-생성-모델-‘칼로-2.0-공개_230710.png?resize=1200,581",
  //   "publishedAt": "2023-07-12T12:23:56Z",
  //   "content": "South Korean tech giant Kakao wants a piece of the action in the generative AI race, and today it made a bid for it, with big updates to its AI image generator Karlo and its KoGPT large language mode… [+5135 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Ivan Mehta",
  //   "title": "Quora's Poe chatbot introduces better context window and document upload support",
  //   "description": "Quora's AI-powered chatbot Poe introduced new tools on including a larger context window for better responses and document upload.",
  //   "url": "https://techcrunch.com/2023/07/12/quoras-poe-chatbot-introduces-better-context-window-and-document-upload-support/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/Poe-feat.jpg?resize=1200,675",
  //   "publishedAt": "2023-07-12T12:01:02Z",
  //   "content": "Quora’s AI-powered chatbot service Poe introduced a bunch of new tools on Tuesday ranging from a larger context window for better responses to support for URL retrieval, and document upload, along wi… [+3276 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Paul Sawers",
  //   "title": "Europe greenlights Broadcom’s $61B VMware acquisition",
  //   "description": "The European Commission has approved Broadcom's $61 billion bid for virtualization software giant VMware, though with caveats.",
  //   "url": "https://techcrunch.com/2023/07/12/europe-greenlights-broadcoms-61b-vmware-acquisition/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-969249108.jpg?resize=1200,827",
  //   "publishedAt": "2023-07-12T11:02:56Z",
  //   "content": "The European Commission (EC) has formally approved Broadcom’s $61 billion bid for virtualization software giant VMware, with the caveat that Broadcom fulfils certain ongoing commitments around access… [+2145 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Romain Dillet",
  //   "title": "Testing automation platform Tricentis acquires Waldo",
  //   "description": "Tricentis, a test automation platform that has acquired quite a few testing services and startups over the years, is making another M&A move with the acquisition of Waldo, an automated testing tool for mobile development teams.",
  //   "url": "https://techcrunch.com/2023/07/12/test-automation-platform-tricentis-acquires-waldo/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/daniel-romero-AvwGVZWuLYM-unsplash.jpg?resize=1200,705",
  //   "publishedAt": "2023-07-12T10:52:48Z",
  //   "content": "Tricentis, a test automation platform that has acquired quite a few testing services and startups over the years, is making another M&amp;A move with the acquisition of Waldo, an automated testing to… [+1851 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Devin Coldewey",
  //   "title": "Bedrock's autonomous ocean-mapping ambitions score $25M as renewables rise",
  //   "description": "The demand for offshore wind has skyrocketed, like all renewable energy sources — but the necessary work of surveying, inspecting, and mapping coastal areas is stuck in the past. Bedrock’s autonomous underwater vehicles and digital platform play could redefin…",
  //   "url": "https://techcrunch.com/2023/07/12/bedrocks-autonomous-ocean-mapping-ambitions-score-25m-as-renewables-rise/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/bedrock-w-logo.jpg?resize=1200,710",
  //   "publishedAt": "2023-07-12T01:54:31Z",
  //   "content": "The demand for offshore wind has skyrocketed, like all renewable energy sources but the necessary work of surveying, inspecting, and mapping coastal areas is stuck in the past. Bedrock’s autonomous u… [+6708 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Christine Hall",
  //   "title": "Bootstrapped since 2009, IT management company InvGate raises $35M",
  //   "description": "InvGate works with enterprise and mid-size companies, offering a SaaS solution to streamline their IT operations.",
  //   "url": "https://techcrunch.com/2023/07/12/invgate-it-management-35m-latin-america-enterprise/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/duesoon-invgate-sd-demo.cloud_.invgate.net_myworkHigh-Res-Screen-2.png?resize=1200,675",
  //   "publishedAt": "2023-07-11T23:44:03Z",
  //   "content": "InvGate, a SaaS platform offering information technology service management and IT asset management products, raised $35 million in a growth round to help it continue expanding globally.\r\nThe company… [+1920 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Kyle Wiggers",
  //   "title": "Voice cloning platform Resemble AI lands $8M",
  //   "description": "Resemble AI, a platform using AI to clone voices, ostensibly in an ethical way, has raised $8 million in a venture funding round.",
  //   "url": "https://techcrunch.com/2023/07/12/voice-cloning-platform-resemble-ai-lands-8m/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-525848879.jpg?resize=1200,800",
  //   "publishedAt": "2023-07-11T23:34:24Z",
  //   "content": "Resemble AI, a platform that uses generative AI to clone realistic-sounding voices, today announced that it raised $8 million in a Series A round led by Javelin Venture Partners, with participation f… [+4627 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "techcrunch",
  //   "name": "TechCrunch"
  //   },
  //   "author": "Alex Wilhelm",
  //   "title": "The era of tech layoffs is evolving in an interesting way",
  //   "description": "The era of tech layoffs is not yet past, but it is losing some of its intensity and changing into a unique trend.",
  //   "url": "https://techcrunch.com/2023/07/11/tech-layoffs-are-changing/",
  //   "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1193927148.jpg?resize=1200,720",
  //   "publishedAt": "2023-07-11T19:49:10Z",
  //   "content": "The era of techlayoffs is not yet past, but it is losing some of its intensity and changing into a unique trend.\r\nThe Exchange explores startups, markets and money. \r\nRead it every morning on TechCru… [+1220 chars]"
  //   }
  //   ]
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async updateNews(){
    this.props.setProgress(5);
    const url=`https://newsapi.org/v2/everything?q=apple&from=2023-07-21&to=2023-07-21&sortBy=popularity&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=12`;

    // https://newsapi.org/v2/everything?q=apple&from=2023-07-21&to=2023-07-21&sortBy=popularity



    // let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-06-21&sortBy=publishedAt?&languag=en&category=${this.props.category}&apiKey=befc9b17a8a64e7faf2af68f03b2fb76&page=${this.state.page}&pageSize=12`
    
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);
  }

async componentDidMount(){
  this.updateNews();
}

  // nextclick = async() =>{
  //   this.setState({page: this.state.page + 1 });
  //   this.updateNews();
  // }

  // previousclick = async() =>{
  //   this.setState({page: this.state.page - 1 });
  //   this.updateNews();

  // }

  

fetchMoreData = async() => {
  this.setState({page: this.state.page + 1 })
  const url=`https://newsapi.org/v2/everything?q=apple&from=2023-07-21&to=2023-07-21&sortBy=popularity&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=12`;

  // let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-06-21&sortBy=publishedAt?&languag=en&category=${this.props.category}&apiKey=befc9b17a8a64e7faf2af68f03b2fb76&page=${this.state.page}&pageSize=12`
  
  // https://newsapi.org/v2/everything?q=tesla&from=2023-06-22&sortBy=publishedAt&apiKey=befc9b17a8a64e7faf2af68f03b2fb76

  // https://newsapi.org/v2/everything?q=apple&from=2023-07-21&to=2023-07-21&sortBy=popularity

  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page,
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
  })
};


  render() {
    return (
      <div className="container my-3">
        {/* <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousclick}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextclick}>Next</button>
        </div> */}
        <h2 className="text-center">TOP HEADLINES</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">

          {this.state.articles.map((Element) =>{
            return <div className="col-md-4" key={Element.url}>
              <NewsUpdate title= {Element.title} description={Element.description} newsUrl ={Element.url} ImageUrl={Element.urlToImage} author={Element.author.slice(0,10)} source={Element.source.name} />
            </div>
          })}
        </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          {/* <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousclick}>previous</button> */}
          {/* <h5> Total Results : {this.state.totalResults}</h5> */}
          {/* <button type="button" className="btn btn-dark" onClick={this.nextclick}>Next</button> */}
        </div>
      </div>
    );
  }
}

export default News;
