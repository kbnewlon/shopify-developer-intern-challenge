import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, TopBar, FooterHelp, Link } from '@shopify/polaris';
import './index.css';

class Main extends Component {
    //set gallery state
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        //pull images tagged as ShopifyInternshipChallenge
        axios.get('http://res.cloudinary.com/kaylanewlon/image/list/ShopifyInternshipChallenge.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({ gallery: res.data.resources });
            });
    }
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
            <AppProvider i18n={enTranslations}>
                <TopBar className="nav" />
                <Page title="Shopify Internship Challenge">
                    <div className="main">
                        <h1>Also Made with Polaris</h1>
                        <div className="upload">
                            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                                Add Image
                            </button>
                        </div>
                        <div className="gallery">
                            <CloudinaryContext cloudName="kaylanewlon">
                                {
                                    this.state.gallery.map(data => {
                                        return (
                                            // <div className="responsive" key={data.public_id}>
                                                <div className="images" key={data.public_id}>
                                                    <a target="_blank" rel="noreferrer" href={`https://res.cloudinary.com/kaylanewlon/image/upload/ShopifyInternshipChallenge/${data.public_id}.jpg`}>
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

render(<Main />, document.getElementById('container'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
