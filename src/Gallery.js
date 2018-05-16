import React, { Component } from 'react';

class Gallery extends Component{



    render() {
        return(
            <div style={styles.gal}>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : 'http://identifyla.lsu.edu/peopleimages/noimage.jpg'}
                                     alt="book image"
                                     className="book-img"
                                >
                                </img>
                                <div className="book-txt">
                                {title}
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}
const styles = {
  gal: {
      marginTop: 30
  }
};

export default Gallery;