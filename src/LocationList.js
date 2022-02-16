import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


class LocationList extends Component {

    constructor(props) {
        super(props);
        this.state = {locations: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/location')
            .then(response => response.json())
            .then(data => this.setState({locations: data}));

    }

    async remove(id) {
        await fetch(`localhost:8080/location/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(() => {
            let updatedLocations = [...this.state.locations].filter(i => i.id !== id);
            this.setState({locations: updatedLocations});
        });
    }

    render() {
        const {locations} = this.state;

        console.log(this.state)

        const locList = locations.map(loc => {
            return <tr key={loc.id}>
                <td style={{whiteSpace: 'nowrap'}}>{loc.code}</td>
                <td>{loc.name}</td>
                <td>{loc.latitude}</td>
                <td>{loc.longitude}</td>
                <td>{loc.country}</td>
                <td>{loc.region}</td>
                <td>{loc.city}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/location/" + loc.id}>Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(loc.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/application/new">Добавить адрес</Button>
                    </div>
                    <h3>Адрес</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Код</th>
                            <th width="20%">Наименование</th>
                            <th width="20%">Долгота</th>
                            <th width="20%">Широта</th>
                            <th width="20%">Страна</th>
                            <th width="20%">Регион</th>
                            <th width="20%">Город</th>
                        </tr>
                        </thead>
                        <tbody>
                        {locList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default LocationList;