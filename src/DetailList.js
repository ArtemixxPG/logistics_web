import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class DetailList extends Component {

    constructor(props) {
        super(props);
        this.state = {details: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/detail')
            .then(response => response.json())
            .then(data => this.setState({details: data}));
    }

    async remove(id) {
        await fetch(`/detail/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(() => {
            let updatedClients = [...this.state.details].filter(i => i.id !== id);
            this.setState({details: updatedClients});
        });
    }

    render() {
        const {details} = this.state;

        const detailsList = details.map(app => {
            return <tr key={app.id}>
                <td style={{whiteSpace: 'nowrap'}}>{app.name}</td>
                <td>{app.name}</td>
                <td>{app.number}</td>
                <td>{app.code}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/application/" + app.id}>Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(app.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/detail/new">Добавить деталь</Button>
                    </div>
                    <h3>Заявки</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Название</th>
                            <th width="20%">Номер</th>
                            <th width="20%">Код</th>
                        </tr>
                        </thead>
                        <tbody>
                        {detailsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default DetailList;