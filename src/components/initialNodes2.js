export default function Nodes(parent){
    const initialNodes = [
        {
            id: "1",
            name: "test",
            parentNode : parent,
                    },
                                    {
                    id: "2",
                    name: "b",
                    parentNode: "1",
                                     },
                        {
                            id: "3",
                            name: "c",
                            parentNode: "2",
                        },{
                                id: "4",
                                parentNode: "3",
                                name: "test123",
                            },
                {
                    id: "5",
                    name: "b",
                    parentNode: "1",
                                    },
                        {
                            id: "6",
                            name: "c",
                            parentNode: "5",
                                                        },
                                {
                                    id: "7",
                                    parentNode: "6",
                                    name: "hello",
                                },
                {
                    id: "8",
                    name: "b",
                    parentNode: "1",
                                    },
                        {
                            id: "9",
                            name: "c",
                            parentNode: "8",
                                                    },
                                    {
                                    id: "10",
                                    parentNode: "9",
                                    name: "d",
                                },
                {
                    id: "11",
                    name: "f",
                    parentNode: "1",
                },
    ];
    console.log(initialNodes)
    return initialNodes;    
}