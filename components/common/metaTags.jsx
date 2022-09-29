

const MetaTags = ({title, description, keywords}) => {
  return (
    <>
      <meta name="Techdots" content="Techdots"/>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>
      <meta name ="keywords" content ={keywords}/>
      <meta name="theme-color" content="#283552"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <link rel="apple-touch-icon" href="../public/apple-icon.png"/>
      {/* twitter */}
      <meta property ="twitter:card" content ="summary_large_image"/>
      <meta property ="twitter:url" content ="https://www.techdots.dev/"/>
      <meta property ="twitter:title" content ="Techdots"/>
      <meta property ="twitter:description" content ="Techdots help businesses navigate any and all facets of the digital landscape from creating
              strategic software to dynamic solutions"/>
      <meta property ="twitter:image" content ="http://res.cloudinary.com/dpu5ywrox/image/upload/v1664456980/pzryowzfqkmlcvomvpfp.png"/>
      {/* facebook */}
      <meta property ="og:type" content ="website"/>
      <meta property ="og:url" content ="https://www.techdots.dev/"/>
      <meta property ="og:title" content ="Techdots"/>
      <meta property ="og:description" content ="Techdots help businesses navigate any and all facets of the digital landscape from creating
              strategic software to dynamic solutions"/>
      <meta property ="og:image" content ="http://res.cloudinary.com/dpu5ywrox/image/upload/v1664456980/pzryowzfqkmlcvomvpfp.png"/>
    </>
  )
}

export default MetaTags;
