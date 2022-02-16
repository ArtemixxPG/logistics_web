import React, {useState, useEffect} from 'react';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import {useRemoveElementWithId} from "./customHooks/deleteHook.ts";
import {Diagram} from "./components/AppDiagram.tsx";
import "./css/gfa.css"




function GFA(){
    const [headers, setHeaders] = useState([])
    const [barDataset, setBarDataset] = useState({labels : [], dataset:[]})
    const [datasets, setDatasets] = useState([])
    const [ne, setNE] = useState({
        totalRevenue: [],
        totalProductionCost:[],
        totalClosingCost:[],
        totalCO2Emission:[],
        totalInitialCost:[],
        totalOtherCost:[],
        totalSupplyCost:[],
        totalCarryingCost:[],
        totalTariffs:[],
        totalCustomerTariffs:[],
        totalInboundCost:[],
        totalOutboundCost:[],
        totalTransportationCost:[],
        totalPenalties:[]
    })
    const [ne2, setNE2] = useState([])
    const [locations, setLocations] = useState([])
    const [id, setId] = useState(0)
    const [updatedList] = useRemoveElementWithId('ne', ne, id)
    const [siteStates, setSiteStates] = useState([])



    useEffect( () => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/ne/diagram');
                const result = await response.json();


                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if(!cleanupFunction){ setNE(result);

                }


            } catch (e) {
                console.error(e.message)
            }
        };


        fetchData();
        // функция очистки useEffect
        return () => cleanupFunction = true;
    }, []
    )

    useEffect( () => {
            let cleanupFunction = false;
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:8080/ss');
                    const result = await response.json();


                    // непосредственное обновление состояния при условии, что компонент не размонтирован
                    if(!cleanupFunction){ setSiteStates(result);

                    }


                } catch (e) {
                    console.error(e.message)
                }
            };


            fetchData();
            // функция очистки useEffect
            return () => cleanupFunction = true;
        }, []
    )




    // useEffect(()=>{
    //     let cleanupFunction = false;
    //     const getDataset = () => {
    //         let dataset = [];
    //         for(let i = 0; i < ne.length; i++){
    //             dataset.push({
    //                     data: [ne[i].value],
    //                     label: ne.expression_name,
    //                     borderColor: "#ff3333",
    //                     backgroundColor: "rgba(255, 0, 0, 0.5)",
    //                     fill: true
    //                 }
    //             )
    //         }
    //         if(!cleanupFunction){ setDatasets( datasets => dataset);
    //             let newBarDataSet = {labels: ["1"], dataset: datasets}
    //             setBarDataset(barDataset =>  newBarDataSet)
    //         }
    //     }
    //     getDataset()
    //     return () => cleanupFunction = true;
    // }, [])

    // const dataS = ne.filter(data => data.label = "Total Revenue")


    const locHeader = {
        headers:  ["Итерация",
            "Период",
            "Сайт",
            "Начальное состание",
            "Новое состание",
            "Начальная цена",
            "Конечная цена"
        ]
    }

    const ssList = siteStates.map(ss => {
            return <tr key={ss.id}>
                <td style={{whiteSpace: 'nowrap'}}>{ss.iteration}</td>
                <td>{ss.timePeriod}</td>
                <td>{ss.site}</td>
                <td>{ss.initial_state}</td>
                <td>{ss.new_state}</td>
                <td>{ss.initial_cost}</td>
                <td>{ss.closing_cost}</td>
                {/*<td>*/}
                {/*    <ButtonGroup>*/}
                {/*        <Button size="sm" color="primary" tag={Link} to={"/location/" + ne_.id}>Изменить</Button>*/}
                {/*        <Button size="sm" color="danger" onClick={()=>{setId(ne_.id); setNE(updatedList)}}>Удалить</Button>*/}
                {/*    </ButtonGroup>*/}
                {/*</td>*/}
            </tr>
        });

        return (
            <div className="body">
                <AppNavbar title="GFA"/>
                <div></div>
                <Container fluid>
                    <div>
                        <h3 className="header-part">Named Expression</h3>
                    <div >
                        <h2 className="header-diagram">Total Revenue</h2>
                        <h2 className="header-diagram">Total Production Cost</h2>
                    </div>

                    <div className="diagram" >
                        <div className="border">
                    <Diagram  barCharData={ne.totalRevenue}/>
                        </div>
                    </div>

                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalProductionCost} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Closing Cost</h2>
                        <h2 className="header-diagram">Total CO2 Emission</h2>
                    </div>

                        <div className="diagram">
                            <div className="border">
                        <Diagram barCharData={ne.totalClosingCost}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalCO2Emission} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Initial Cost</h2>
                        <h2 className="header-diagram">Total Other Cost</h2>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram barCharData={ne.totalInitialCost}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalOtherCost} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Supply Cost</h2>
                        <h2 className="header-diagram">Total Carrying Cost</h2>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram barCharData={ne.totalSupplyCost}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalCarryingCost} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Tariffs</h2>
                        <h2 className="header-diagram">Total Customer Tariffs</h2>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalTariffs}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalCustomerTariffs} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Inbound Cost</h2>
                        <h2 className="header-diagram">Total Outbound Cost</h2>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram barCharData={ne.totalInboundCost}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram  barCharData={ne.totalOutboundCost} />
                        </div>
                    </div>
                    <div >
                        <h2 className="header-diagram">Total Transportation Cost</h2>
                        <h2 className="header-diagram">Total Penalties</h2>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram barCharData={ne.totalTransportationCost}/>
                        </div>
                    </div>
                    <div className="diagram" >
                        <div className="border">
                        <Diagram barCharData={ne.totalPenalties} />
                        </div>
                    </div>


                    </div>

                    <Table className="mt-4">
                        <thead>
                        <tr>
                            {locHeader.headers.
                            map((item, index) => <th width="10%"key={index}>{item}</th> ) }
                        </tr>
                        </thead>
                        <tbody>
                        {ssList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );

}

export default GFA;