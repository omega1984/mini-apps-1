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
  }

  render() {
    const list = this.state.items.map(item => {
      return <ShoppingListEntry
      key={item.id}
      id={item.id}
      name={item.name}
      email={item.email}
      password={item.password}
      deleteItem={this.deleteItem}
      />
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

  handleDelete(event){
    this.props.deleteItem(this.props.name)
  }

  render() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    )
  }
}

class NewItemForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: "",
      email: "",
      password: ""
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
    $.ajax('/', {
      type: "POST",
      data: this.state,
      statusCode:{
        200: (data) =>{
          console.log(data);
        },
        400: () => {
          alert("error")
        }
      }
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        placeholder="User Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <div>
          <input
          type="text"
          placeholder="User Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        </div>
        <div>
          <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

class form2 extends React.Component{


}

class form3 extends React.Component{


}

ReactDOM.render(<App />, document.getElementById('app'));

