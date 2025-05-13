export const bio = [
    "Analytically driven and results-oriented professional with hands-on experience in data analytics, " +
"machine learning, and business intelligence. Demonstrated expertise in applying statistical " +
"techniques, predictive modeling, and deep learning to solve complex, real-world problems across " +
"domains including retail, air traffic management, and financial valuation. " +
"Proficient in Python, SQL, data visualization, and machine learning tools, with a strong foundation in " +
"translating business problems into data-driven solutions. Passionate about leveraging data to" +
"optimize operations, enhance strategic planning, and unlock business value in analytics-driven roles.",
];
  
export const skills = [
  "<strong>Programming</strong>, Python, SQL, VBA, DAX",
  "<strong>Data Analytics</strong>, Power BI, MS-Excel, NumPy, Pandas, Matplotlib, Seaborn",
  "<strong>AI-ML</strong>, Regression, Classifiaction, Clustering, Reinforcement Learning, Pytorch, Scikit-Learn, HuggingFace, Gen-AI, LLMs", 
];

export const projects = [
  {
      link: "https://github.com/brianpinto91/private-library-assistant",
      title: " Private Book QA Agent (RAG-based LLM)",
      content: "This project builds an AI-powered question-answering system that enables users to query a large collection of private documents and books and receive contextually relevant answers." +
              " It Uses Retrieval-Augmented Generation (RAG) to fetch releavant content from stored documents before generating a response.",
      tags: ["Python", "GEN-AI", "LLM", "RAG"],
  },
  {
      link: "https://github.com/brianpinto91/customer-segmentation-uk-retail",
      title: "Retail Customer Clustering for Data-Driven Marketing Strategies",
      content: "Utilized retail sales data from the UC Irvine Machine Learning Repository to perform customer segmentation " +
        "aimed at enhancing targeted marketing and boosting sales. The project involved data cleaning, feature engineering " +
        "(order value, frequency, and recency), and outlier analysis. Applied K-means clustering to segment customers into " +
        "actionable groups: Re-engage, Retain, Nurture, and Reward. These insights support personalized marketing strategies " +
        "to optimize customer engagement and lifetime value.",
      tags: ["Python", "Clustering", "Data Analyis", "K-means"],
  },
  {
      link: "https://www.mdpi.com/2226-4310/8/2/28",
      title: "A Deep CNN to Predict Number of Delayed Flights and ATFM Delay",
      content: "This project addresses the complexity of predicting total network delays in the European Air Traffic " +
        "Management Network (EATMN), where stochastic events and operational flexibility lead to frequent " +
        "demand-capacity imbalances. Traditional analytical and optimization methods fall short in capturing " +
        "the full network dynamics. To overcome this, I developed a Deep Convolutional Neural Network " +
        "(DCNN) model that takes capacity regulation data as input to forecast total network delay." +
        "Trained on 2016–2017 data, the DCNN achieved a 50% improvement in prediction accuracy over a " +
        "Random Forest baseline, with mean absolute percentage errors of 22% for total delay and 14% for " +
        "delayed traffic when tested on 2018 data. This work contributes to enhancing network resiliency by " +
        "enabling more accurate and timely situational awareness.",
      tags: ["Deep learning", "CNN", "Pytorch"],
  },
  {
      link: "https://github.com/brianpinto91/equity-research-eicher-motors",
      title: "Equity Valuation Through Fundamental Analysis",
      content: "Conducted a comprehensive quantitative and qualitative analysis of a publicly listed company to " +
        "assess its intrinsic value and investment potential. The process involved forecasting future sales " +
        "growth, key operational metrics, and estimating future cash flows. These projections were then used " +
        "in a discounted cash flow (DCF) model to determine the company’s intrinsic value. The study aimed " +
        "to support investment decisions based on fundamental financial indicators rather than market speculation.",
      tags: ["Financial Modelling", "Discounted Cash Flow", "MS-Excel"],
  },
]

export const experience = [
  {
    title: "Self Employed, Bangalore, India",
    duration: "June 2021 - Present",
    subtitle: "Equity Research Analyst | Day trader | Business Opportunities Explorer",
    details: [
      "Currently working on machine learning predictive models for time series forecasting of market index.",
      "Conduct quantitative research to identify high-value investment opportunities.",
      "Perform technical and fundamental analysis to develop trade strategies.",
      "Researched on modern agriculture techniques as a potential business opportunity.",
    ],
    tags: ["Python", "AI-ML", "MS-Excel", "MS-Power-BI", "Research", "Financial Modelling"],
    icon: "circle",
  },
  {
    title: "Deutsches Zentrum für Luft- und Raumfahrt (DLR), Hamburg, Germany",
    duration: "June 2019 - Feb 2020",
    subtitle: "Master Thesis Student - Machine Learning Research/Application",
    details: [
      "Spearheaded the implementation of micro-frontends using Module Federation, enabling modular and scalable architecture.",
      "Earned the Biofourmis Bravo Award for upgrading the application to support flexible operations across multiple geographies.",
      "Enhanced performance and user experience by integrating Twilio-Video, Countly, and NGXS WebSocket for real-time data management.",
    ],
    tags: [
      "Python",
      "Scikit-Learn",
      "Pytorch",
      "Deep Learning",
      "Regression",
    ],
    icon: "circle",
  },
  {
    title: "Airbus Operations GMbH, Hamburg, Germany",
    duration: "October 2017 - September 2019",
    subtitle: "Data Analyst - Working Student (Part-time)",
    details: [
      "Developed and implemented automated KPI reporting tools using Microsoft Visual Basics for Applications (VBA).",
      "Streamlined data collection by designing a Microsoft Access Database to collect and analyze " +
      "data on engineering modifications, which was key to develop KPIs and improve the quality of engineering workflow",
    ],
    tags: ["MS-Excel", "VBA", "MS-Access", "SQL"],
    icon: "circle",
  },
  {
    title: "ABB India Ltd",
    duration: "January 2015 - September 2016",
    subtitle: "Product Marketing Specialist",
    details: [
      "Managed a product portfolio of Rs. 10Cr and was responsible for market/competition analysis and sales growth.",
      "Streamlined the product offerings with respect to customers and segments by identifying the " + 
      "key value propositions and delivering it through product up-gradation. Achieved a sales growth " +
      "of approximately 22% YoY.",
      "Delivered product training and technical support to the front end sales team across all regions in India",
    ],
    tags: ["Customer Value Proposition", "Competitor Analysis", "Pricing", "Marketing"],
    icon: "circle",
  },
  {
      title: "ABB India Ltd",
      duration: "August 2013 - December 2014",
      subtitle: "Management Trainee and Quality Engineer",
      details: [
        "Responsible for managing and leading a team of quality inspectors to ensure process and " +
        "product conformity, and promote continuous improvement .",
        "Analyzed the process data and implemented robust quality plans which resulted in better and " +
        "efficient monitoring and control of operations, and thereby achieving higher production output " +
        "and lower process rejections. ",
      ],
      tags: ["Control Charts", "PFMEA", "5-Why analysis", "Fish-bone analysis"],
      icon: "circle",
    },
];

export const education = [
  {
    title: "M.Sc. Mechatronics",
    duration: "October 2016 - February 2020",
    subtitle: "Technische Universität Hamburg (TUHH), Germany",
    details: [],
    tags: [],
    icon: "graduation-cap",
  },
  {
      title: "B.E. Mechanical",
      duration: "August 2009 - July 2013",
      subtitle: "National Institute of Engineering (NIE), Mysore, India",
      details: [],
      tags: [],
      icon: "graduation-cap",
    },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/brianpinto91",
      },
      {
        text: "Twitter",
        link: "https://x.com/brianpinto91",
      },
      {
        text: "Github",
        link: "https://github.com/brianpinto91",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["&copy; {{year}} My Company. All rights reserved."],
  },
];