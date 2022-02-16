import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class DetailEdit extends Component {



    emptyItem = {
        name: '',
        number: '',
        code: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        if (this.props.match.params.id !== 'new') {
            const application = await (await fetch(`/detail/${this.props.match.params.id}`)).json();
            this.setState({item: application});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {

        event.preventDefault();
        const {item} = this.state;

        // + (item.id ? '/' + item.id : '')

        await fetch('/detail' , {
            method:   'POST'||'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/detail');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Изменить деталь' : 'Добавить деталь'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="address">Наименование</Label>
                        <Input type="text" name="address" id="address" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="address"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Код</Label>
                        <Input type="text" name="date" id="date" value={item.code || ''}
                               onChange={this.handleChange} autoComplete="date"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="number">Номер</Label>
                        <Input type="text" name="number" id="number" value={item.number || ''}
                               onChange={this.handleChange} autoComplete="number"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Сохранить</Button>{' '}
                        <Button color="secondary" tag={Link} to="/detail">Отменить</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default DetailEdit;