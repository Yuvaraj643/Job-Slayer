import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { Route, useParams, Link } from "react-router-dom";
import axios from "axios";
import { CheckIcon } from "./assets/CheckIcon";

const Job = () => {
  const [jobs, setJobData] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  let { jobId } = useParams();
  console.log(jobId);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(
          "https://yuvaraj643.github.io/Job-Slayer-API/job.json"
        );
        setJobData(response.data.filter((job) => job.id == jobId));
        console.log(jobs);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, []);
  return (
    <>
      <section id="main" className="flex justify-evenly">
        <div id="ad-1" className="w-1/4">
          <div id="container-08c4cc65c91406f4af9cb3825e099e0e"></div>
        </div>
        <section>
          <Card className="bg-black">
            {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
            <p className="text-3xl uppercase font-bold">Job Opportunities</p>
            <h4 className="font-bold text-large">Available Positions</h4>
          </CardHeader> */}
            <CardBody className="overflow-visible py-2 sm:w-100  bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-5 bg-black">
                {jobs.map((job) => (
                  <div key={job.id}>
                    <div className="card animate__animated animate__fadeInDown">
                      <span className="flex justify-center w-full">
                        <h5 className="card-title text-4xl font-semibold animate_animated animate__fadeIn">
                          {job.company_name}
                        </h5>
                      </span>
                      <img
                        src={job.image_url}
                        className="card-img-top"
                        alt={job.company_name}
                      />
                      <span className="flex justify-center w-full p-4">
                        <Chip
                          className="sm:w-2/3 w-full sm:px-8 py-6 lg:px-24 bg-blue-200 text-black text-2xl font-semibold"
                          color="primary"
                          variant="dot"
                        >
                          JOB DESCRIPTION
                        </Chip>
                      </span>
                      <div className="card-body text-lg px-6">
                        <span className="flex justify-start ">
                          <Chip
                            startContent={
                              <CheckIcon size={32} height={36} width={36} />
                            }
                            className="w-full px-auto sm:px-4 lg:px-2 text-2xl font-semibold py-6 truncate"
                            variant="faded"
                            color="success"
                          >
                            {job.position}
                          </Chip>
                        </span>
                        <div className="flex py-4">
                          <Chip
                            startContent={
                              <CheckIcon size={26} height={36} width={36} />
                            }
                            className="w-full text-2xl py-4 font-bold text-blue-400"
                          >
                            Qualifications:
                          </Chip>
                        </div>
                        <div>
                          <p className="card-text">
                            {job.qualifications} | {job.experience} |{" "}
                            {job.location}
                          </p>
                        </div>
                        <div className="flex py-4">
                          <Chip
                            startContent={
                              <CheckIcon size={26} height={36} width={36} />
                            }
                            className="w-full text-2xl py-4 font-bold text-blue-400"
                          >
                            Description :
                          </Chip>
                        </div>
                        <div>
                          <p className="card-text">{job.description}</p>
                        </div>
                        <div className="flex py-4">
                          <Chip
                            startContent={
                              <CheckIcon size={26} height={36} width={36} />
                            }
                            className="w-full text-2xl py-4 font-bold text-blue-400"
                          >
                            Responsibilities :
                          </Chip>
                        </div>
                        <div>
                          <ul>
                            {job.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <section className="overflow-visible py-2 sm:w-100 mx-auto">
            <div className="w-full mx-auto p-10">
              <h2 className="font-bold mb-2">Resume Do’s:</h2>
              <ul className="list-disc list-inside">
                <li>
                  Prioritize your contact information, prominently displaying
                  your name, phone number, email address, and LinkedIn profile
                  (if applicable) at the top of your resume.
                </li>
                <li>
                  Craft a succinct professional summary or objective statement
                  that articulately conveys your career goals and highlights
                  your key skills and experiences.
                </li>
                <li>
                  Showcase your relevant work experience, internships, or
                  projects, emphasizing your achievements and duties.
                </li>
                <li>
                  Highlight your technical proficiency, including programming
                  languages, tools, and software relevant to the job you're
                  applying for.
                </li>
                <li>
                  Provide a clear overview of your educational background,
                  listing the institution, degree obtained, major, and
                  graduation date.
                </li>
                <li>
                  Mention any certifications, training programs, or workshops
                  completed that are pertinent to the position.
                </li>
              </ul>
              <h2 className="font-bold mb-2 pt-4">Resume Dont’s:</h2>
              <ul className="list-disc list-inside">
                <li>
                  Avoid including irrelevant personal information such as
                  marital status, gender, and date of birth. Stick to
                  professional details.
                </li>
                <li>
                  Refrain from providing false information; honesty about your
                  skills is crucial as employers may verify during the hiring
                  process.
                </li>
                <li>
                  Customize your resume for each job application instead of
                  using a generic one-size-fits-all approach.
                </li>
                <li>
                  Omit references directly from the resume; consider providing a
                  separate reference page if requested by the employer.
                </li>
                <li>
                  Steer clear of lengthy paragraphs; opt for bullet points and
                  concise sentences to enhance readability.
                </li>
              </ul>
            </div>

            <div class="flex justify-center items-center">
              <button class="flex align-center justify-center bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Apply Now
              </button>
            </div>

            <div class="button-container p-5 flex items-center justify-center transition duration-300 cursor-pointer">
              <div class="glass-btn blue-btn mx-4">
                <img
                  src="https://www.pngitem.com/pimgs/b/40-404856_whatsapp-png-transparente.png"
                  alt="facebook"
                  class="w-14"
                />
              </div>

              <div class="glass-btn red-btn mx-4">
                <img
                  src="https://psfonttk.com/wp-content/uploads/2020/09/Instagram-Logo-Transparent-1024x987.png"
                  alt="youtube"
                  class="w-16"
                />
              </div>
            </div>
          </section>
        </section>
        <div id="ad-1" className="w-1/4">
          <div id="container-97f981e02c411bf3152233af4cbb8445"></div>
        </div>
      </section>
    </>
  );
};

export default Job;
