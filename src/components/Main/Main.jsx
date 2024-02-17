import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./Main.css";
import "animate.css";
const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yuvaraj643.github.io/Job-Slayer-API/job.json"
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const filterJobs = () => {
      setFilteredJobs(
        jobs.filter(
          (job) =>
            job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company_name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    };
    filterJobs();
  }, [jobs, searchQuery]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center">
        <Input
          className="animate__animated animate__fadeInDown w-2/3 lg:w-2/5 pb-4"
          key="outside"
          type="email"
          label="🕵️Search Jobs,Company,Location👀👀"
          labelPlacement="outside"
          onChange={handleSearchChange}
        />
      </div>
      <section id="main" className="flex justify-evenly">
        <div id="ad-1" className="w-1/4">
          <div id="container-08c4cc65c91406f4af9cb3825e099e0e"></div>
        </div>

        <Card id="main-card" className="py-2 md:w-5/6 sm:w-4/6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-3xl uppercase font-bold">Job Opportunities</p>
            <h4 className="font-bold text-large">Available Positions</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 sm:w-100  mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-5">
              {filteredJobs.length === 0 && (
                <p className="text-center text-2xl py-4">No jobs found🥲</p>
              )}
              {filteredJobs.map((job) => (
                <div key={job.id}>
                  <div className="card animate__animated animate__fadeInDown">
                    <img
                      src={job.image_url}
                      className="card-img-top"
                      alt={job.company_name}
                    />
                    <div className="card-body text-lg">
                      <span className="flex">
                        <h2 className="font-bold text-blue-400">
                          Company Name :
                        </h2>
                        <h5 className="card-title">{job.company_name}</h5>
                      </span>
                      <span className="flex">
                        <h2 className="font-bold text-blue-400">Position :</h2>
                        <p className="card-text px-2">{job.position}</p>
                      </span>
                      <span className="flex">
                        <h2 className="font-bold text-blue-400">
                          Experience :
                        </h2>
                        <p className="card-text px-2">{job.experience}</p>
                      </span>
                      <span className="flex">
                        <h2 className="font-bold text-blue-400">Location:</h2>
                        <p className="card-text px-2">{job.location}</p>
                      </span>
                      <span className="flex">
                        <h2 className="font-bold text-blue-400">Salary :</h2>
                        <p className="card-text px-2">{job.salary}</p>
                      </span>
                      <div class="flex justify-center items-center p-2">
                        <Link
                          to={`/job/${job.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            className="p-5 font-bold"
                            color="primary"
                            variant="shadow"
                          >
                            APPLY NOW
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <div id="ad-1" className="w-1/4">
          <div id="container-97f981e02c411bf3152233af4cbb8445"></div>
        </div>
      </section>
    </>
  );
};

export default Main;
