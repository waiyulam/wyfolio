import React from "react";
import { Container} from "react-bootstrap";
import TechTab from "./techTab/TechTab";
import TechCard from "./techCard/TechCard";
import { useState } from "react";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiPostgresql,
    DiMysql,
    DiHtml5,
    DiCss3,
    DiNpm,
    DiDart,
    DiJava,
} from "react-icons/di";
import {
    SiPytorch,
    SiDjango,
    SiFlask,
    SiOpencv,
    SiKeras,
    SiFlutter,
    SiJinja,
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiMicrosoftazure,
    SiAmazonaws,
    SiFirebase,
    SiDocker,
    SiSpring,
    SiScikitlearn,
    SiKubernetes,
    SiApachekafka,
    SiRabbitmq,
    SiRedis,
    SiTypescript,
} from "react-icons/si";

import golangLogo from "../../Assets/golang.svg";

const techStack = [
    {
        title: "Python",
        logo: DiPython,
        category: "Programming",
    },
    {   
        title: "Java",
        logo: DiJava,
        category: "Programming",
    },
    {
        title: "Golang",
        logo: golangLogo,
        category: "Programming",
    },
    {
        title: "Pytorch",
        logo: SiPytorch,
        category: "Deep Learning",
    },
    {
        title: "Django",
        logo: SiDjango,
        category: "Full Stack Development",
    },
    {
        title: "Flask",
        logo: SiFlask,
        category: "Full Stack Development",
    },
    {
        title: "Spring",
        logo: SiSpring,
        category: "Full Stack Development",
    },
    {
        title: "OpenCV",
        logo: SiOpencv,
        category: "Deep Learning",
    },
    {
        title: "scikit-learn",
        logo: SiScikitlearn,
        category: "Deep Learning",
    },
    {
        title: "Keras",
        logo: SiKeras,
        category: "Deep Learning",
    },
    {
        title: "Javascript",
        logo: DiJavascript1,
        category: "Full Stack Development",
    },
    {
        title: "Typescript",
        logo: SiTypescript,
        category: "Full Stack Development",
    },
    {
        title: "HTML5",
        logo: DiHtml5,
        category: "Full Stack Development",
    },
    {
        title: "CSS3",
        logo: DiCss3,
        category: "Full Stack Development",
    },
    {
        title: "NPM",
        logo: DiNpm,
        category: "Full Stack Development",
    },
    {
        title: "React.js",
        logo: DiReact,
        category: "Full Stack Development",
    },
    {
        title: "Node.js",
        logo: DiNodejs,
        category: "Full Stack Development",
    },
    {
        title: "Jinja",
        logo: SiJinja,
        category: "Full Stack Development",
    },
    {
        title: "Dart",
        logo: DiDart,
        category: "Full Stack Development",
    },
    {
        title: "Flutter",
        logo: SiFlutter,
        category: "Full Stack Development",
    },
    {
        title: "Mongodb",
        logo: DiMongodb,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "PostgreSQL",
        logo: DiPostgresql,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "MySQL",
        logo: DiMysql,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Azure",
        logo: SiMicrosoftazure,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "AWS",
        logo: SiAmazonaws,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Firebase",
        logo: SiFirebase,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Kubernetes",
        logo: SiKubernetes,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Redis",
        logo: SiRedis,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Kafka",
        logo: SiApachekafka,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "RabbitMQ",
        logo: SiRabbitmq,
        category: "Cloud Infra-Architecture",
    },
    {
        title: "Git",
        logo: DiGit,
        category: "Tools",
    },
    {
        title: "Linux",
        logo: SiLinux,
        category: "Tools",
    },
    {
        title: "Visual Studio Code",
        logo: SiVisualstudiocode,
        category: "Tools",
    },
    {
        title: "Postman",
        logo: SiPostman,
        category: "Tools",
    },
    {
        title: "Docker",
        logo: SiDocker,
        category: "Cloud Infra-Architecture",
    },
]

function TechGallery() {
    const [data, setData] = useState(techStack);
    const categoryData = techStack.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category === "all") {
            setData(techStack);
            return;
        }
        const filteredData = techStack.filter((value) => {
            return value.category === category;
        })
        setData(filteredData);
    }

    return (
        <Container>
            <TechTab filterCategory={filterCategory} tabsData={tabsData} />
            <TechCard data={data} />
        </Container>
    )
}

export default TechGallery;