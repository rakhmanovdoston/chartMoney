
export const data ={
    labels:["January", "February", "March", "April", "May", "June", "July"],
    datasets:[
        {
            label:"2023-year",
            data:[80 ,120,60,30,190,120,200],
            fill:true,
            tension:0.4,
            backgroundColor:"cyan",
            borderColor:"white"
        },
        {
        label: "2024-year",
        data: [200,10,35,356,600,190 , 300],
        fill: true,
        tension: 0.4,
        backgroundColor: "teal",
        borderColor: "white",
        },
    ],
};

export const options = {
    responsive:true,
    plugins: {
        legend:{
            position:"left"
        },
        title: {
            display:true,
            text:"2023-2024-yillar 'Yanvardan-Iyulgacha' ishlatgan pullarim"
        }
    }
}