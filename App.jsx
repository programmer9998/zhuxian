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
 constructor(props) {
        super(props);
		
		 this.state = {
		 hpmaxgoal: 1500,
		 atkmaxgoal: 1500
      }

	    this.buttonUse = this.buttonUse.bind(this);
	    this.buttonLeave = this.buttonLeave.bind(this);
    }
  buttonUse() {
    if(this.props.gift.state.day<100){
	document.getElementById('info').innerHTML='道玄真人：比武即将开始，诸位弟子须多加努力。';
}
	else if(this.props.gift.state.hpmax<this.state.hpmaxgoal || this.props.gift.state.atk<this.state.atkgoal){
	document.getElementById('info').innerHTML='道玄真人：现在宣布结果——七脉比武大会最终胜利者是齐昊。';
}
    else{
		document.getElementById('info').innerHTML='道玄真人：现在宣布结果——七脉比武大会最终胜利者是张小凡。';
}
  }
  buttonLeave() {
	eventOut();
	if(this.props.gift.state.day>100)
	document.getElementById('mask').style.zIndex=10;
  }
   render() {
      return (
         <div>	  
		 <p>这里是七脉比武大会会场。各位弟子请在100天以后来参加。届时会根据各位的攻击力和体力排出名次。</p>
		 <p><button onClick={this.buttonUse}>查看结果</button>
		 <button onClick={this.buttonLeave}>离开</button></p>
		 <p id='info'></p>
         </div>
      );
   }
}	
class Tianbuyi extends React.Component {
   render() {   
      return (
         <div>
		  田不易：七脉比武你也去吧，反正还空着一个名额，不用白不用。
		  <p><button onClick={eventOut}>离开</button></p>
         </div>
      );
   }
}	

class Suru extends React.Component {
   render() {   
      return (
         <div>	  苏茹：过了百日就是七脉比武了，小凡你要刻苦用功，不要辜负了你师父的期望。
		 <br />
		 刚才给你吃的是你师父辛辛苦苦炼制的灵药。<br />
		 小凡：谢谢师娘。（张小凡完全恢复体力：hp={this.props.gift.state.hpcurrent}）
		 <p><button onClick={eventOut}>离开</button></p>
         </div>
      );
   }
}	
class Tianlinger extends React.Component {
   render() {   
      return (
         <div>	  田灵儿：小凡别怕，师姐我会保护你的。
		 <p><button onClick={eventOut}>离开</button></p>
         </div>
      );
   }
}
class Dubishu extends React.Component {
   render() {   
      return (
         <div>	  杜必书：小凡……要不要打个赌？。
		 <p><button onClick={eventOut}>离开</button></p>
         </div>
      );
   }
}
class Songdaren extends React.Component {
   render() {   
      return (
         <div>	  宋大仁：练功切记要循序渐进，不可急躁。
		 <p><button onClick={eventOut}>离开</button></p>

         </div>
      );
   }
}	
class Eat extends React.Component {
   render() {   
      return (
         <div>	  张小凡：我吃饱了（mp={this.props.gift.state.mpcurrent}）。
		 <p><button onClick={eventOut}>离开</button></p>
         </div>
      );
   }
}	
class Cook extends React.Component {
   render() {
   var a=0;
   if(this.props.gift.state.mpcurrent>=10)
     a=1;
   else
     a=2;
   switch(a){
   	case 1:
		return (
         <div>	  张小凡做出了一顿香喷喷的饭菜，厨艺大增{/*（a={a}）*/}。
		 		 <p><button onClick={eventOut}>离开</button></p>
		 </div>
        );
			break;
   	case 2:
		return (
         <div>	  肚子饿了，快去吃点东西吧。{/*（a={a}）*/}
		 		 <p><button onClick={eventOut}>离开</button></p>
		 </div>
        );
			break;

	default:
			return(
			<div>This is default from Cook class
					 <p><button onClick={eventOut}>离开</button></p>
            </div>
		 );
}


      
   }
}	


class Heijiezhu extends React.Component {
  constructor(props) {
        super(props);
		
		 this.state = {
		 zhuatk: 1,
		 zhuhpmax: 500,
		 zhuhpcurrent: 500
      }

	    this.buttonAtk = this.buttonAtk.bind(this);
	    this.buttonEscape = this.buttonEscape.bind(this);
    }
  buttonAtk() {
    if(this.state.zhuhpcurrent<0){
	  this.props.gift.changeAtk(10);
	  this.props.gift.changeHpmax(10);
	  this.state.zhuhpcurrent=this.state.zhuhpmax;
	  document.getElementById('battleinfo').innerHTML='砍倒了一根黑节竹，张小凡觉得浑身充满了力量。还有更多的竹子。';  
	}
	else if(this.props.gift.state.mpcurrent>0){
    this.setState({ zhuhpcurrent: this.state.zhuhpcurrent-this.props.gift.state.atk});
	this.props.gift.changeMp(-10);
	this.props.gift.changeHp(-this.state.zhuatk);}
	else{
	document.getElementById('battleinfo').innerHTML='你的体力不够了，去吃点东西吧。';
	}
  }
  buttonEscape() {
    this.setState({ zhuhpcurrent: this.state.zhuhpmax});
	eventOut();
  }
   render() {
      return (
         <div>	  
		 <p>heijiezhu hp：{this.state.zhuhpcurrent}</p>
		 <p>heijiezhu atk：{this.state.zhuatk}</p>
		 <p>zhangxiaofan hp ：{this.props.gift.state.hpcurrent}</p>
		 <p>zhangxiaofan atk ：{this.props.gift.state.atk}</p>
		 <p>zhangxiaofan mp ：{this.props.gift.state.mpcurrent}</p>
		 <p>
		 <button onClick={this.buttonAtk}>Attack</button>
		 <button onClick={this.buttonEscape}>Escape</button></p>
		 <p id='battleinfo'></p>

         </div>
      );
   }
}	

class Wand extends React.Component {
  constructor(props) {
        super(props);
		
		 this.state = {
		 activated: 0,
		 atkplus: 500
      }

	    this.buttonUse = this.buttonUse.bind(this);
	    this.buttonLeave = this.buttonLeave.bind(this);
    }
  buttonUse() {
    if(this.props.gift.state.atk>100 && this.state.activated==0){
    this.setState({ activated: 1});
	this.props.gift.changeAtk(this.state.atkplus);
	document.getElementById('info').innerHTML='烧火棒凌空飞到张小凡手里。张小凡学会了“御物”，攻击力大幅提升！';
}
	else{
	document.getElementById('info').innerHTML='这根黑棒用来烧火正合适。';
	}
  }
  buttonLeave() {
	eventOut();
  }
   render() {
      return (
         <div>	  
		 <p>这是一根黑乎乎的烧火棒。</p>
		 <p><button onClick={this.buttonUse}>使用隔空御物</button>
		 <button onClick={this.buttonLeave}>忙别的事</button></p>
		 <p id='info'></p>
         </div>
      );
   }
}	

class Dog extends React.Component {
  constructor(props) {
        super(props);
		
		 this.state = {
		 activated: 0,
		 hpplus: 1000
      }

	    this.buttonUse = this.buttonUse.bind(this);
	    this.buttonLeave = this.buttonLeave.bind(this);
    }
  buttonUse() {
    if(this.props.gift.state.cook>100 && this.state.activated==0){
    this.setState({ activated: 1});
	this.props.gift.changeHpmax(this.state.hpplus);
	document.getElementById('info').innerHTML='大黄吃了张小凡的肉骨头，笑的满脸都是牙。从此，大黄成了张小凡的得力助手，张小凡体力大幅提升';
}
	else{
	document.getElementById('info').innerHTML='大黄瞅了一眼张小凡，无精打采地打了个呵欠。';
	}
  }
  buttonLeave() {
	eventOut();
  }
   render() {
      return (
         <div>	  
		 <p>一只半人多高的黄狗在灶台边打盹。</p>
		 <p><button onClick={this.buttonUse}>丢一块肉骨头讨好它</button>
		 <button onClick={this.buttonLeave}>忙别的事</button></p>
		 <p id='info'></p>
         </div>
      );
   }
}	

class Monkey extends React.Component {
  constructor(props) {
        super(props);
		
        this.buttonUse = this.buttonUse.bind(this);
	    this.buttonLeave = this.buttonLeave.bind(this);
    }
  buttonUse() {
	this.props.gift.changeHp(-this.props.gift.state.hpcurrent);
	this.props.gift.changeMp(-this.props.gift.state.mpcurrent);
	document.getElementById('info').innerHTML='野猴子拿松果打中张小凡的脑袋，乐的吱吱乱叫。';
}
  buttonLeave() {
	eventOut();
  }
   render() {
      return (
         <div>	  
		 <p>张小凡看到一只很有灵性的野猴子在树梢上玩耍。</p>
		 <p><button onClick={this.buttonUse}>吸引它的注意</button>
		 <button onClick={this.buttonLeave}>逃走</button></p>
		 <p id='info'></p>
         </div>
      );
   }
}	


class Bed extends React.Component {
  constructor(props) {
        super(props);

	    this.buttonUse = this.buttonUse.bind(this);
	    this.buttonLeave = this.buttonLeave.bind(this);
    }
  buttonUse() {
    this.props.gift.changeMp(this.props.gift.state.mpmax);
    this.props.gift.today();
    document.getElementById('info').innerHTML='张小凡睡了一觉，精力得到回复。';

	}
  buttonLeave() {
	eventOut();
  }
   render() {
      return (
         <div>	  
		 <p>这里是张小凡的卧室。</p>
		 <p><button onClick={this.buttonUse}>睡觉</button>
		 <button onClick={this.buttonLeave}>出去逛逛</button></p>
		 <p id='info'></p>
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
		  case 'Eat':
          return (<div><Eat gift={this.props.gift}/></div>);
		  break;
		  case 'Cook':
          return (<div><Cook gift={this.props.gift}/></div>);
		  break;
		  case 'Wand':
          return (<div><Wand gift={this.props.gift}/></div>);
		  break;
		  case 'Dog':
          return (<div><Dog gift={this.props.gift}/></div>);
		  break;
		  case 'Bed':
          return (<div><Bed gift={this.props.gift}/></div>);
		  break;
		  case 'Monkey':
          return (<div><Monkey gift={this.props.gift}/></div>);
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
{/*		   Test information shown here:{this.props.gift.state.event}
		   <p><button onClick={eventOut}>exit animate</button></p> */}
         </div>
      );
   }
}	
class Test extends React.Component {
   render() {     
      return (
         <div>
		   作为主角，张小凡获得了天赋技能‘天眼’，让他可以看到来自上天的讯息:<br />
		   {JSON.stringify(this.props.gift.state, null, 4)}
		{/*   <button onClick={eventIn}>test animate</button>  */}
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
	this.props.gift.changeHp(this.props.gift.state.hpmax);
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
		this.buttonEat = this.buttonEat.bind(this);
    }
  buttonSongdaren() {
    this.props.gift.setEvent('Songdaren');
	eventIn();
  }
    buttonDubishu() {
    this.props.gift.setEvent('Dubishu');
	eventIn();
  }
     buttonEat() {
	 this.props.gift.changeMp(this.props.gift.state.mpmax);
     this.props.gift.setEvent('Eat');
	 eventIn();
  }
   render() {
     return(
	   <div>
	   <p><button onClick={this.buttonSongdaren}>宋大仁</button>
	     <button onClick={this.buttonDubishu}>杜必书</button>
		 <button  onClick={this.buttonEat}>一起吃饭</button></p>  
	   </div>
	 );
	 }
}
{/* Scene2 is Hall 厨房*/}
class Scene2 extends React.Component {
 constructor(props) {
        super(props);
	    this.buttonCook = this.buttonCook.bind(this);
	    this.buttonWand = this.buttonWand.bind(this);
	    this.buttonDog = this.buttonDog.bind(this);
    }
  buttonCook() {
  this.props.gift.setEvent('Cook');
    eventIn();
  if(this.props.gift.state.mpcurrent<10)
  ;
  else {
    this.props.gift.changeMp(-10);
    this.props.gift.changeCook(1);
	}
  }
  buttonWand() {
  this.props.gift.setEvent('Wand');
    eventIn();
  }
  buttonDog() {
  this.props.gift.setEvent('Dog');
    eventIn();
  }
  
   render() {
     return(
	   <div>
	   <p><button onClick={this.buttonCook}>做饭</button>
	     <button onClick={this.buttonWand}>烧火棍</button>
	     <button onClick={this.buttonDog}>大黄狗</button></p>	   
	   </div>
	 );
	 }
}
{/* Scene3 is Hall 卧房-回廊小院*/}
class Scene3 extends React.Component {
constructor(props) {
        super(props);
	    this.buttonBed = this.buttonBed.bind(this);
    }
  buttonBed() {
  this.props.gift.setEvent('Bed');
    eventIn();
  }
  
   render() {
     return(
	   <div>
	   <p><button  onClick={this.buttonBed}>睡觉</button></p>   
	   </div>
	 );
	 }
}
{/* Scene4 is Hall 后山*/}
class Scene4 extends React.Component {
  constructor(props) {
        super(props);

	    this.buttonHeijiezhu = this.buttonHeijiezhu.bind(this);
	    this.buttonMonkey = this.buttonMonkey.bind(this);
    }
  buttonHeijiezhu() {
    this.props.gift.setEvent('Heijiezhu');
	eventIn();
  }
  buttonMonkey() {
    this.props.gift.setEvent('Monkey');
	eventIn();
  }
   render() {
     return(
	   <div>
	   <p><button onClick={this.buttonHeijiezhu}>黑节竹</button>
	     <button onClick={this.buttonMonkey}>野猴子</button></p>	   
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
	  eventIn()
   }
   render() {
     return(
	   <p><button onClick={this.buttonDaoxuan}>道玄真人</button></p>
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
		 scene: 0,
		 event: 0,
		 day: 1,
		 hpmax:100,
		 hpcurrent:100,
		 mpmax:100,
		 mpcurrent:100,
		 atk:1,
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
	  this.changeHp = this.changeHp.bind(this);
	  this.changeHpmax = this.changeHpmax.bind(this);
	  this.changeMp = this.changeMp.bind(this);
	  this.changeMpmax = this.changeMpmax.bind(this);
	  this.changeAtk = this.changeAtk.bind(this);

   }
   
to0(){this.setState({ scene: 0 }); this.today()}
to1(){this.setState({ scene: 1 }); this.today()}
to2(){this.setState({ scene: 2 }); this.today()}
to3(){this.setState({ scene: 3 }); this.today()}
to4(){this.setState({ scene: 4 }); this.today()}
to5(){this.setState({ scene: 5 }); this.today()}
setEvent(a){this.setState({ event: a })}
changeHpmax(a){this.setState({ hpmax: this.state.hpmax+a })}
changeAtk(a){this.setState({ atk: this.state.atk+a })}
changeMpmax(a){this.setState({ mpmax: this.state.mpmax+a })}
changeCook(a){this.setState({ cook: this.state.cook+a })}
changeHp(a){
if (this.state.hpcurrent+a>this.state.hpmax)
this.setState({ hpcurrent: this.state.hpmax});
else if(this.state.hpcurrent+a<0)
this.setState({ hpcurrent: 0 });
else
this.setState({ hpcurrent: this.state.hpcurrent+a });
}

changeMp(a){
if (this.state.mpcurrent+a>this.state.mpmax)
this.setState({ mpcurrent: this.state.mpmax});
else if(this.state.mpcurrent+a<0)
this.setState({ mpcurrent: 0 });
else
this.setState({ mpcurrent: this.state.mpcurrent+a });
}

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
{/* 		    <div id='test'>Beginning of jsx:<Test gift={this}/></div> */}
		    <Test gift={this}/>
		    <Map gift={this}/>
			<div id='scene'><Scene gift={this}/></div>
			<div id='event'><Event gift={this}/></div>
		 </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
