import pie from "../../../img/pie_chart.svg";
import bar from "../../../img/bar_chart.svg";

export const aboutChartBlockConfig = {
  blockTitle: "Графіки",
  blockDescription:
    "Обмін даними з країною чи місцем походження національними установами в Україні",
  infoBlocksInfo: {
    special: {
      title: "ОСОБЛИВОСТІ НА ОСНОВІ ЗАПИСУ",
      additionalInfo:
        'The number of plant records categorized by the basis of record. "Unknown" includes records without defined basis of record or with an unrecognised value for basis of record.',
    },
    monthly: {
      title: "Статистичні дані за місяць",
      additionalInfo:
        'The number of plant records categorized by the basis of record. "Unknown" includes records without defined basis of record or with an unrecognised value for basis of record.',
    },
  },
  listInfo: {
    special: {
      listTitle: "Дані графіку",
      rows: [
        {
          color: "#FFCF5C",
          percentage: "34%",
          description: "Human observation",
        },
        {
          color: "#7DDFC3",
          percentage: "28%",
          description: "Material sample",
        },
        {
          color: "#00C48C",
          percentage: "16%",
          description: "Preserved specimen",
        },
        {
          color: "#FFA26B",
          percentage: "14%",
          description: "Living specimen",
        },
        {
          color: "#CF4223",
          percentage: "8%",
          description: "Observation",
        },
      ],
      imgSrc: pie,
    },
    monthly: {
      listTitle: "Квітень",
      rows: [
        {
          color: "#FFCF5C",
          percentage: "34%",
          description: "Human observation",
        },
        {
          color: "#7DDFC3",
          percentage: "28%",
          description: "Material sample",
        },
        {
          color: "#00C48C",
          percentage: "16%",
          description: "Preserved specimen",
        },
      ],
      imgSrc: bar,
    },
  },
  blockInfo: {
    title: "Обмін даними з країною походження",
    description:
      "Ця діаграма показує кількість записів про біорізноманіття, що відбуваються в Україні, з окремими кольорами для записів, опублікованих зсередини України, та тими, які поділяються видавцями з інших країн.",
  },
};
