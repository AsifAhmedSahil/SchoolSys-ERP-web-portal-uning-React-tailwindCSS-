import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import Filter from "../../assets/filter.svg"
//   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Male",
        data: [30, 50, 100, 200, 300, 250, 100, 150, 200, 180],
      },
      {
        name: "Female",
        data: [20, 40, 150, 120, 200, 100, 100, 80, 300, 270],
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
        stacked: false, // set to true if you want them stacked
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#1E3A8A", "#FACC15"], // Blue for Male, Yellow for Female
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: { show: true },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        shared: true, // 🔥 this is the key!
        intersect: false,
        theme: "light", // white background
        style: {
          fontSize: "13px",
          fontFamily: "inherit",
        },
      },
      legend: {
        show: true,
        position: "top",
        labels: {
          colors: "#000", // Legend text color
          useSeriesColors: false,
        },
      },
    },
  };
  
   
  export const ClassChart = () => {
    return (
      <div className=" px-4 py-5 border-1 border-gray-300 rounded-lg mx-6 ">
        <div className="flex justify-between ">
            <div className="font-semibold text-[18px]">Student By Class</div>
            <div className="flex justify-center items-center gap-2 cursor-pointer"> <img className="w-3 h-3" src={Filter} alt="filter" /> <span className="text-[16px] text-[#565656]">Campus</span></div>
        </div>
        <Card>
       
       <CardBody className="px-2 pb-0">
         <Chart {...chartConfig} />
       </CardBody>
     </Card>
      </div>
    );
  }