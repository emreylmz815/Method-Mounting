import React, { Component } from 'react'

export default class Smiley extends Component {
    constructor(props){
        super(props);
        this.state={
            smileyİndex:0,
            smileyPrefix:"&#12851",
            smiley:""
        }
    }
    UNSAFE_componentWillMount(){
        console.log("<Smiley/> render edilecek")
    }
    componentDidMount(){
        console.log("<Smiley/> render edildi")
    }
    static getDerivedStateFromProps(props,state){
        console.log("porps: ",props)
        console.log("props: ",state)
        if(props.smileyİndex!==state.smileyİndex){
            return{
                ...state, 
                smiley:state.smileyPrefix+props.random,
                smileyIndex:props.random
            }
        }
    }

  render() {
     console.log("<Smiley/> render ediliyor")
     let smileyHTML=`<h1>${this.state.smiley}</h1>`;
    return (
        <div>
      <div dangerouslySetInnerHTML={{__html:smileyHTML}} style={{height:500,width:500}}/>
      </div>
    )
  }
}
