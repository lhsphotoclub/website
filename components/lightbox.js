import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import styles from '../styles/Lightbox.module.scss'
 
// Required: imageList, list of images + their description
//           className, class name of parent container

export default class PhotoBox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };

    this.images = props.imageList
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div className={styles.lightgrid}>
        {
            this.images.map((image, i) => (
            <div key={image.sys.id}
                    style={{
                        backgroundImage: `url(${image.fields.file.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}

                    onClick={() => {this.setState({
                        isOpen: true,
                        photoIndex: i
                    })}}
                ></div>
            ))
        }
        {isOpen && (
          <Lightbox
            mainSrc={this.images[photoIndex].fields.file.url}
            nextSrc={this.images[(photoIndex + 1) % this.images.length].fields.file.url}
            prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length].fields.file.url}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.images.length - 1) % this.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.images.length,
              })
            }
            discourageDownloads={true}
            imageCaption={this.images[photoIndex].fields.description}
          />
        )}
      </div>
    );
  }
}