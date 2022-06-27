import React from "react";
import { Button } from "react-bootstrap";

function TechTab({ filterCategory, tabsData }) {
    return (
        <div className="text-center my-4">
            {
                tabsData.map((category, index) => {
                    return (
                        <Button className="btn btn-outline-primary mx-2 text-capitalize" active onClick={() => filterCategory(category)} key={index}>
                            {category}
                        </Button>
                    )
                })
            }
        </div>
    );
}

export default TechTab;
