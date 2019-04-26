import React ,{Component} from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h2>{this.props._Subject}</h2>
        {this.props._Desc}
      </header>
    );
  }
}
class TitleList extends Component{
  render(){
    var ObjList = this.props.Obj;
    var arrList =[];
    var i = 1;
    while(i < ObjList.length)
    {
      arrList.push(<li key={ObjList[i].id}><a herf="">{ObjList[i].title}</a></li>);
      i = i+1;
    }
    return(
      <nav>
        <ol>
          {arrList}
        </ol>
      </nav>
    );
  }
}

class _Artcle extends Component{
  render(){
    var _mode = this.props.Mode;
    var _data = this.props.Data;
    var i = 0;
    var subject = '';
    var artcle = '';
    while(i < _data.length)
    {
      if(_mode === _data.id)
      {
        subject = _data.title;
        artcle = _data.desc;
      }
      i=i+1;
    }
    return(
      <span>
      <h2>{subject}</h2>
      {artcle}
      </span>
    );
  }
}
class App extends Component {
state =  
  {
  mode:0,
  content:[
    {id:0,title:'WEB',desc:'WEB is ...'},
    {id:1,title:'html',desc:'html is ...'},
    {id:2,title:'css',desc:'html is ...'},
    {id:3,title:'JavaScript',desc:'JavaScript is ...'}  
    ],
    objInsert:function(_id,_title,_desc) {
      this.content.push(_id,_title,_desc);
      return true;
    }
  }

  render(){
    return (
      <div className="App">
      <Subject _Subject = {"WEB"} _Desc = {"Hello World!!"}></Subject>
      <TitleList Obj = {this.state.content}></TitleList>
      <_Artcle Mode = {this.state.mode} Data = {this.state.content}></_Artcle>
      </div>
    );
  }
}

export default App;
