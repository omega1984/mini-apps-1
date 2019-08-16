class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      switch: 1
    }
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(){
    this.setState({
      switch: this.state.switch + 1
    })
    console.log(this.state.switch)
  }

  // handlePurchase(){
  //   alert("your order has been submited");
  // }

  render() {
    return (
      <div>
        {
          this.state.switch === 1 ? <NewItemForm changeForm={this.changeForm}/> : (this.state.switch === 2 ? <Form2 changeForm={this.changeForm}/> : <Form3 />)
        }
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
    $.ajax('/form1', {
      type: "POST",
      data: this.state,
      statusCode:{
        200: (data) =>{
          console.log(data);
          this.props.changeForm()
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
        <button>Next</button>
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
    $.ajax('/form2', {
      type: "POST",
      data: this.state,
      statusCode:{
        200: (data) =>{
          console.log(data);
          this.props.changeForm()
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
        <input
        type="text"
        placeholder="address line two"
        name="addressLine2"
        value={this.state.addressLine2}
        onChange={this.handleChange}
        />
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
        <button>Next</button>
      </form>
    )
  }
}

class Form3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: "",
      expiration: "",
      CVV: "",
      billZip: ""
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
    $.ajax('/form3', {
      type: "POST",
      data: this.state,
      statusCode:{
        200: (data) =>{
          console.log(data);
          alert('your order has been processed');
          window.location.href = '/';
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
        placeholder="Card Number"
        name="Card Number"
        value={this.state.number}
        onChange={this.handleChange}
        />
        <input
        type="text"
        placeholder="expiration"
        name="expiration"
        value={this.state.expiration}
        onChange={this.handleChange}
        />
        <div>
          <input
          type="text"
          placeholder="CVV"
          name="CVV"
          value={this.state.CVV}
          onChange={this.handleChange}
          />
          <input
          type="text"
          placeholder="Billing Zip"
          name="Billing Zip"
          value={this.state.billZip}
          onChange={this.handleChange}
          />
        </div>
        <button>Purchase</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));