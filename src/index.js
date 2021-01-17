import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, TopBar, FooterHelp, Link } from '@shopify/polaris';
import './index.css';



const theme = {
    colors: {
      topBar: {
        background: '#F5F5F5',
      },
    },
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg',
      url: 'https://www.shopify.com/',
      accessibilityLabel: 'Shopify',
    },
  };

class Main extends Component {
    //set gallery state
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    //this function runs when the app is online. it uses axios to pull json data from my cloudinary account. It retrieves the images tagged as ShopifyInternshipChallenge
    componentDidMount() {
        //pull images tagged as ShopifyInternshipChallenge
        axios.get('//res.cloudinary.com/kaylanewlon/image/list/ShopifyInternshipChallenge.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({ gallery: res.data.resources });
            });
    }
    //upload widget from cloudinary looks for a response crashed the app when the 'x' is clicked
    uploadWidget() {
        let _this = this;
        window.cloudinary.openUploadWidget({ cloud_name: 'kaylanewlon', upload_preset: 'ShopifyInternshipChallenge', tags:['ShopifyInternshipChallenge'] },
            function (error, result) {
                // Update gallery state with newly uploaded image
                _this.setState({ gallery: _this.state.gallery.concat(result) })
            });
    }

    
    render() {
        return (
            //AppProvider is used with polaris components
            <AppProvider theme={theme} i18n={enTranslations} >
                {/* Topbar, page, FooterHelp, and link are polaris components */}
                <TopBar className="nav" />
                <Page title="2020: It Wasn't All Bad" className="pageDiv">
                    <div className="main">
                        <h1>My Life in 2020: An Image Repository Timeline of Only the Good Stuff</h1>
                        <div className="upload">
                            {/* This button is connected to the upload widget */}
                            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                                Add Memory
                            </button>
                        </div>
                        <div className="gallery">
                            <CloudinaryContext cloudName="kaylanewlon">
                                {/* this.state.gallery.map maps through the gallery as set at componentDidMount */}
                                {
                                    this.state.gallery.map(data => {
                                        return (
                                            // <div className="responsive" key={data.public_id}>
                                                <div className="images" key={data.public_id}>
                                                    <a target="_blank" rel="noreferrer" href={`https://res.cloudinary.com/kaylanewlon/image/upload/${data.public_id}.jpg`}>
                                                        <Image publicId={data.public_id}>
                                                            <Transformation
                                                                crop="scale"
                                                                width="300"
                                                                height="300"
                                                                dpr="auto"
                                                                responsive_placeholder="blank"
                                                            />
                                                        </Image>
                                                    </a>
                                                    {/* Use for created at date and time */}
                                                    {/* <div className="desc">Created at {data.created_at}</div> */}
                                                </div>
                                            // </div>
                                        )
                                    })
                                }
                               

                            </CloudinaryContext>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="footer">
                    {/* Footer Info */}
                    <FooterHelp className="footer">
                        Learn more about{' '}
                        <Link url="https://www.linkedin.com/in/kayla-newlon/">
                            Kayla Newlon
                        </Link>
                    </FooterHelp>
                    </div>
                </Page>
            </AppProvider>
        );
    }
}
// rendering the class main component through the container as set in index.html
render(<Main />, document.getElementById('container'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
