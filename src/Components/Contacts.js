import React from 'react'
import { Table } from 'react-bootstrap';
// const Contacts = ({contacts}) => {
//     return (
//         <div>
//             <center><h1>Contact List</h1></center>
//             <h1>LIST</h1>
//             {contacts.map((contact) => (
//                 <div class="card">
//                     <div class="card-body">
                        
//                         <h2 class=" card-title">{contact.userId}</h2>
//                         <h3 class="card-title">{contact.title}</h3>
//                         <p class="card-title">{contact.body}</p>
//                         {/* <h5 >{contact.username}</h5>
//                          <h5 >{contact.address.suite}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
//                         <p class="card-text">{contact.company.catchPhrase}</p> */}

//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// };

// export default Contacts;



class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      contacts: []
    }
  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            contacts: result
          });
          
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, contacts} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Comment List</h2>
          <Table>
            <thead>
              <tr>
                <th>UserId</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.userId}>
                  <td>{contact.userId}</td>
                  <td>{contact.id}</td>
                  <td>{contact.title}</td>
                  <td>{contact.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default Contacts;

