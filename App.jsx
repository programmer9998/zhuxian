const invisible = {
	     display: "none"
    	}
const visible = {
	     display: "block"
    	}	
const button1 = {
	     display: "block",
		 position:"absolute",
		 top:"100px",
		 left:"100px",
		 height:"200px"
    	}
const button2 = {
	     display: "block",
		 position:"absolute",
		 top:"100px",
		 left:"300px",
		 height:"40px",
		 width:"100px"
    	}
const button3 = {
	     display: "block",
		 position:"absolute",
		 top:"250px",
		 left:"300px",
		 height:"50px"
    	}

const button4 = {
	     display: "block",
		 position:"absolute",
		 top:"100px",
		 left:"500px",
		 height:"100px"
    	}
const button5 = {
	     display: "block",
		 position:"absolute",
		 top:"50px",
		 left:"700px",
		 height:"300px",
		 width:"20%"
    	}		
const button6 = {
	     display: "block",
		 position:"absolute",
		 top:"400px",
		 left:"200px",
		 height:"50px",
		 width:"20%"
    	}	
function eventIn() {
  document.getElementById("mask").style.zIndex = 1;
  document.getElementById("event").style.zIndex = 2;
  document.getElementById("event").style.display = 'block';
  document.getElementById("event").style.opacity = 0.99;
}

function eventOut() {
  document.getElementById("mask").style.zIndex = -2;
  var elem = document.getElementById("event");   
  var vis = 0.99;
  var id = setInterval(frame, 1);
  function frame() {
    if (Math.ceil(vis*100)==1) {
	  document.getElementById("event").style.zIndex = -2;
      clearInterval(id);

    } else {
      vis-= 0.01; 
      elem.style.opacity = vis; 
    }
  }
}

class Daoxuan extends React.Component {
   render() {   
      return (
         <div>
		   道玄真人：比武即将开始，诸位弟子须多加努力。
         </div>
      );
   }
}	
class Tianbuyi extends React.Component {
   render() {   
      return (
         <div>
		  田不易：七脉比武你也去吧，反正还空着一个名额，不用白不用。
         </div>
      );
   }
}	

class Suru extends React.Component {
   render() {   
      return (
         <div>	  苏茹：过了百日就是七脉比武了，小凡你要刻苦用功，不要辜负了你师父的期望。
         </div>
      );
   }
}	
class Tianlinger extends React.Component {
   render() {   
      return (
         <div>	  田灵儿：小凡别怕，师姐我会保护你的。
         </div>
      );
   }
}
class Dubishu extends React.Component {
   render() {   
      return (
         <div>	  杜必书：小凡……要不要打个赌？。
         </div>
      );
   }
}
class Songdaren extends React.Component {
   render() {   
      return (
         <div>	  宋大仁：练功切记要循序渐进，不可急躁。
         </div>
      );
   }
}	

class Tes extends React.Component {
   render() {   
      return (
         <div>	  {this.props.gift.state.zhuhpmax}
		 <Tes2 gift={this.props.gift} />
         </div>
      );
   }
}	

class Tes2 extends React.Component {
   render() {   
      return (
         <div>	  {this.props.gift.state.zhuatk}。
         </div>
      );
   }
}	

class Heijiezhu extends React.Component {
  constructor(props) {
        super(props);
		
		 this.state = {
		 zhuatk: 1,
		 zhudef: 0,
		 zhuhpmax: 500,
		 zhuhpcurrent: 500
      }

	    this.buttonAtk = this.buttonAtk.bind(this);
    }
  buttonAtk() {
    this.setState({ zhuhpcurrent: this.state.zhuhpcurrent-1 });
  }
   render() {
      return (
         <div>	  
		 <p id='test998'>heijiezhu：zhandou</p>
		 <p>heijiezhu hp：{this.state.zhuhpcurrent}</p>
		 <p>heijiezhu atk：{this.state.zhuatk}</p>
		 <p>heijiezhu def：{this.state.zhudef}</p>
		 <p>zhangxiaofan hp ：{this.props.gift.state.hpcurrent}</p>
		 <p>zhangxiaofan atk ：{this.props.gift.state.atk}</p>
		 <p>zhangxiaofan def ：{this.props.gift.state.def}</p>
		 <p>
		 <button onClick={this.buttonAtk}>Attack</button>
		 <button onClick={eventOut}>Escape</button></p>
		 <Tes gift={this}/>

         </div>
      );
   }
}	

class EventSelector extends React.Component {

   render() { 
      switch(this.props.gift.state.event){
        case 'Daoxuan':
          return (<div><Daoxuan gift={this.props.gift}/></div>);
		  break;
        case 'Tianbuyi':
          return (<div><Tianbuyi gift={this.props.gift}/></div>);
		  break;
		  case 'Suru':
          return (<div><Suru gift={this.props.gift}/></div>);
		  break;
		  case 'Tianlinger':
          return (<div><Tianlinger gift={this.props.gift}/></div>);
		  break;	
		  case 'Songdaren':
          return (<div><Songdaren gift={this.props.gift}/></div>);
		  break;	
		  case 'Dubishu':
          return (<div><Dubishu gift={this.props.gift}/></div>);
		  break;
		  case 'Heijiezhu':
          return (<div><Heijiezhu gift={this.props.gift}/></div>);
		  break;		  
        default:
		  return (<div>This is default</div>);
	  }

    }
}	



class Event extends React.Component {

   render() {   
      return (
         <div>
		   <EventSelector gift={this.props.gift}/>
		   Test information shown here:{this.props.gift.state.event}
		   <p><button onClick={eventOut}>exit animate</button></p>
         </div>
      );
   }
}	
class Test extends React.Component {
   render() {     
      return (
         <div>
		   Test information shown here:
		   {JSON.stringify(this.props.gift.state, null, 4)}
		   <button onClick={eventIn}>test animate</button>
         </div>
      );
   }
}	

class Map extends React.Component {
   render() {
      return (
         <div>
		    <p><button style={button1} 
			onClick={this.props.gift.to0}>主殿-守静堂</button>		
 			   <button style={button2} onClick={this.props.gift.to1}>用膳厅</button> 
		       <button style={button3} onClick={this.props.gift.to2}>厨房</button>
			   <button style={button4} onClick={this.props.gift.to3}>卧房-回廊小院</button>
		       <button style={button5} onClick={this.props.gift.to4}>后山</button></p>
		    <p><button style={button6} onClick={this.props.gift.to5}>比武大会</button>
			   </p>
         </div>
      );
   }
}

{/* This creates scenes that inherit their previous results
class Scene extends React.Component {
   render() {     
      return (
	    <div>
		<p style={this.props.gift.state.scene==0?visible:invisible} >scene =0 </p>
		<p style={this.props.gift.state.scene==1?visible:invisible} >scene =1 </p>
		<p style={this.props.gift.state.scene==2?visible:invisible} >scene =2 </p>
		</div>
      );
   }
}
*/}

{/* Scene0 is Hall 守静堂*/}
class Scene0 extends React.Component {
  constructor(props) {
        super(props);

	    this.buttonTianbuyi = this.buttonTianbuyi.bind(this);
	    this.buttonSuru = this.buttonSuru.bind(this);
	    this.buttonTianlinger = this.buttonTianlinger.bind(this);
    }
  buttonTianbuyi() {
    this.props.gift.setEvent('Tianbuyi');
	eventIn();
  }
    buttonSuru() {
    this.props.gift.setEvent('Suru');
	eventIn();
  }
    buttonTianlinger() {
    this.props.gift.setEvent('Tianlinger');
	eventIn();
  }
   render() {
     return(
	   <div>
	   <p><button onClick={this.buttonTianbuyi}>田不易</button>
	     <button onClick={this.buttonSuru}>苏茹</button>
	     <button onClick={this.buttonTianlinger}>田灵儿</button></p>   
	   </div>
	 );
	 }
}
{/* Scene1 is Hall 用膳厅*/}
class Scene1 extends React.Component {
  constructor(props) {
        super(props);

	    this.buttonSongdaren = this.buttonSongdaren.bind(this);
	    this.buttonDubishu = this.buttonDubishu.bind(this);
    }
  buttonSongdaren() {
    this.props.gift.setEvent('Songdaren');
	eventIn();
  }
    buttonDubishu() {
    this.props.gift.setEvent('Dubishu');
	eventIn();
  }
   render() {
     return(
	   <div>
	   <p><button onClick={this.buttonSongdaren}>宋大仁</button>
	     <button>吴大义</button>
	     <button>郑大礼</button>
	     <button>何大智</button>
	     <button>吕大信</button>
	     <button onClick={this.buttonDubishu}>杜必书</button></p>  
	   </div>
	 );
	 }
}
{/* Scene2 is Hall 厨房*/}
class Scene2 extends React.Component {
   render() {
     return(
	   <div> Now current scene is {this.props.gift.state.scene}
	   <p><button>做饭</button>
	     <button>烧火棍</button>
	     <button>大黄狗</button></p>	   
	   </div>
	 );
	 }
}
{/* Scene3 is Hall 卧房-回廊小院*/}
class Scene3 extends React.Component {
   render() {
     return(
	   <div> Now current scene is {this.props.gift.state.scene}
	   <p><button>修炼道家真法</button>
	     <button>修炼佛家真法</button></p>   
	   </div>
	 );
	 }
}
{/* Scene4 is Hall 后山*/}
class Scene4 extends React.Component {
  constructor(props) {
        super(props);

	    this.buttonHeijiezhu = this.buttonHeijiezhu.bind(this);
    }
  buttonHeijiezhu() {
    this.props.gift.setEvent('Heijiezhu');
	eventIn();
  }
   render() {
     return(
	   <div> Now current scene is {this.props.gift.state.scene}
	   <p><button onClick={this.buttonHeijiezhu}>黑节竹</button>
	     <button>野猴子</button>
	     <button>深谷</button></p>	   
	   </div>
	 );
	 }
}


{/* Scene5 is Hall 比武大会*/}
class Scene5 extends React.Component {
constructor(props) {
      super(props);
	this.func2 = this.func2.bind(this);
	this.func3 = this.func3.bind(this);
	this.buttonDaoxuan = this.buttonDaoxuan.bind(this);

   }
func2_1() {
alert(this.props.gift.state.day)
}
func2() {
document.getElementById('demo').style.color = "red";
document.getElementById('demo').style.backgroundColor = "blue";
document.getElementById("demo").style.zIndex = -2;
}
func3_1() {
alert('ada')
}
func3() {
this.props.gift.today()
}
   buttonDaoxuan() {
	  this.props.gift.setEvent('Daoxuan');
	  eventIn();
      this.func3();
      this.func2()
   }
   render() {
     return(
	   <div> Now current scene is {this.props.gift.state.scene}
	   <p><button onClick={this.buttonDaoxuan}>道玄真人</button></p>
	   <p id='demo'>demo here</p>
	   <Daoxuan />
	   </div>
	 );
	 }
}

class Scene extends React.Component {
   render() {
    switch(this.props.gift.state.scene){
    case 0:
			return(<Scene0 gift={this.props.gift}/>
			);
			break;
	case 1:
			return(<Scene1 gift={this.props.gift}/>
			);
			break;
	case 2:
			return(<Scene2 gift={this.props.gift}/>
			);
			break;
	case 3:
			return(<Scene3 gift={this.props.gift}/>
			);
			break;	
	case 4:
			return(<Scene4 gift={this.props.gift}/>
			);
			break;	
	case 5:
			return(<Scene5 gift={this.props.gift}/>
			);
			break;				
	default: 
	        return(<div> this is default</div>
			);
			}        
   }
}


{/* 
beginningScene/endingScene: 0 is hidden, 1 is shown;
scene: 0: 守静堂, 1:卧房-回廊小院, 2:用膳厅,3：厨房, 4:后山, 5：比武大会


*/}

class App extends React.Component {
constructor(props) {
      super(props);
 		
      this.state = {
	     beginningScene: 0, 
         endingScene: 0,
		 scene: 5,
		 event: 0,
		 day: 1,
		 hpmax:100,
		 hpcurrent:100,
		 mpmax:100,
		 mpcurrent:100,
		 atk:1,
		 def:0,
		 cook:10
		 

      }
	  this.to0 = this.to0.bind(this);
	  this.to1 = this.to1.bind(this);
	  this.to2 = this.to2.bind(this);
	  this.to3 = this.to3.bind(this);
	  this.to4 = this.to4.bind(this);
	  this.to5 = this.to5.bind(this);
	  this.today = this.today.bind(this);
	  this.setEvent = this.setEvent.bind(this);

   }
   
to0(){this.setState({ scene: 0 }); this.today()}
to1(){this.setState({ scene: 1 }); this.today()}
to2(){this.setState({ scene: 2 }); this.today()}
to3(){this.setState({ scene: 3 }); this.today()}
to4(){this.setState({ scene: 4 }); this.today()}
to5(){this.setState({ scene: 5 }); this.today()}
setEvent(a){this.setState({ event: a })}

today(){
this.setState({ day: this.state.day+1 })
this.setState({ hpmax: this.state.hpmax+1 })
if(this.state.day==5){
this.setState({ endingScene: 1 })
}
}

   render() {
      return (
         <div>
		    <p>this is the beginning of App.jsx</p>
		    <Test gift={this}/>
		    <Map gift={this}/>
			<div id='scene'><Scene gift={this}/></div>
			<div id='event'><Event gift={this}/></div>
		 </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
