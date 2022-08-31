import React from 'react'
import CardItem from './CardItem'


function Card() {

  const data = [
    {
      img_link: "images/foto.png",
      pp_foto:"images/pp.jpg",
      name : "Poyraz Baba",
      title : "Not only five centuries, but also the leap into electronic",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "44 min",
      views : "1920",
      like : "924",

    },

    {
      img_link: "images/foto2.png",
      pp_foto:"images/pp.jpg",
      name : "Poyraz Baba",
      title : "Not only five centuries, but also the leap into electronic",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "6 min",
      views : "4600",
      like : "624",

    },

    {
      img_link: "images/foto3.png",
      pp_foto:"images/pp.jpg",
      name : "Poyraz Baba",
      title : "Not only five centuries, but also the leap into electronic",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "14 min",
      views : "1650",
      like : "394",

    },

    {
      img_link: "images/foto4.png",
      pp_foto:"images/pp.jpg",
      name : "Poyraz Baba",
      title : "Not only five centuries, but also the leap into electroni",
      descr:"Not only five centuries, but also the leap into electronic",
      descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi temporibus eius sint quos ducimus quam repellat incidunt",
      time : "5 min",
      views : "1800",
      like : "294",

    },
  ]


  const data_filter = data.map((e,index) => {
    
    return <CardItem 
    img_link={e.img_link}
    pp_foto={e.pp_foto}
    name = {e.name}
    title = {e.title}
    time = {e.time}
    descr = {e.descr}
    views = {e.views}
    like = {e.like}
    key = {e[index]}
    />
  })

  return (

    <div className='flex justify-center items-center h-screen pb-24'>
      <div className='w-screen-xl my-0 mx-auto flex flex-wrap justify-center items-center gap-8 sm:w-full'>
          {data_filter}
      </div>
    </div>
    



  )
}

export default Card