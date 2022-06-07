import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Helmet } from "react-helmet";
import Layout from '../components/layout'
import queryString from 'query-string';

export default function RootIndex() {

    const posts = [
      
    ]

    const [visible, setVisible] = useState(9);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    }

    const [filteredList,setFilteredList]=useState([]);
    const [filter,setFilter]=useState("latest");

    useEffect(()=>{
      setFilteredList(posts);
    },[]);

    useEffect(() => { 
      const queryP=queryString.parse(window.location.search);
      console.log("useSearchParams::",queryP.filter);
      if(queryP.filter!==undefined){
        setFilter(queryP.filter);
      }
    }, [])
  
    const filterDataList=(filter)=>{
      if(filter==="Latest"){
        setFilteredList(posts);
      }else{
        console.log(filter);
        let newList=posts.filter(function(post){
          return post.tags.includes(filter);
        });
        console.log( "newlist ", newList);
        setFilteredList([]);
        setFilteredList(newList);
      }
    }

    const changeUrl=(filter)=>{
      filterDataList(filter);
      setFilter(filter.toLowerCase());

      window.history.pushState(null,'',`${filter.toLowerCase()}`);
    }
  
  
    return filteredList != undefined ? (
      <>
        <Layout >
        <div className="blog-wrapper">
            <div className="blogNav">
              <div className="navContent">
                <h4>Parts</h4>
                <div className="blogLinks">
                    <span className={(filter=="all-parts")?"active-tab":""}
                    onClick={()=>changeUrl('all-parts')}>All Parts</span>
                    <span className={(filter=="bolts")?"active-tab":""}
                    onClick={()=>changeUrl('bolts')}>Bolts</span>
                    <span className={(filter=="tools")?"active-tab":""}
                    onClick={()=>changeUrl('tools')}>Tools</span>
                    <span className={(filter=="tires")?"active-tab":""}
                    onClick={()=>changeUrl('tires')}>Tires</span>
                </div>
                <Dropdown className="dropdownMenu">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={()=>filterDataList('')}>All Parts</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>filterDataList('bolts')}>Bolts</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>filterDataList('tools')}>Tools</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>filterDataList('tires')}>tires</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            
            <div className="blogList">
              <div className="article-wrapper">
                {filteredList.slice(0, visible).map((post, key) => {
                  if(key!=posts.length-1)
                    return <div className="blog-articles" key={key}>
                        <a className='' href={post.link} exact>
                          <img className='mainImg' src={post.blogImage}/>
                        </a>
                        <span className='tags'>{post.tags}</span>

                        <a className='title' href={post.link} exact>{post.title}</a>
                        
                        <div className='clock'>
                            <span className='date'>{post.date}</span>
                            <div className="dateLine"></div>
                            <span className='time'>{post.time}</span>
                        </div>
                        <div className='authorDiv'>
                            <img className='authImg' src={post.authorImg} /> 
                            <span className='author'>{post.author}</span>
                        </div>
                    </div>
                  })}
              </div>
            </div>
            <div className="tabButton">
                <button className='buttonTab' onClick={showMoreItems}>Load more parts</button>
            </div>
        </div>
        <Helmet>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21995803.js"></script>
      </Helmet>
    </Layout>
      </>
    ) : (
      <div></div>
    );
  }