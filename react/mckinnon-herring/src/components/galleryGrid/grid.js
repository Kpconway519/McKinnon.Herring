import React, { Component } from 'react';
import GridSquare from "./gridSquare";


import image1 from '../../pictures/snakeHands.JPG'
import image2 from '../../pictures/autumnButterflies.jpg'
import image3 from '../../pictures/forestGod.jpg'
import image4 from '../../pictures/caughtMoth.jpg'
import image5 from '../../pictures/hummelStillLife.jpg'
import image6 from '../../pictures/lichen.jpg'
import image7 from '../../pictures/mothsMating.jpg'
import image8 from '../../pictures/nest.jpg'
import image9 from '../../pictures/snakeCabinet.jpg'
import image10 from '../../pictures/peekaboo.jpg'
import image11 from '../../pictures/redBone.jpg'





class GalleryGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: ''
        };

    }

    

    fadeImages = [
        {
            image: image1,
            title: 'Snake Hands',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image2,
            title: 'Autumn Butterflies',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image3,
            title: 'Forest God',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image4,
            title: 'Caught Moth',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image5,
            title: 'Hummel Still Life',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image6,
            title: 'Lichen',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image7,
            title: 'Moths Mating',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image8,
            title: 'Nest',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image9,
            title: 'Snake Cabinet',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image10,
            title: 'Peekaboo',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        },
        {
            image: image11,
            title: 'Red Bone',
            materials: 'Acrylic on Canvas',
            dimensions: '32 x 32',
            year: '2019'
        }
    ];

    makeGrid() {
        let allPics = []
         for (var i = 0; i < this.fadeImages.length; i++) {
             allPics.push(<GridSquare image={this.fadeImages[i].image} title={this.fadeImages[i].title} materials={this.fadeImages[i].materials} dimensions={this.fadeImages[i].dimensions} year={this.fadeImages[i].year} />)
        }
        return allPics
    }

    render() {
        return (
            <div>
                {this.makeGrid()}
            </div>
        )
    }
}

export default GalleryGrid