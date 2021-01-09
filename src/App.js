import React, { useState } from 'react';
import './App.css';
import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, TopBar } from '@shopify/polaris';
import Gallery from './component/Gallery'



function App() {
  //upload image to cloudinary
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")


  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ShopifyInternshipChallenge')
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/kaylanewlon/image/upload",
      {
        method: "POST",
        body: data
      })

    const file = await res.json()
    console.log(file)

    setImage(file.secure_url)
    setLoading(false)

  }


  return (

    <AppProvider i18n={enTranslations}>

      <div className="App">

        <TopBar className="topBar" />
        <Page title="Upload Image to Cloudinary with React"><p>Also Made with Polaris, Because I Really Want This Job.</p></Page>
        <input type="file" name="Image" placeholder="Upload an Image" onChange={uploadImage} />
        {
          loading ? (
            <h3>Loading...</h3>
          ) : (
              <img src={image} style={{ width: '300px' }} />
            )
        }


        <div className="gallery">

          <Gallery />


        </div>
      </div>

    </AppProvider>
  )
};

export default App;
