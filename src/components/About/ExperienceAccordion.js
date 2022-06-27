import React from "react";
import { Container, Accordion } from "react-bootstrap";
import ExperienceCard from "./experienceCard/ExperienceCard";

const sections = [
    {
        title: "Work & Internships",
        key: "0",
        experiences: [
            {
                title: "Associated Software Engineer",
                company: "SimpliFed, Inc.",
                company_url: "https://www.simplifed.com/",
                logo_path: "simplifed.svg",
                duration: "Sep 2021 - May 2022",
                location: "Cornell University",
                description:
                    "SimpliFed is start-up collab with the lab of Dr. Elizabeth Johnson at Cornell and provideds  virtual breastfeeding and baby feeding support from pregnancy to weaning. I was working on automating healthcare products to better enhance infant nutrition practices. Our goal is to integrate AI system from client-based iOS application to researching-based web application and I was responsible for the whole development operations and management.",
                color: "#0879bf",
            },
            {
                title: "Software Engineer Intern R&D",
                company: "ByteDance",
                company_url: "https://www.bytedance.com/en/",
                logo_path: "bytedance.svg",
                duration: "April 2021 - Aug 2021",
                location: "Shenzhen, China",
                description:
                    "I have worked on improving stability with distributed services by increasing code coverage from 7% to 60%. I developed and maintained automatic unit testing within a CI/CD pipeline that run through the workflow for Go application. I also implemented data migration and general query APIs from relational database to key value store with 2x query throughput increased based on MongoDB engine.",
                color: "#0879bf",
            },
            {
                title: "Software Engineer Intern",
                company: "FFalcon Technology (acquired by TCL Electronics)",
                company_url: "http://www.leiniao.com/#/",
                logo_path: "ffalcon.jpeg",
                duration: "Jun. 2018 - Sept.2018",
                location: "Shenzhen, China",
                description:
                    "I have created a lightweight, multi-user application for personal to-do tracker and group task management system with real time reminder based on Redis and Java Spring frameworks",
                color: "#0879bf",
            },
        ]
    },
    {
        title: "Side Projects",
        key: "1",
        experiences: [
            {
                title: "Code Review Tools : Multi-anchored comments",
                company: "Review Board",
                company_url: "https://www.reviewboard.org/",
                logo_path: "reviewboard.png",
                duration: "Feb 2022 - June 2022",
                location: "Cornell University",
                description:
                    "Review Board is an open source, web-based code and document review tool built to help companies, open source projects, and other organizations keep their quality high and their bug count low. This is a internally-hosted course project and our goal is to extend a well-established and qualified feature that allows new users to be able to “link” a single comment to multiple locations in files in the review. I was responsible for the backend development from database integration to web APIs extension and also team coordination from design to production.",
                color: "#0879bf",
            },
            {
                title: "Occluded Image Segmentation",
                company: "Advisor: Prof. Yong Jae Lee",
                company_url: "https://pages.cs.wisc.edu/~yongjaelee/",
                logo_path: "ucdavis.svg",
                duration: "July 2019 - March 2020",
                location: "UC Davis",
                description:
                    "The project was researching-based and involved image processing and segmentation. It aimed to develop an end-to-end trainable model which predicted the visible and invisible mask for each occluded instance simultaneously. I was responsible for re-implementing a Occlusion-aware RCNN model with Python 3 and PyTorch as baseline. It turned out that the model increased 5% average accuracy in terms of occluded-mask prediction compared to MRCNN with extensive data augmentation and various datasets.",
                color: "#0879bf",
            },
        ]
    },
]
function Experience() {
    return (
            <Accordion className="experience-accord" defaultActiveKey="0" flush>
                {sections.map((section) => {
                    return (
                        <Accordion.Item style={{ marginBottom: "1rem"}} eventKey= {section["key"]} >
                            <Accordion.Header className="experience-accord-header">
                                {section["title"]}
                            </Accordion.Header>
                            <Accordion.Body className="experience-accord-body" >
                                {section["experiences"].map((experience) => {
                                    return (
                                        <ExperienceCard experience={experience} />
                                    );
                                })
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
                }
            </Accordion >
    );
}

export default Experience