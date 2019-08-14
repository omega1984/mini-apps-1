class App extends React.Component{

  render() {
    return (
      <div>
        <ShoppingList />
      </div>
    )
  }
}

class ShoppingList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      items: []
    }
    this.createItem = this.createItem.bind(this);
  }

  createItem(newItem){
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    const list = this.state.items.map(item => {
      return <ShoppingListEntry key={item.id} id={item.id} name={item.name} />
    })
    return(
      <div>
        <NewItemForm createItem={this.createItem}/>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

class ShoppingListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: this.props.name
    }
  }



  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <button>X</button>
        <button>Edit</button>
      </div>
    )
  }
}

class NewItemForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createItem({...this.state});
    this.setState({
      name: ""
    })
  }



  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

