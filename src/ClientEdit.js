// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// import AppNavbar from './AppNavbar';
//
// class ClientEdit extends Component {
//
//     emptyItem = {
//         date: '',
//         number: '',
//         reason: '',
//         dueDate: '',
//         address: ''
//     };
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: this.emptyItem
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     async componentDidMount() {
//         if (this.props.match.params.id !== 'new') {
//             const application = await (await fetch(`/application/${this.props.match.params.id}`)).json();
//             this.setState({item: application});
//         }
//     }
//
//     handleChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         let item = {...this.state.item};
//         item[name] = value;
//         this.setState({item});
//     }
//
// async handleSubmit(event) {
//     event.preventDefault();
//     const {item} = this.state;
//
//
//
//     await fetch('/application' , {
//         method:   'POST'||'PUT',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(item),
//     });
//     this.props.history.push('/application');
// }
//
//     render() {
//         const {item} = this.state;
//         const title = <h2>{item.id ? 'Изменить заявку' : 'Добавить заявку'}</h2>;
//
//         return <div>
//             <AppNavbar/>
//             <Container>
//                 {title}
//                 <Form onSubmit={this.handleSubmit}>
//                     <FormGroup>
//                         <Label for="address">Адрес</Label>
//                         <Input type="text" name="address" id="address" value={item.address || ''}
//                                onChange={this.handleChange} autoComplete="address"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="date">Дата</Label>
//                         <Input type="text" name="date" id="date" value={item.date || ''}
//                                onChange={this.handleChange} autoComplete="date"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="reason">Причина</Label>
//                         <Input type="text" name="reason" id="reason" value={item.reason || ''}
//                                onChange={this.handleChange} autoComplete="reason"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="number">Номер</Label>
//                         <Input type="text" name="number" id="number" value={item.number || ''}
//                                onChange={this.handleChange} autoComplete="number"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="dueDate">Дата окончания</Label>
//                         <Input type="text" name="dueDate" id="dueDate" value={item.dueDate || ''}
//                                onChange={this.handleChange} autoComplete="dueDate"/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Button color="primary" type="submit">Сохранить</Button>{' '}
//                         <Button color="secondary" tag={Link} to="/application">Отменить</Button>
//                     </FormGroup>
//                 </Form>
//             </Container>
//         </div>
//     }
// }
//
// export default withRouter(ClientEdit);