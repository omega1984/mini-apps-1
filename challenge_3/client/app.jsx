class App extends React.Component{

  render() {
    return (
      <div>
        <NewItemForm />
        <Form2 />
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

class Form2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      states: "",
      zip: ""
    }
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
        placeholder="address line one"
        name="addressLine1"
        value={this.state.addressLine1}
        onChange={this.handleChange}
        />
        <div>
          <input
          type="text"
          placeholder="address line two"
          name="addressLine2"
          value={this.state.addressLine2}
          onChange={this.handleChange}
          />
        </div>
        <div>
          <input
          type="text"
          placeholder="city"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          />
          <input
          type="text"
          placeholder="states"
          name="states"
          value={this.state.states}
          onChange={this.handleChange}
          />
          <input
          type="text"
          placeholder="zip"
          name="zip"
          value={this.state.zip}
          onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

