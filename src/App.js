import React, { Component } from 'react'
import './components/stylesheet.css'
import Displayer from './components/Displayer'
import Title from './components/Title'
import Explainer from './components/Explainer'
import AddVideo from './components/AddVideo'
import EmotionAnlysis from './components/EmotionAnalysis'

class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                videoLink: ""
            }]
        }
    }

    addVideo(postSubmitted) {
        this.setState(state => ({
            posts: [postSubmitted]
        }))
    }

    render() {
        return (<div>
            <Title title={'Surprise Detector'} />
            <Explainer explainer={'Enter the link to a video, and press *Play*. Then press Start Game! to measure your level of surprise.'} />
            <AddVideo onAddVideo={(addedPost) => {
                this.addVideo(addedPost)
            }} />
            <div className="video-wrapper">
                <Displayer posts={this.state.posts} />
            </div>
            <h1><EmotionAnlysis /></h1>
        </div>
        )
    }
}

export default App;