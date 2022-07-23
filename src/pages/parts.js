import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Helmet } from "react-helmet";
import Layout from '../components/layout'
import queryString from 'query-string';

export default function RootIndex() {

    const [visible, setVisible] = useState(9);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    }

    const [filteredList,setFilteredList]=useState([]);
    const [filter,setFilter]=useState("latest");

    useEffect(()=>{
      setFilteredList(parts);
    },[]);

    useEffect(() => { 
      const queryP=queryString.parse(window.location.search);
      console.log("useSearchParams::",queryP.filter);
      if(queryP.filter!==undefined){
        setFilter(queryP.filter);
      }
    }, [])
  
    const filterDataList=(filter)=>{
      if(filter==="all-parts"){
        setFilteredList(parts);
      }else{
        console.log(filter);
        let newList=parts.filter(function(part){
          return part.tags.includes(filter);
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

    const parts = [
      {
        title: '3 Ton (6,000 lb) Capacity, Hydraulic Floor Jack Quick Lift Piston Pump', price: '$159', tags: 'tools', 
        img: 'https://i5.walmartimages.com/asr/d5019715-d302-44e8-8144-94792410da1b.e71ef3bf0e1a707d49e41f8d7ac2c272.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Goodyear Reliant All-Season 235/60R18 103V Tire', price: '$116', tags: 'tires', 
        img: 'https://i5.walmartimages.com/asr/97e6df10-5771-4701-a040-6b6b015b3773.400874d938bd6a36e3391979ef30825f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'HART 20-Volt 4-Tool Combo Kit 1.5Ah Lithium-Ion 16-inch Storage Bag', price: '$138', tags: 'tools', 
        img: 'https://i5.walmartimages.com/asr/9aa78062-c597-4041-9849-4fc8ae4e9bf4_1.092d85e5e2eb855afc95dd91fb701a4f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Hyper Tough 20V Max 3/8-in. Drill & 70-Piece DIY Home Tool Set', price: '$48', tags: 'tools', 
        img: 'https://i5.walmartimages.com/asr/9633215f-2e18-4a9c-893c-c31300068bae.adab4e65b59db0e9e663355039a7ebcc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Mirror Hanging Fuzzy Plush Dice with Dots For Car Interior Ornament', price: '$8', tags: 'accessories', 
        img: 'https://i5.walmartimages.com/asr/20497ff6-d71f-4c2e-8e5b-e67cc752f05c.b19bc99e2c27e7becb9fb86d89603419.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Cooper Discoverer A/T All-Season 275/55R20 117T Tire', price: '$180', tags: 'tires',
        img: 'https://i5.walmartimages.com/asr/d95f8bde-58da-4e35-964d-a052b5b14152.4985d30c872af7a98c33e60c88e5f0f5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Vercelli Strada 1 All-Season Tire - 255/55R18 109V', price: '$124', tags: 'tires',
        img: 'https://i5.walmartimages.com/asr/97e6df10-5771-4701-a040-6b6b015b3773.400874d938bd6a36e3391979ef30825f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'RIDGID Drill Driver Impact Kit 18V LED Light Variable Speed', price: '$159', tags: 'tools',
        img: 'https://i5.walmartimages.com/asr/4f8eae33-4737-4b31-94c4-56bf35ebefcc.0150a2cf79f1e8b34b8ae05f8e57376a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Console Pad, Colorful Armrest Cover Cushion for Car', price: '$12', tags: 'accessories',
        img: 'https://i5.walmartimages.com/asr/d9a33e7c-2095-488c-833c-b40a869165b9.2460aa38a22db6d1aed8f66fbaccfebd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Hydraulic Trolley Jack Car Lift with Blow Molded Case (3000 lbs Capacity)', price: '$55', tags: 'tools',
        img: 'https://i5.walmartimages.com/asr/fcdb9fd1-9061-48f7-9dfe-bf6b17f90275_1.278f5c8a6ab1b36801e226a2b160ca16.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Douglas SL All-Season 235/60R17 102T Tire', price: '$96', tags: 'tires',
        img: 'https://i5.walmartimages.com/asr/a6631371-4b67-42b9-9b9d-6fb39fe627eb.0ab8244c0094fc2814ed2482dd3ee7f5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: 'Sumitomo HTR A/S P03 P235/60R18 112H Passenger Tire', price: '$156', tags: 'tires',
        img: 'https://i5.walmartimages.com/asr/8b096249-3363-44ad-a56f-d6fa13c3d61b.d40abaf61f1d432dca97c7f756ea2714.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
      {
        title: '3Pcs/Set Woolen Winter Soft Warm Fuzzy Steering Wheel Cover', price: '$20', tags: 'accessories',
        img: 'https://i5.walmartimages.com/asr/392a5632-a292-4eef-902f-af3153ed5478_1.e09805c120e45cbb697a9d726bdbb1d9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
      },
    ]
  
  
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
                    <span className={(filter=="accessories")?"active-tab":""}
                    onClick={()=>changeUrl('accessories')}>Accessories</span>
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
                {filteredList.slice(0, visible).map((part, key) => {
                  // if(key!=parts.length-1)
                    return <div className="blog-articles" key={key}>
                        <img className='mainImg' src={part.img}/>
                        <span className='tags'>{part.tags}</span>

                        <h4 className='title'>{part.title}</h4>
                        
                        <div className='clock'>
                            <span className='date'>{part.price}</span>
                        </div>
                      <button className='buyNow'>Buy Now</button>
                    </div>
                  })}
              </div>
            </div>
            <div className="tabButton">
                <button className='buttonTab' onClick={showMoreItems}>Load more parts</button>
            </div>
        </div>
        <Helmet>
          <title>Parts</title>
          <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21995803.js"></script>
      </Helmet>
    </Layout>
      </>
    ) : (
      <div></div>
    );
  }